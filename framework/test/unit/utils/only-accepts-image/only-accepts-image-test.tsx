import { expect } from 'chai'
import { onlyAcceptsImages } from '../../../../lib/components/file-picker/utils'

describe('onlyAcceptsImages', () => {
  it('Can pick out file format', () => {
    const isOnlyImages = onlyAcceptsImages('image/*')
    const isNotOnlyImages = onlyAcceptsImages('image/*, video/*')
    const isNotImages = onlyAcceptsImages('video/*')

    expect(isOnlyImages).to.equal(true)
    expect(isNotOnlyImages).to.equal(false)
    expect(isNotImages).to.equal(false)
  })

  it('Can pick out extensions', () => {
    const onlyImages = onlyAcceptsImages('.jpg, .gif,    .png')
    const multipleFileTypes = onlyAcceptsImages('.mp4, .jpg, .png,   .gif')

    expect(onlyImages).to.equal(true)
    expect(multipleFileTypes).to.equal(false)
  })

  it('Can handle both file formats and extensions at same time', () => {
    const pluriMixOne = onlyAcceptsImages('image/*, .mp4, .jpg, .wav')
    const pluriMixTwo = onlyAcceptsImages('.jpg, .gif, .tiff, video/*')
    const monoMix = onlyAcceptsImages('image/*, .jpg, .png, .gif')

    expect(pluriMixOne).to.equal(false)
    expect(pluriMixTwo).to.equal(false)
    expect(monoMix).to.equal(true)
  })

  it('Handles default cases', () => {
    const allFiles = onlyAcceptsImages('*')
    const noFiles = onlyAcceptsImages('')

    expect(allFiles).to.equal(false)
    expect(noFiles).to.equal(false)
  })
})
