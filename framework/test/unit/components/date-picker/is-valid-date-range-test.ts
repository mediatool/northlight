import { expect } from 'chai'
import { isValidDateRange } from '../../../../lib/components/date-picker/date-picker-field/utils'

describe('isValidDateRange', () => {
  it('accepts an object with string startDate and endDate', () => {
    expect(isValidDateRange({ startDate: '2024-01-01', endDate: '2024-01-31' })).to.equal(true)
  })

  it('rejects objects missing either key', () => {
    expect(isValidDateRange({ startDate: '2024-01-01' })).to.equal(false)
    expect(isValidDateRange({ endDate: '2024-01-31' })).to.equal(false)
  })

  it('rejects objects whose dates are not strings', () => {
    expect(isValidDateRange({ startDate: 1, endDate: 2 })).to.equal(false)
  })

  it('rejects non-object values', () => {
    expect(isValidDateRange(null)).to.equal(false)
    expect(isValidDateRange('2024-01-01')).to.equal(false)
    expect(isValidDateRange(undefined)).to.equal(false)
  })
})
