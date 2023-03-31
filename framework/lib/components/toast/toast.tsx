import React from 'react'
import { Alert as ChakraAlert } from '@chakra-ui/react'
import { toastIconMap } from '../types'
import { ToastProps } from './types'
import { Icon } from '../icon'
import { HStack, Stack } from '../stack'
import { CloseButton } from '../close-button'
import { Label, P } from '../typography'

/**
 * Toast is a modified alert meant for popup alerts
 * @see useToast
 * @see Alert
 * @see {@link https://northlight.dev/reference/toast}
 * @example
 * (?
 *
        <HStack spacing={ 4 }>
          <Toast variant="success" title="success" />
          <Toast variant="warning" title="warning" />
          <Toast variant="info" title="info" />
          <Toast variant="error" title="error" />
        </HStack>
 * ?)
 *
 */
export const Toast = ({
  variant = 'success',
  title = '',
  description = '',
  onClose,
  ...rest
}: ToastProps) => (
  <ChakraAlert
    variant={ variant }
    data-testid="toast-test"
    { ...rest }
  >
    <HStack alignItems="flex-start">
      <Icon as={ toastIconMap[variant] } color={ `icon.toast.${variant}` } boxSize={ 6 } />
      <Stack spacing={ 0 } alignItems="flex-start">
        { title && <Label size="md">{ title }</Label> }
        { description && (
          <P>{ description }</P>
        ) }
      </Stack>
      <CloseButton
        size="sm"
        onClick={ onClose }
        position="absolute"
        insetEnd={ 1 }
        top={ 1 }
      />
    </HStack>
  </ChakraAlert>
)
