import React from 'react'
import { MaskedTextInput } from './masked-text-input'
import { FormattedTextInput } from './formatted-text-input'
import { AbstractTextInputProps } from './types'
import { PlainTextInput } from './plain-text-input'

export const AbstractTextInput = (props: AbstractTextInputProps) => {
  const { mask, formatter, ...rest } = props

  if (mask && formatter) {
    throw new Error('mask and formatter cannot be used together')
  }

  if (mask !== undefined) {
    return (
      <MaskedTextInput mask={ mask } { ...rest } />
    )
  }

  if (formatter !== undefined) {
    return (
      <FormattedTextInput formatter={ formatter } { ...rest } />
    )
  }

  return (
    <PlainTextInput { ...rest } />
  )
}
