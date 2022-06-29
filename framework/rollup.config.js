import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import pkg from './package.json'

const external = [
  ...Object.keys(pkg.devDependencies),
  ...Object.keys(pkg.dependencies),
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
    json({
      compact: true,
    }),
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
