/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import NpmImport from 'less-plugin-npm-import'
// import babel from '@rollup/plugin-babel'
import pkg from './package.json'

const external = [ ...Object.keys(pkg.devDependencies), ...Object.keys(pkg.dependencies), 'react', 'react-dom' ]
const extensions = [ '.js', '.jsx', '.ts', '.tsx' ]

export default {
  input: [ './index.ts', './lib/style.less' ],
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
    postcss({
      use: [ [ 'less', {
        plugins: [ new NpmImport({ prefix: '~' }) ],
      } ] ],
      extract: 'style.css',
    }),
  ],
}
