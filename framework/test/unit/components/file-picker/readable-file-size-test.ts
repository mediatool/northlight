import { expect } from 'chai'
import { readableFileSize } from '../../../../lib/components/file-picker/utils'

describe('readableFileSize', () => {
  it('returns 0 for non-positive sizes', () => {
    expect(readableFileSize(0)).to.equal(0)
    expect(readableFileSize(-100)).to.equal(0)
  })

  it('formats bytes', () => {
    expect(readableFileSize(500)).to.equal('500.0 B')
  })

  it('formats kilobytes', () => {
    expect(readableFileSize(1024)).to.equal('1.0 kB')
  })

  it('formats megabytes', () => {
    expect(readableFileSize(1024 ** 2)).to.equal('1.0 MB')
  })

  it('formats gigabytes', () => {
    expect(readableFileSize(1024 ** 3)).to.equal('1.0 GB')
  })
})
