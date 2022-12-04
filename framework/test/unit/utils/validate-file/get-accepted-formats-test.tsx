import { expect } from 'chai'
import { getAcceptedFormats } from '../../../../lib/components/file-picker/utils'

describe('getAcceptedFormats', () => {
  it('Can pick out simple extensions', () => {
    const acceptedExtensions = getAcceptedFormats('image/*')
    expect(acceptedExtensions).to.deep.equal([ 'image' ])
  })

  it('Can pick out multiple extensions with varying whitespacing', () => {
    const acceptedExtensions = getAcceptedFormats('image/*,        audio/*,        other/*')
    expect(acceptedExtensions).to.deep.equal([ 'image', 'audio', 'other' ])
  })

  it('Can ignore other unrelated characters', () => {
    const acceptedExtensions = getAcceptedFormats(' .jpg , image/*,  .mkv ,   .mp4,  video/*')
    expect(acceptedExtensions).to.deep.equal([ 'image', 'video' ])
  })
})
