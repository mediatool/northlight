import React, { forwardRef } from 'react'
import { Tag as ChakraTag } from '@chakra-ui/react'
import { TagProps } from './types'

/**
 * Tag component is used for items that need to be labeled,
 * categorized, or organized using keywords that describe them.
 * @see TagGroup
 * @see {@link https://northlight.dev/reference/tag}
 *
 * @example
 * (?
 * <Tag>Hello</Tag>
 * ?)
 *
 * @example
 * (?
 * +
 * const colors = ["mediatoolBlue", "blue", "gray", "red", "green",
 * "orange", "yellow", "teal", "purple", "pink"]
 * const variants = ["solid", "subtle"]
 * const Example = () =>  {
 *    return <Stack>
 *        { colors.map((color) => (
 *    <HStack spacing={ 4 }>
 *        {
 *      variants.map((variant) => (
 *      <HStack spacing={ 4 }>
 *                 <Tag size="sm" variant={variant} colorScheme={color}>
 *                    <TagLeftIcon size="xs">
*                       <Icon as={ MediatoolLogoDuo } />
 *                    </TagLeftIcon>
 *                    <TagLabel>
 *                      Hello
 *                    </TagLabel>
 *                    <TagRightIcon size="xs">
 *                      <Icon as={ MediatoolLogoDuo } />
 *                    </TagRightIcon>
 *                  </Tag>
 *                  <Tag size="md" variant={variant} colorScheme={color}>
 *                    <TagLeftIcon size="md">
 *                       <Icon as={ MediatoolLogoDuo } />
 *                    </TagLeftIcon>
 *                    <TagLabel>
 *                      Hello
 *                    </TagLabel>
 *                    <TagRightIcon size="md">
 *                      <Icon as={ MediatoolLogoDuo } />
 *                    </TagRightIcon>
 *                  </Tag>
 *                  <Tag size="lg" variant={variant} colorScheme={color}>
 *                    <TagLeftIcon size="lg">
 *                       <Icon as={ MediatoolLogoDuo } />
 *                    </TagLeftIcon>
 *                    <TagLabel>
 *                      Hello
 *                    </TagLabel>
 *                    <TagRightIcon size="lg">
 *                      <Icon as={ MediatoolLogoDuo } />
 *                    </TagRightIcon>
 *                  </Tag>
 *         </HStack>
 *      ))
 *      }
 *       </HStack>
 *    ))
 *    }
 *    </Stack>
 * }
 *  render(<Example/>)
 * ?)
 *
 *
*/
export const Tag = forwardRef<HTMLSpanElement, TagProps>(({
  children,
  variant = 'solid',
  bgColor,
  colorScheme,
  ...rest
}, ref) => (
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
