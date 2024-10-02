import React from 'react'
import {
  Tooltip as ChakraTooltip,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { Label, P } from '../typography'
import { Icon } from '../icon'
import { AlertVariants } from '../alert'
import { toastIconMap } from '../types/toastIconMap'
import { OurTooltipProps } from './types'

/**
 * A tooltip is a brief, informative message that appears when a user interacts with an element.
 * @see {@link https://northlight.dev/reference/tooltip}
 *
 * @example
 * (?
 * <HStack>
 *    <Tooltip
 *      hasIcon={ true }
 *      description="Here’s a regular tooltip with some with icon
 *      inside of it that’s supposed to be substantially large.">
 *      <Badge>ICON</Badge>
 *    </Tooltip>
 *    <Tooltip
 *       description="Here’s a regular tooltip with some text without icon
 *      inside of it that’s supposed to be substantially large."
 *    >
 *      <Badge>NOICON</Badge>
 *    </Tooltip>
 *    <Tooltip
 *      description={
 *        <Box>
 *          <Text>
 *            Some text
 *          </Text>
 *          <UnorderedList>
 *            <ListItem>
 *              List item 1
 *            </ListItem>
 *            <ListItem>
 *              List item 2
 *            </ListItem>
 *            <ListItem>
 *              List item 3
 *            </ListItem>
 *          </UnorderedList>
 *        </Box>
 *      }
 *    >
 *      <Badge>With JSX content</Badge>
 *    </Tooltip>
 * </HStack>
 * ?)
 *
 *
 * @example
 * (?
 * <HStack>
 *     <VStack>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="success"
 *          description="This is a successful message"
 *          >
 *          <Badge colorScheme="green">Success</Badge>
 *        </Tooltip>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="success"
 *          title="Please check fields"
 *          description="This is a successful message with a title and an icon
 *          that’s supposed to be substantially large."
 *          >
 *          <Badge colorScheme="green">Success</Badge>
 *          </Tooltip>
 *     </VStack>
 *     <VStack>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="info"
 *          description="This is an informative text"
 *          >
 *          <Badge colorScheme="blue">Info</Badge>
 *        </Tooltip>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="info"
 *          title="Please check fields"
 *          description="This is an informative text with a title and an icon
 *          that’s supposed to be substantially large."
 *          >
 *        <Badge colorScheme="blue">Info</Badge>
 *        </Tooltip>
 *     </VStack>
 *     <VStack>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="warning"
 *          description="This is a warning"
 *          >
 *        <Badge colorScheme="yellow">Warning</Badge>
 *        </Tooltip>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="warning"
 *          title="Please check fields"
 *          description="This is a warning with a title and an icon
 *          that’s supposed to be substantially large."
 *          >
 *          <Badge colorScheme="yellow">Warning</Badge>
 *        </Tooltip>
 *      </VStack>
 *      <VStack>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="danger"
 *          description="This is an error message"
 *          >
 *        <Badge colorScheme="red">Error</Badge>
 *        </Tooltip>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="danger"
 *          title="Please check fields"
 *          description="This is an error message with a title and an icon
 *          that’s supposed to be substantially large."
 *          >
 *          <Badge colorScheme="red">Error</Badge>
 *        </Tooltip>
 *      </VStack>
 *      <VStack>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="ai"
 *          description="This is an AI message">
 *        <Badge colorScheme="teal" variant="subtle">AI</Badge>
 *        </Tooltip>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="ai"
 *          title="Please check fields"
 *          description="This is an AI message with a title and an icon
 *          that’s supposed to be substantially large."
 *          >
 *          <Badge colorScheme="teal" variant="subtle">AI</Badge>
 *        </Tooltip>
 *      </VStack>
 *      <VStack>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="ghost"
 *          description="This is an clean message">
 *        <Badge>Ghost</Badge>
 *        </Tooltip>
 *        <Tooltip
 *          hasIcon={ true }
 *          variant="ghost"
 *          title="Please check fields"
 *          description="This is an clean message with a title and an icon
 *          that’s supposed to be substantially large."
 *          >
 *          <Badge>Ghost</Badge>
 *        </Tooltip>
 *      </VStack>
 * </HStack>
 * ?)
 */

export const Tooltip: React.FC<OurTooltipProps> = ({
  variant = 'default',
  hasArrow = true,
  title = '',
  description = '',
  hasIcon = false,
  ...rest
}) => {
  const iconVariant: AlertVariants = variant as AlertVariants
  const icon = toastIconMap[iconVariant]

  const TooltipContent = (
    <HStack alignItems="flex-start">
      { hasIcon && <Icon as={ icon } color={ `icon.toast.${iconVariant}` } /> }
      <VStack spacing={ 0 } alignItems="flex-start">
        <Label size="sm">{ title }</Label>
        <P
          variant="14"
          sx={ {
            color: !variant || variant === 'ai' ? 'text.inverted' : 'text.default',
          } }
        >
          { description }
        </P>
      </VStack>
    </HStack>
  )
  return (
    <ChakraTooltip
      hasArrow={ hasArrow }
      hasIcon={ hasIcon }
      label={ title || description ? TooltipContent : undefined }
      variant={ variant }
      { ...rest }
    />
  )
}
