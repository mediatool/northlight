import React, { forwardRef, useContext, useRef } from 'react'
import {
  Input as ChakraInput,
  InputProps,
  useMergeRefs,
  useToken,
} from '@chakra-ui/react'
import { LeftElementContext } from './input-group'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const leftElement = useContext(LeftElementContext)
  const inputRef = useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)
  const paddingInlineStart = useToken('space.padding-inline.input', 'default')
  const leftWidth = leftElement ? leftElement.leftWidth : 0

  return (
    <ChakraInput
      paddingInlineStart={ `${
        leftWidth + parseFloat(paddingInlineStart) * 16
      }px` }
      ref={ mergeRef }
      { ...props }
    />
  )
})
