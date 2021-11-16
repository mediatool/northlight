/* eslint-disable */
import path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

interface ResolveConfig {
  alias: Record<string, string>
  dedupe: string[]
}

const getResolvableAliases = (): ResolveConfig => {
  const modulesPath = path.join(__dirname, '../')

  return fs
    .readdirSync(modulesPath)
    .reduce((acc: ResolveConfig, folder: string) => {
      if (folder === 'sandbox' || folder === 'framework') {
        return acc
      }

      const modulePath = path.join(modulesPath, folder)

      const pkg = require(`${modulePath}/package.json`)
      const moduleEntryPoint = path.normalize(`${modulePath}/${pkg.module}`)

      acc.alias[pkg.name] = moduleEntryPoint
      acc.dedupe = [
        ...new Set([
          ...acc.dedupe,
          ...Object.keys(pkg.dependencies),
        ]),
      ]

      return acc
    }, { alias: {}, dedupe: [] })
}

const { alias, dedupe } = getResolvableAliases()

export default defineConfig({
  server: {
    port: 3008,
    fs: {
      strict: false,
    },
  },
  plugins: [ reactRefresh() ],
})
