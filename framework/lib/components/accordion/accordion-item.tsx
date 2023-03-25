import React from 'react'
import {
  AccordionItemProps,
  AccordionItem as ChakraAccordionItem,
} from '@chakra-ui/react'

export const AccordionItem = (props: AccordionItemProps) => (
  <ChakraAccordionItem { ...props } />
)
