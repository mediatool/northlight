import { expect } from 'chai'
import { describe, it } from 'mocha'
import { isValidFile } from '../../../../lib/components/file-picker/utils'

const testFile = {
  type: 'image/jpg',
  size: 5e3,
}

describe('getAcceptedExtensions', () => {
  it('Can pick out file size', () => {
    const errorMessage = isValidFile(testFile, '', 5e2)
    expect(errorMessage).to.deep.equal({
      isValid: false,
      errorMessage: 'File size is too big',
    })
  })

  it('Can pick out file format', () => {
    const errorMessage = isValidFile(testFile, 'video/*', 5e4)
    expect(errorMessage).to.deep.equal({
      isValid: false,
      errorMessage: 'File format not supported',
    })
  })

  it('Picks out file size if both file format and file size incorrect', () => {
    const errorMessage = isValidFile(testFile, 'video/*', 5e2)
    expect(errorMessage).to.deep.equal({
      isValid: false,
      errorMessage: 'File size is too big',
    })
  })

  it('Returns valid if all pass', () => {
    const errorMessage = isValidFile(testFile, 'image/*', 5e4)
    expect(errorMessage).to.deep.equal({
      isValid: true,
      errorMessage: '',
    })
  })
})
