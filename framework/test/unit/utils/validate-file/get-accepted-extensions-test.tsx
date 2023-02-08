import { expect } from 'chai'
import { getAcceptedExtensions } from '../../../../lib/components/file-picker/utils'

describe('getAcceptedExtensions', () => {
  it('Can pick out simple extensions', () => {
    const acceptedExtensions = getAcceptedExtensions('.jpg')
    expect(acceptedExtensions).to.deep.equal([ 'jpg' ])
  })

  it('Can pick out multiple extensions with varying whitespacing', () => {
    const acceptedExtensions = getAcceptedExtensions(' .jpg , .mkv ,      .mp4')
    expect(acceptedExtensions).to.deep.equal([ 'jpg', 'mkv', 'mp4' ])
  })

  it('Can ignore other unrelated characters', () => {
    const acceptedExtensions = getAcceptedExtensions(' .jpg , image/*,  .mkv ,   abcde  .mp4, video/*')
    expect(acceptedExtensions).to.deep.equal([ 'jpg', 'mkv' ])
  })
})
