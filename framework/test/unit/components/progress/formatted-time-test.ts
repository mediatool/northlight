import { expect } from 'chai'
import { formattedTime } from '../../../../lib/components/progress/utils'

describe('formattedTime', () => {
  it('returns an empty string for zero seconds', () => {
    expect(formattedTime(0)).to.equal('')
  })

  it('formats seconds only', () => {
    expect(formattedTime(59)).to.equal(' 59s')
  })

  it('formats whole minutes without seconds', () => {
    expect(formattedTime(60)).to.equal(' 1min')
  })

  it('formats whole hours without minutes or seconds', () => {
    expect(formattedTime(3600)).to.equal(' 1h')
  })

  it('combines hours, minutes and seconds', () => {
    expect(formattedTime(3661)).to.equal(' 1h 1min 1s')
  })
})
