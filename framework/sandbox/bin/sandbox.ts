/* eslint-disable no-restricted-syntax */
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import commonjs from 'vite-plugin-commonjs'
import react from '@vitejs/plugin-react'
import { createServer } from 'vite'

const DEFAULT_SCENARIOS_PATHS = [ 'sandbox/scenarios.ts', 'sandbox/scenarios.tsx' ]

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
    define: {
      __ENV__: '"sandbox"',
    },
    server: {
      port: 5000,
      strictPort: false,
    },
    plugins: [
      commonjs(),
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
