import { expect } from 'chai'
import { palette } from '@mediatool/tokens'
import { getShades } from '../../../../lib'

const testShades500 = [
  `${palette.blue['500']}`,
  `${palette.gray['500']}`,
  `${palette.green['500']}`,
  `${palette.mediatoolBlue['500']}`,
  `${palette.pink['500']}`,
  `${palette.red['500']}`,
  `${palette.orange['500']}`,
  `${palette.purple['500']}`,
  `${palette.yellow['500']}`,
  `${palette.teal['500']}`,
]

const testShades500to600 = [
  `${palette.blue['500']}`,
  `${palette.blue['600']}`,
  `${palette.gray['500']}`,
  `${palette.gray['600']}`,
  `${palette.green['500']}`,
  `${palette.green['600']}`,
  `${palette.mediatoolBlue['500']}`,
  `${palette.mediatoolBlue['600']}`,
  `${palette.pink['500']}`,
  `${palette.pink['600']}`,
  `${palette.red['500']}`,
  `${palette.red['600']}`,
  `${palette.orange['500']}`,
  `${palette.orange['600']}`,
  `${palette.purple['500']}`,
  `${palette.purple['600']}`,
  `${palette.yellow['500']}`,
  `${palette.yellow['600']}`,
  `${palette.teal['500']}`,
  `${palette.teal['600']}`,
]

describe('getShades', () => {
  it('Returns correct shades with 1 argument', () => {
    const shades500 = getShades(500)
    expect(shades500).to.deep.equal(testShades500)
  })

  it('Returns same shade if two arguments the same', () => {
    const shades500 = getShades(500)
    const shades500to500 = getShades(500, 500)
    expect(shades500).to.deep.equal(shades500to500)
  })

  it('Returns correct shades within intervall', () => {
    const shades500to600 = getShades(500, 600)
    expect(shades500to600).to.deep.equal(testShades500to600)
  })

  it('Still return same intervall altough flipped', () => {
    const shades500to600 = getShades(500, 600)
    const shades600to500 = getShades(600, 500)
    expect(shades500to600).to.deep.equal(shades600to500)
  })

  it('Handles negative values', () => {
    const shadesNegative500 = getShades(-500)
    expect(shadesNegative500).to.deep.equal([])
  })

  it('Handles negative values in intervall', () => {
    const shadesNegative500 = getShades(-500, -600)
    expect(shadesNegative500).to.deep.equal([])
  })
})
