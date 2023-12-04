import React from 'react'
import { Tooltip as ChakraTooltip, TooltipProps } from '@chakra-ui/react'

/**
 * @see {@link https://northlight.dev/reference/tooltip}
 *
 * @example
 * (?
 * <Tooltip label="Secret message">
 * <Badge>Hover over me</Badge>
 * </Tooltip>
 * ?)
 *
 * @example (Example)
 * You can render a custom component
 * (?
 * +
 * const TooltipContent = (
 * <Box>
 * <Label size="sm">Text</Label>
 * <P sx={{color: 'text.inverted'}}>Content</P>
 * </Box>
 * )
 *
 * const ExampleTooltip = () => {
 * return (
 * <Tooltip label={TooltipContent}>
 * <Badge>Hover here</Badge>
 * </Tooltip>
 * )}
 *
 * render(<ExampleTooltip />)
 * ?)
 *
 * @example (Example)
 * Try out a variant, success, info, warning, danger, ghost
 * (?
 * <HStack>
 * <Tooltip label="Secret message" variant="success">
 * <Badge colorScheme="green">Success</Badge>
 * </Tooltip>
 * <Tooltip label="Secret message" variant="info">
 * <Badge colorScheme="blue">Info</Badge>
 * </Tooltip>
 * <Tooltip label="Secret message" variant="warning">
 * <Badge colorScheme="yellow">Warning</Badge>
 * </Tooltip>
 * <Tooltip label="Secret message" variant="danger">
 * <Badge colorScheme="red">Danger</Badge>
 * </Tooltip>
 * <Tooltip label="Secret message" variant="ghost">
 * <Badge>Ghost</Badge>
 * </Tooltip>
 * </HStack>
 * ?)
 */
export const Tooltip = ({ hasArrow = true, ...rest }: TooltipProps) => (
  <ChakraTooltip hasArrow={ hasArrow } { ...rest } />
)
