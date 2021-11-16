import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import image from '@rollup/plugin-image'
import pkg from './package.json'

const externalDeps = Object.keys(pkg.dependencies)
  .filter((key) => !key.includes('@chakra'))

const external = [
  ...Object.keys(pkg.devDependencies),
  ...externalDeps,
]
const extensions = [ '.ts', '.tsx' ]

export default {
  input: './index.ts',
  output: {
    format: 'esm',
    sourcemap: true,
    dir: 'dist',
  },
  external,
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
      extensions,
    }),
    commonjs({
      ignoreGlobal: true,
    }),
    image(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
  ],
}
