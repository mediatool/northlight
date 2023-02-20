import React from 'react'
import { useToast as useChakraToast } from '@chakra-ui/react'
import { Toast } from './toast'
import { UseToastOptions } from './types'

export const useToast = (defaultOpts: UseToastOptions = {}) => {
  const toast = useChakraToast(defaultOpts)

  return (opts: UseToastOptions = {}) => toast({
    render: ({ onClose }) => {
      const { variant = 'success', title = 'Success', description = '' } = opts

      return (
        <Toast
          variant={ variant }
          title={ title }
          description={ description }
          onClose={ onClose }
        />
      )
    },
    position: 'top',
    ...opts,
  })
}
