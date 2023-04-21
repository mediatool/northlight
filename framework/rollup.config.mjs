import { readFileSync } from 'fs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.devDependencies),
  ...Object.keys(pkg.peerDependencies),
]

export default [
  {
    input: './index.ts',
    external,
    plugins: [ esbuild() ],
    output: [
      {
        format: 'es',
        sourcemap: true,
        file: 'dist/es/northlight.mjs',
      },
      {
        format: 'umd',
        name: 'northlight',
        sourcemap: true,
        file: 'dist/umd/northlight.js',
      },
    ],
  },
  {
    input: './index.ts',
    external,
    plugins: [ esbuild({ minify: true }) ],
    output: [
      {
        format: 'umd',
        name: 'northlight',
        sourcemap: true,
        file: 'dist/umd/northlight.min.js',
      },
    ],
  },
  {
    input: './index.ts',
    external,
    plugins: [ dts() ],
    output: [
      {
        format: 'es',
        file: 'dist/es/northlight.d.mts',
      },
      {
        format: 'cjs',
        file: 'dist/ts/types.d.ts',
      },
    ],
  },
]
