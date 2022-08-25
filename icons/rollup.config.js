import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

export default [ {
  input: 'index.ts',
  plugins: [
    esbuild(),
  ],
  output: [ {
    format: 'es',
    sourcemap: true,
    file: 'dist/es/icons.mjs',
  }, {
    format: 'cjs',
    sourcemap: true,
    file: 'dist/cjs/icons.js',
  } ],
}, {
  input: 'index.ts',
  plugins: [
    dts(),
  ],
  output: [ {
    format: 'es',
    file: 'dist/ts/types.d.ts',
  } ],
} ]
