import React from 'react'
import {
  AlertDescription,
  AlertProps,
  AlertTitle,
  Alert as ChakraAlert,
  CloseButton,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { AlertVariants, toastIconMap } from '~/lib/types'
import { Icon } from '~lib/components'
import { color } from '~/tokens'

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
    { ...rest }
  >
    <HStack alignItems="flex-start">
      <Icon type={ toastIconMap[variant] } color={ color.icon.toast[`${variant}`] } boxSize={ 5 } />
      <Stack spacing={ 0 } maxWidth="400px">
        { title && <AlertTitle>{ title }</AlertTitle> }
        { description && (
          <AlertDescription >{ description }</AlertDescription>
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
