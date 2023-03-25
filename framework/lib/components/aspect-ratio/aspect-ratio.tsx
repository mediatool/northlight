import React from 'react'
import { AspectRatioProps, AspectRatio as ChakraAspectRatio } from '@chakra-ui/react'

/**
 * Meant to restrict child by specific ratio
 * @see {@link https://northlight.dev/aspect-ratio}
 * @example
 * (?
 <AspectRatio maxW='400px' ratio={4 / 3}>
   <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
</AspectRatio>
?)
 *
 * */
export const AspectRatio = (props: AspectRatioProps) => (
  <ChakraAspectRatio { ...props } />
)
