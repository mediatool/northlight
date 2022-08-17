import React from 'react'
import {
  AlertDescription,
  AlertProps,
  AlertTitle,
  Alert as ChakraAlert,
  CloseButton,
} from '@chakra-ui/react'
import { AlertVariants, toastIconMap } from '../../types'
import { Icon } from '../icon'
import { color } from '../../../tokens'
import { HStack, Stack } from '../stack'

interface Props extends AlertProps {
  variant?: AlertVariants
  title?: string
  description?: string
  onClose?: () => void
}

export const Alert = ({
  variant = 'success',
  title = '',
  description = '',
  onClose,
  ...rest
}: Props) => (
  <ChakraAlert
    variant={ variant }
    data-testid="alert-test"
    { ...rest }
  >
    <HStack alignItems="flex-start">
      <Icon type={ toastIconMap[variant] } color={ color.icon.toast[`${variant}`] } boxSize={ 5 } />
      <Stack spacing={ 0 } maxWidth="400px">
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
