import { readFileSync } from 'fs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'

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
        file: 'dist/es/northlight.js',
      },
      {
        format: 'umd',
        name: 'northlight',
        sourcemap: true,
        file: 'dist/umd/northlight.cjs',
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
        file: 'dist/umd/northlight.min.cjs',
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
        file: 'dist/es/northlight.d.ts',
      },
    ],
  },
  {
    input: './sandbox/lib/index.ts',
    external,
    plugins: [ postcss({ inject: true }), esbuild({ jsx: 'automatic' }) ],
    output: [
      {
        format: 'es',
        sourcemap: true,
        file: 'dist/sandbox/index.js',
      },
      {
        format: 'cjs',
        sourcemap: true,
        file: 'dist/sandbox/index.cjs',
      },
    ],
  },
  {
    input: './sandbox/lib/index.ts',
    external: [ ...external, /\.css$/ ],
    plugins: [ dts() ],
    output: [
      {
        format: 'es',
        file: 'dist/sandbox/index.d.ts',
      },
    ],
  },
]
