import { expect } from 'chai'
import { getNewUploadingFiles } from '../../../../lib/components/file-picker/utils'
import { FileFormat } from '../../../../lib/components/file-picker/types'

const file = (name: string, size: number): FileFormat => ({
  _id: name,
  name,
  size,
  src: null,
  type: 'image/png',
})

const a = file('a', 10)
const b = file('b', 20)
const c = file('c', 30)

describe('getNewUploadingFiles', () => {
  it('adopts the current list when nothing was removed', () => {
    const result = getNewUploadingFiles([ a ], [ a, b ], [ b ])
    expect(result).to.deep.equal([ a, b ])
  })

  it('adopts the current list when a removed file is part of the new files', () => {
    const result = getNewUploadingFiles([ a, b ], [ a ], [ b ])
    expect(result).to.deep.equal([ a ])
  })

  it('marks a genuinely removed file as uploaded rather than dropping it', () => {
    const result = getNewUploadingFiles([ file('a', 10), file('b', 20) ], [ file('a', 10) ], [ c ])
    expect(result).to.deep.equal([
      file('a', 10),
      { ...file('b', 20), uploaded: 20 },
    ])
  })
})
