import { expect } from 'chai'
import { getMatchingValue } from '../../../../lib/components'

describe('getMatchingValue', () => {
  const options = [
    { label: 'Label1', value: 'value1' },
    { label: 'Label2', value: 'value2' },
    { label: 'Label3', value: 'value3' },
  ]

  it('should return the correct option when value is a string', () => {
    const value = 'value2'
    const result = getMatchingValue(value, options)
    expect(result).to.deep.equal({ label: 'Label2', value: 'value2' })
  })

  it('should return an array of matching options when value is an array of strings', () => {
    const values = [ 'value1', 'value3' ]
    const result = getMatchingValue(values, options)
    expect(result).to.deep.equal([
      { label: 'Label1', value: 'value1' },
      { label: 'Label3', value: 'value3' },
    ])
  })

  it('should return an empty array when no options match', () => {
    const values = [ 'value4', 'value5' ]
    const result = getMatchingValue(values, options)
    expect(result).to.deep.equal([])
  })
})
