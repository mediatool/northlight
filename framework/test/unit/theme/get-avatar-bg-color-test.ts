import { expect } from 'chai'
import { getAvatarBgColor } from '../../../lib/theme/components/avatar/get-avatar-bg-color'

const color = {
  background: {
    avatar: {
      image: 'IMAGE_BG',
      default: 'DEFAULT_BG',
    },
  },
}

describe('getAvatarBgColor', () => {
  it('uses the image background when an image is present', () => {
    expect(getAvatarBgColor('some-src', 'Jane Doe', color)).to.equal('IMAGE_BG')
  })

  it('uses the default background when neither image nor name is present', () => {
    expect(getAvatarBgColor('', '', color)).to.equal('DEFAULT_BG')
  })

  it('derives a deterministic color from the name when only a name is present', () => {
    const first = getAvatarBgColor('', 'Jane Doe', color)
    const second = getAvatarBgColor('', 'Jane Doe', color)
    expect(first).to.be.a('string')
    expect(first).to.equal(second)
    expect(first).to.not.equal('IMAGE_BG')
    expect(first).to.not.equal('DEFAULT_BG')
  })
})
