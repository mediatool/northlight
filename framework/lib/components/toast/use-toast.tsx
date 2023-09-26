import React from 'react'
import { useToast as useChakraToast } from '@chakra-ui/react'
import { Toast } from './toast.tsx'
import { UseToastOptions } from './types.ts'

/**
 * This hook returns a toast function that when called will popup a toast
 * @see Toast
 * @see {@link https://northlight.dev/reference/use-toast}
 * @example
 * (?
 * () => {
 * const toast = useToast()
 * const handleClick = () => {
 * toast({title: 'Success', description: 'Your file changes have been saved' })
 * }
 * return (
 * <Button onClick={handleClick} variant="success">Save</Button>
 * )}
 * ?)
 */
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
