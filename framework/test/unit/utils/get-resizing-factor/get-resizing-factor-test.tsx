import { expect } from 'chai'
import { describe, it } from 'mocha'
import { getResizingFactor } from '../../../../lib/components/file-picker/utils'

describe('getResizingFactor', () => {
  it('Returns 1 if imgWidth and imgHeight is both less than max', () => {
    const resizedDimensions = getResizingFactor(100, 200, 200, 300)
    expect(resizedDimensions).to.equal(1)
  })

  it('If imgWidth is under max it returns the fraction', () => {
    const resizedDimensions = getResizingFactor(400, 200, 200, 300)
    expect(resizedDimensions).to.equal(0.5)
  })

  it('If imgHeight is under max it returns the fraction', () => {
    const resizedDimensions = getResizingFactor(100, 600, 200, 300)
    expect(resizedDimensions).to.equal(0.5)
  })

  it('Chooses the smallest resizing factor to get under max', () => {
    const resizedDimensions = getResizingFactor(500, 600, 200, 300)
    expect(resizedDimensions).to.equal(0.4)
  })
})
