import React from 'react'
import { all, isNil, not } from 'ramda'
import { InputGroup } from '../../components/input'
import { InputGroupWrapperProps } from './types.ts'

export const InputGroupWrapper = ({
  inputLeftElement,
  inputRightElement,
  children,
  ...rest
}: InputGroupWrapperProps) => {
  const containsInputGroupElement =
  not(all(isNil, [ inputLeftElement, inputRightElement ]))

  return containsInputGroupElement
    ? (
      <InputGroup { ...rest }>
        { inputLeftElement }
        { children }
        { inputRightElement }
      </InputGroup>
    )
    : <>{ children }</>
}
