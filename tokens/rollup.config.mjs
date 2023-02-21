import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default [ {
  input: './index.ts',
  plugins: [
    json(),
    esbuild(),
  ],
  output: [ {
    format: 'es',
    sourcemap: true,
    file: 'dist/es/tokens.mjs',
  }, {
    format: 'cjs',
    sourcemap: true,
    file: 'dist/cjs/tokens.js',
  } ],
}, {
  input: './index.ts',
  plugins: [
    json(),
    dts(),
  ],
  output: [ {
    format: 'es',
    file: 'dist/ts/types.d.ts',
  } ],
} ]
