import { expect } from 'chai'
import { advancedParseFloat } from '../../../../lib/components/number-input/advanced-parse-float'

describe('advancedParseFloat', () => {
  it('returns non-numeric input unchanged', () => {
    expect(advancedParseFloat('abc')).to.equal('abc')
  })

  it('returns integers unchanged (no decimal part)', () => {
    expect(advancedParseFloat(5)).to.equal(5)
  })

  it('leaves well-formed decimals unchanged', () => {
    expect(advancedParseFloat(1.5)).to.equal(1.5)
    expect(advancedParseFloat(-3.7)).to.equal(-3.7)
  })

  it('returns a string value with no rounding error unchanged (as string)', () => {
    expect(advancedParseFloat('12.34')).to.equal('12.34')
  })

  it('corrects floating-point representation errors (trailing 0s)', () => {
    expect(advancedParseFloat(0.1 + 0.2)).to.equal(0.3)
    expect(advancedParseFloat(2.0000000000000004)).to.equal(2)
    expect(advancedParseFloat(100.00000000000001)).to.equal(100)
  })

  it('corrects floating-point representation errors (trailing 9s)', () => {
    expect(advancedParseFloat(1.9999999999999998)).to.equal(2)
  })
})
