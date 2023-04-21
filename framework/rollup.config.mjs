import { readFileSync } from 'fs'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))

const external = [
  ...Object.keys(pkg.peerDependencies),
]

export default [ {
  input: './index.ts',
  external,
  plugins: [
    json(),
    commonjs(),
    esbuild(),
    resolve(),
    image(),
  ],
  output: [ {
    format: 'es',
    sourcemap: true,
    file: 'dist/es/mediatool-ui-framework.mjs',
  }, {
    format: 'umd',
    name: 'mtUiFramework',
    sourcemap: true,
    file: 'dist/umd/mediatool-ui-framework.js',
  } ],
}, {
  input: './index.ts',
  external,
  plugins: [
    json(),
    commonjs(),
    esbuild({ minify: true }),
    resolve(),
    image(),
  ],
  output: [ {
    format: 'umd',
    name: 'mtUiFramework',
    sourcemap: true,
    file: 'dist/umd/mediatool-ui-framework.min.js',
  } ],
}, {
  input: './index.ts',
  external,
  plugins: [
    dts(),
  ],
  output: [ {
    format: 'es',
    file: 'dist/es/mediatool-ui-framework.d.mts',
  }, {
    format: 'cjs',
    file: 'dist/ts/types.d.ts',
  } ],
} ]
