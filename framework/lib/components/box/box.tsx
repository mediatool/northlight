import React from 'react'
import { BoxProps, Box as ChakraBox } from '@chakra-ui/react'

/**
 * Box is the most abstract component on top of which all other northlight components are built.
 *  By default, it renders a `div` element, however this can be customized via the sx prop
 * @see {@link https://northlight/reference/box}
 * @example
 * (?
 * <Box bgColor='bg.brand.default' w='100%' p={4} borderRadius="st.border.radius.md">
 * <P color="text.inverted">
  This is the Box
 * </P>
</Box>
 * ?)
 *
 */
export const Box = (props: BoxProps) => <ChakraBox { ...props } />
