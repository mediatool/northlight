import React from 'react'
import {
  AlertDescription,
  AlertProps,
  AlertTitle,
  Alert as ChakraAlert,
} from '@chakra-ui/react'
import { color } from '@mediatool/tokens'
import { AlertVariants, toastIconMap } from '../../types'
import { Icon } from '../icon'
import { HStack, Stack } from '../stack'
import { CloseButton } from '../close-button'

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
      <Icon as={ toastIconMap[variant] } color={ color.icon.toast[`${variant}`] } boxSize={ 6 } />
      <Stack spacing={ 0 }>
        { title && <AlertTitle>{ title }</AlertTitle> }
        { description && (
          <AlertDescription>{ description }</AlertDescription>
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
