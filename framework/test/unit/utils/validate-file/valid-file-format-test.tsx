import { expect } from 'chai'
import { describe, it } from 'mocha'
import { validFileFormat } from '../../../../lib/components/file-picker/utils'

describe('validFileFormat', () => {
  it('can validate with type/* syntax', () => {
    const testFile = {
      type: 'image/jpeg',
    }
    const isValid = validFileFormat(testFile, 'image/*')
    expect(isValid).to.equal(true)
  })

  it('can validate format by specific extensions', () => {
    const testFile = {
      type: 'video/mp4',
    }
    const isValid = validFileFormat(testFile, 'audio/*, .jpeg ,.mp4')
    expect(isValid).to.equal(true)
  })
})
