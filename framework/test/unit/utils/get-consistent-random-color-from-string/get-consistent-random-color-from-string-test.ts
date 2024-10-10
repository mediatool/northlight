import { expect } from 'chai'
import { palette } from '@northlight/tokens'
import { keys, omit } from 'ramda'
import { getConsistentRandomColorFromString } from '../../../../lib/utils/get-consistent-random-color-from-string'

const availableColorSchemes = keys(omit([ 'mono' ], palette))

describe('getConsistentRandomColorFromString', () => {
  it('should return a color from the default palette', () => {
    const str = 'test'
    const color = getConsistentRandomColorFromString(str)
    expect(availableColorSchemes).to.include(color)
  })

  it('should return a consistent color for the same string input', () => {
    const str = 'repeatable'
    const color1 = getConsistentRandomColorFromString(str)
    const color2 = getConsistentRandomColorFromString(str)
    expect(color1).to.equal(color2)
  })

  it('should return different colors for different string inputs', () => {
    const str1 = 'string1'
    const str2 = 'string2'
    const color1 = getConsistentRandomColorFromString(str1)
    const color2 = getConsistentRandomColorFromString(str2)
    expect(color1).to.not.equal(color2)
  })

  it('should use a custom color array if provided', () => {
    const str = 'custom'
    const customColors = [ '#123456', '#654321', '#abcdef' ]
    const color = getConsistentRandomColorFromString(str, customColors)
    expect(customColors).to.include(color)
  })
})
