import React from 'react'
import { AccordionButtonProps, AccordionButton as ChakraAccordionButton } from '@chakra-ui/react'

/**
 * The button that toggles the expand/collapse state of the accordion item.
 * This button must be wrapped in an element with role heading.
 * @see Accordion
 * @see AcordionItem
 * @see {@link https://northlight.dev/reference/accordion-button}
 * @example
 * (Needs to be wrapped around AccordionItem and
 * Accordion context)
 * (?
 * <Accordion>
 * <AccordionItem>
 * <AccordionButton>Content</AccordionButton>
 * </AccordionItem>
 * </Accordion>
 * ?)
 */
export const AccordionButton = (props: AccordionButtonProps) => (
  <ChakraAccordionButton { ...props } />
)
