import React from 'react'
import {
  AccordionPanelProps,
  AccordionPanel as ChakraAccordionPanel,
} from '@chakra-ui/react'

/**
 * The container for the details to be revealed.
 * @see {@link htpts://northlight.dev/reference/accordion-panel}
 */
export const AccordionPanel = (props: AccordionPanelProps) => (
  <ChakraAccordionPanel { ...props } />
)
