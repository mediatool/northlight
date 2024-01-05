import React from 'react'
import {
  Tooltip as ChakraTooltip,
  HStack,
  TooltipProps,
  VStack,
} from '@chakra-ui/react'
import { Label } from '../typography'
import { Icon } from '../icon'
import { AlertVariants } from '../alert'
import { toastIconMap } from '../types'

export type OurTooltipProps = TooltipProps & {
  description?: string
}

/**
 * A tooltip is a brief, informative message that appears when a user interacts with an element.
 * @see {@link https://northlight.dev/reference/tooltip}
 *
 * @example
 * (?
 * <HStack>
 *    <Tooltip label="Here’s a regular tooltip with some text
 *      inside of it that’s supposed to be substantially large.">
 *      <Badge>Default</Badge>
 *    </Tooltip>
 *    <Tooltip
 *       variant="light"
 *       description="Here’s a regular tooltip with some text
 *      inside of it that’s supposed to be substantially large."
 *    >
 *      <Badge>Light</Badge>
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
 *          variant="success"
 *          description="This is a successful message"
 *          >
 *          <Badge colorScheme="green">Success</Badge>
 *        </Tooltip>
 *        <Tooltip
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
 *          variant="info"
 *          description="This is an informative text"
 *          >
 *          <Badge colorScheme="blue">Info</Badge>
 *        </Tooltip>
 *        <Tooltip
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
 *          variant="warning"
 *          description="This is a warning"
 *          >
 *        <Badge colorScheme="yellow">Warning</Badge>
 *        </Tooltip>
 *        <Tooltip
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
 *          variant="danger"
 *          description="This is an error message"
 *          >
 *        <Badge colorScheme="red">Error</Badge>
 *        </Tooltip>
 *        <Tooltip
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
 *          variant="ai"
 *          description="This is an AI message">
 *        <Badge>AI</Badge>
 *        </Tooltip>
 *        <Tooltip
 *          variant="ai"
 *          title="Please check fields"
 *          description="This is an AI message with a title and an icon
 *          that’s supposed to be substantially large."
 *          >
 *          <Badge>AI</Badge>
 *        </Tooltip>
 *      </VStack>
 * </HStack>
 * ?)
 */

export const Tooltip = ({
  variant = 'default',
  hasArrow = true,
  title = '',
  description = '',
  ...rest
}: OurTooltipProps) => {
  const iconVariant = variant as AlertVariants
  // const iconVariant = variant as TooltipIconVariants

  const TooltipContent = (
    <HStack alignItems="flex-start">
      { title !== '' && iconVariant in toastIconMap ? (
        <VStack spacing={ 0 } alignItems="flex-start">
          <HStack>
            <Icon
              as={ toastIconMap[iconVariant] }
              color={ `icon.toast.${iconVariant}` }
            />
            <Label size="md">{ title }</Label>
          </HStack>
          <Label sx={ { fontWeight: 400 } }>{ description }</Label>
        </VStack>
      )
        : (
          <Label variant="14">{ description }</Label>
        ) }
    </HStack>
  )

  return (
    <ChakraTooltip
      variant={ variant }
      hasArrow={ hasArrow }
      title={ title }
      description={ description }
      label={ title !== '' ? TooltipContent : description }
      { ...rest }
    />
  )
}
