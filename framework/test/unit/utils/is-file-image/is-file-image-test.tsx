import { expect } from 'chai'
import { describe, it } from 'mocha'
import { isFileImage } from '../../../../lib/components/file-picker/utils'

describe('isFileImage', () => {
  it('Can pick out the type from a fileformat object', () => {
    const testFile = {
      type: 'jpg',
    }
    const acceptedExtensions = isFileImage(testFile)
    expect(acceptedExtensions).to.equal(true)
  })

  it('Can pick out some more types', () => {
    const testFilePNG = {
      type: 'png',
    }
    const testFileGIF = {
      type: 'gif',
    }
    const testFileTIFF = {
      type: 'tiff',
    }
    const testFileJFIF = {
      type: 'jfif',
    }
    const controlTestFile = {
      type: 'mp4',
    }
    const testPNG = isFileImage(testFilePNG)
    const testGIF = isFileImage(testFileGIF)
    const testTIFF = isFileImage(testFileTIFF)
    const testJFIF = isFileImage(testFileJFIF)
    const testControl = isFileImage(controlTestFile)
    expect(testPNG).to.equal(true)
    expect(testGIF).to.equal(true)
    expect(testTIFF).to.equal(true)
    expect(testJFIF).to.equal(true)
    expect(testControl).to.equal(false)
  })

  it('Picks out the type of a javascript File Object', () => {
    const myFile = new File([], 'myfile', { type: 'image/jpg' })
    const isImage = isFileImage(myFile)
    expect(isImage).to.equal(true)
  })
})
