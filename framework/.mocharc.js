module.exports = {
  extension: [ 'ts', 'tsx' ],
  recursive: true,
  require:[  'global-jsdom/register', '@esbuild-kit/cjs-loader' ],
}
