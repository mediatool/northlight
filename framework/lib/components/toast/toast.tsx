import React from 'react'
import { AlertProps, Alert as ChakraAlert } from '@chakra-ui/react'
import { AlertVariants } from '../alert/types'
import { toastIconMap } from '../types'
import { Icon } from '../icon'
import { HStack, Stack } from '../stack'
import { CloseButton } from '../close-button'
import { Label, P } from '../typography'

interface Props extends AlertProps {
  variant?: AlertVariants
  title?: string
  description?: string
  onClose?: () => void
}

export const Toast = ({
  variant = 'success',
  title = '',
  description = '',
  onClose,
  ...rest
}: Props) => (
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
