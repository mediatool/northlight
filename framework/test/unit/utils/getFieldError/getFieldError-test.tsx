import { expect } from 'chai'
import { getFieldError } from '../../../../lib'

describe('getFieldError', () => {
  it('Hanldes basic object', () => {
    const errors = {
      firstname: {
        message: 'Error message',
      },
    }
    const fieldError = getFieldError<typeof errors>('firstname', errors)
    expect(fieldError).to.deep.equal(errors.firstname)
  })
  it('Handles nested object', () => {
    const errors = {
      files: {
        fileOne: {
          message: 'Error message',
        },
      },
    }
    const fieldError = getFieldError<typeof errors>('files.fileOne', errors)
    expect(fieldError).to.deep.equal(errors.files.fileOne)
  })
  it('Handles objects with nested arrays', () => {
    const errors = {
      files: [
        {
          data: {
            message: 'Error message',
          },
        },
      ],
    }
    const fieldError = getFieldError<typeof errors>('files[0]', errors)
    expect(fieldError).to.deep.equal(errors.files[0])
  })
  it('Handles nested object inside nested array inside nested object inside nested array inside nested object', () => {
    const errors = {
      personInfo: {
        variants: [
          { Default: [
            { color: {
              message: 'Select another color',
            } },
          ] },
        ],
      },
    }
    const fieldError = getFieldError<typeof errors>('personInfo.variants[0].Default[0].color', errors)
    expect(fieldError).to.deep.equal(errors.personInfo.variants[0].Default[0].color)
  })
})
