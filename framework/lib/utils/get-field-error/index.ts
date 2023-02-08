import { path, replace, split } from 'ramda'
import { FieldErrorsImpl, FieldValues } from 'react-hook-form'
import { FieldErrorType } from 'lib/components/form/types'

export function getFieldError<T extends FieldValues> (name: string, errors: FieldErrorsImpl<T>) {
  const nameWithoutRightBracket = replace(/]/g, '', name)
  const leftBracketAndDot = /[.[\]]/g
  const fieldErrorPath = split(leftBracketAndDot, nameWithoutRightBracket)

  const fieldError: FieldErrorType<T> = path(fieldErrorPath, errors)
  return fieldError
}
