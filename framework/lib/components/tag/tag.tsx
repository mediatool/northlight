import React, { forwardRef } from 'react'
import { Tag as ChakraTag } from '@chakra-ui/react'
import { TagProps } from './types.ts'

/**
 * @see TagGroup
 * @see {@link https://northlight.dev/reference/tag}
 *
 * @example
 * (? <Tag>Brand 1</Tag> ?)
 *
 * @example
 * (?
 *   <Tag>
    <TagLeftIcon>
      <Icon as={ StackSolid } />
    </TagLeftIcon>
    <TagLabel>Left Icon</TagLabel>
  </Tag>
 * ?)
 *
*/
export const Tag = forwardRef(({
  children,
  variant = 'solid',
  bgColor,
  colorScheme,
  ...rest
}: TagProps, ref: any) => (
  <ChakraTag
    bgColor={ bgColor }
    colorScheme={ colorScheme }
    ref={ ref }
    variant={ variant }
    { ...rest }
  >
    { children }
  </ChakraTag>
))
