import { expect } from 'chai'
import { trimFormValues } from '../../../../lib'

describe('trim-form-values', () => {
  it('Handles basic object', () => {
    const testObj = {
      testOne: '  N ame   ',
    }

    const formattedObj = {
      testOne: 'N ame',
    }

    const formatted = trimFormValues(testObj)
    expect(formatted).to.deep.equal(formattedObj)
  })

  it('Handles nested obj', () => {
    const testObj = {
      another: 'hej  ',
      testOne: {
        nested: '  N ame   ',
      },
    }

    const formattedObj = {
      another: 'hej',
      testOne: {
        nested: 'N ame',
      },
    }

    const formatted = trimFormValues(testObj)
    expect(formatted).to.deep.equal(formattedObj)
  })

  it('Handles deeply nested object', () => {
    const testObj = {
      another: 'hej  ',
      testOne: {
        nested: '  N ame   ',
        doubleNest: {
          doubleNested: '  N ame   ',
        },
      },
      testTwo: {
        nested: '  N ame   ',
      },
    }

    const formattedObj = {
      another: 'hej',
      testOne: {
        nested: 'N ame',
        doubleNest: {
          doubleNested: 'N ame',
        },
      },
      testTwo: {
        nested: 'N ame',
      },
    }

    const formattedSecond = trimFormValues(testObj)

    expect(formattedSecond).to.deep.equal(formattedObj)
  })

  it('Handles arrays', () => {
    const testObj = {
      another: [ '  hej ', '  hej ', '  hej ' ],
    }

    const formattedObj = {
      another: [ 'hej', 'hej', 'hej' ],
    }

    const formatted = trimFormValues(testObj)
    expect(formatted).to.deep.equal(formattedObj)
  })

  it('Handles deeply nested arrrays', () => {
    const testObj = {
      nested: {
        arrayOne: [ '  hej ', {
          nestedTwo: {
            arrayTwo: [ ' he j ' ],
          },
        } ],
      },
    }

    const formattedObj = {
      nested: {
        arrayOne: [ 'hej', {
          nestedTwo: {
            arrayTwo: [ 'he j' ],
          },
        } ],
      },
    }

    const formatted = trimFormValues(testObj)
    expect(formatted).to.deep.equal(formattedObj)
  })
})
