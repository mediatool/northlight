import { expect } from 'chai'
import { describe, it } from 'mocha'
import { isFile } from '../../../../lib/components/file-picker/utils'

describe('isFile', () => {
  it('Throws out simple types', () => {
    const checkOne = isFile('.jpg')
    const checkTwo = isFile(null)
    expect(checkOne).to.equal(false)
    expect(checkTwo).to.equal(false)
  })

  it('Can draw attention to the sus imposter', () => {
    const imposter = {
      src: 'base64:/image/kVa8aef3laefaelbi',
      type: 'jpeg',
      size: 5e3,
      name: 'imposter',
      _id: '238479327adsfa',
    }
    const crewMate = new File([], 'myfile', { type: 'image/jpg' })

    const imposterCheck = isFile(imposter)
    const crewMateCheck = isFile(crewMate)
    expect(imposterCheck).to.equal(false)
    expect(crewMateCheck).to.equal(true)
  })
})
