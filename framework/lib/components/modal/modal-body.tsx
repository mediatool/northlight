import React from 'react'
import { ModalBody as ChakraModalBody, ModalBodyProps } from '@chakra-ui/react'

export const ModalBody = (props: ModalBodyProps) => (
  <ChakraModalBody minH={ props.h } maxH={ props.h } { ...props } />
)
