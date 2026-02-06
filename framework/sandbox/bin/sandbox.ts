/* eslint-disable no-restricted-syntax */
import { existsSync, lstatSync, readFileSync, readdirSync, realpathSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { createServer } from 'vite'
import { reduce } from 'ramda'

const DEFAULT_SCENARIOS_PATHS = [ 'sandbox/scenarios.ts', 'sandbox/scenarios.tsx' ]

function getSubPaths (dep: string, depPkg: Record<string, unknown>, realPath: string): string[] {
  if (depPkg.exports && typeof depPkg.exports === 'object') {
    return reduce((acc, key) => {
      if (key === '.' || !key.startsWith('./') || key.includes('*')) return acc
      const subPath = key.slice(2)
      if (subPath.startsWith('.') || subPath === 'package.json') return acc
      return [ ...acc, `${dep}/${subPath}` ]
    }, [] as string[], Object.keys(depPkg.exports as object))
  }

  const mainFile = depPkg.main || 'index.js'

  return reduce((acc, file) => {
    if (file.endsWith('.js') && file !== mainFile && !file.startsWith('.')) {
      return [ ...acc, `${dep}/${file.slice(0, -3)}` ]
    }
    return acc
  }, [] as string[], readdirSync(realPath))
}

function isCjsWorkspaceDep (cwd: string, dep: string): boolean {
  try {
    const depDir = resolve(cwd, 'node_modules', ...dep.split('/'))
    if (!lstatSync(depDir).isSymbolicLink()) return false

    const realPath = realpathSync(depDir)
    if (realPath.includes('/node_modules/')) return false

    const depPkgPath = resolve(realPath, 'package.json')
    if (!existsSync(depPkgPath)) return false

    const depPkg = JSON.parse(readFileSync(depPkgPath, 'utf-8'))
    return depPkg.type !== 'module'
  } catch {
    return false
  }
}

function readDepPkg (
  cwd: string,
  dep: string
): { depPkg: Record<string, unknown>, realPath: string } {
  const depDir = resolve(cwd, 'node_modules', ...dep.split('/'))
  const realPath = realpathSync(depDir)
  const depPkg = JSON.parse(readFileSync(resolve(realPath, 'package.json'), 'utf-8'))
  return { depPkg, realPath }
}

function findCjsWorkspaceDeps (cwd: string): string[] {
  const pkgPath = resolve(cwd, 'package.json')
  if (!existsSync(pkgPath)) return []

  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
  const depNames = Object.keys({
    ...pkg.dependencies,
    ...pkg.devDependencies,
  })

  return reduce((acc, dep) => {
    if (!isCjsWorkspaceDep(cwd, dep)) return acc
    const { depPkg, realPath } = readDepPkg(cwd, dep)
    return [ ...acc, dep, ...getSubPaths(dep, depPkg, realPath) ]
  }, [] as string[], depNames)
}

function findScenariosFile (cwd: string, scenariosArg?: string): string | undefined {
  if (scenariosArg) {
    const absolutePath = resolve(cwd, scenariosArg)
    return existsSync(absolutePath) ? absolutePath : undefined
  }
  for (const path of DEFAULT_SCENARIOS_PATHS) {
    const absolutePath = resolve(cwd, path)
    if (existsSync(absolutePath)) return absolutePath
  }
  return undefined
}

async function main () {
  const cwd = process.cwd()
  const scenariosArg = process.argv[2]
  const absoluteScenariosPath = findScenariosFile(cwd, scenariosArg)
  const cjsWorkspaceDeps = findCjsWorkspaceDeps(cwd)

  if (!absoluteScenariosPath) {
    console.error('Scenarios file not found.')
    console.error(
      scenariosArg
        ? `Please check the path: ${resolve(cwd, scenariosArg)}`
        : `Create one of: ${DEFAULT_SCENARIOS_PATHS.join(', ')}`
    )
    process.exit(1)
  }

  const virtualEntryId = 'virtual:sandbox-entry.tsx'
  const resolvedVirtualEntryId = `\0${virtualEntryId}`

  const virtualHtmlId = 'virtual:sandbox-html'

  const server = await createServer({
    configFile: false,
    root: cwd,
    server: {
      port: 5000,
      strictPort: false,
    },
    optimizeDeps: {
      include: cjsWorkspaceDeps,
    },
    plugins: [
      react(),
      {
        name: 'sandbox-virtual-entry',
        resolveId (id) {
          if (id === virtualEntryId) return resolvedVirtualEntryId
          if (id === '/' || id === '/index.html') return virtualHtmlId
          return undefined
        },
        load (id) {
          if (id === resolvedVirtualEntryId) {
            return `
              import { createElement } from 'react'
              import { createRoot } from 'react-dom/client'
              import { SandboxViewer } from '@northlight/ui/sandbox'
              import { scenarios } from '${absoluteScenariosPath}'

              const root = document.getElementById('root')
              createRoot(root).render(createElement(SandboxViewer, { scenarios }))
            `
          }
          if (id === virtualHtmlId) {
            return `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Sandbox</title>
                </head>
                <body>
                  <div id="root"></div>
                  <script type="module" src="/@id/__x00__${virtualEntryId}"></script>
                </body>
              </html>
            `
          }
          return undefined
        },
      },
      {
        name: 'sandbox-html-middleware',
        configureServer (devServer) {
          devServer.middlewares.use((req, res, next) => {
            const url = req.url ?? ''
            const isAsset =
              url.startsWith('/@') || url.startsWith('/node_modules') || url.includes('.')

            if (!isAsset) {
              const html = `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Sandbox</title>
                  </head>
                  <body>
                    <div id="root"></div>
                    <script type="module" src="/@id/__x00__${virtualEntryId}"></script>
                  </body>
                </html>
              `
              devServer.transformIndexHtml(url, html).then((transformed) => {
                res.setHeader('Content-Type', 'text/html')
                res.end(transformed)
              })
              return
            }
            next()
          })
        },
      },
    ],
  })

  await server.listen()
  server.printUrls()
}

main()
