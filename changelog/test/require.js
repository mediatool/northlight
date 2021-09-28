const babel = require('@babel/register').default
const jsdom = require('global-jsdom')
const chai = require('chai')
const spies = require('chai-spies')

babel({ extensions: [ '.ts', '.tsx', '.js', '.jsx' ] })
jsdom()
chai.use(spies)

const noop = () => {}

require.extensions['.css'] = noop
require.extensions['.less'] = noop
require.extensions['.scss'] = noop
require.extensions['.png'] = noop
require.extensions['.jpg'] = noop
require.extensions['.jpeg'] = noop
require.extensions['.gif'] = noop
require.extensions['.svg'] = noop
