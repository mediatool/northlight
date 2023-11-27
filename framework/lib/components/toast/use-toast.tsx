import React, { useRef } from 'react'
import { ToastId, useToast as useChakraToast } from '@chakra-ui/react'
import { Toast } from './toast'
import { UseToastOptions } from './types'

/**
 * This hook returns a toast function that when called will popup a toast
 * @see Toast
 * @see {@link https://northlight.dev/reference/use-toast}
 * @example
 * (?
 * () => {
 * const toast = useToast()
 * const handleClick = () => {
 * toast({title: 'Success',
 *  description: `${Math.random()}-string`,
 *  replacePreviousToast: true })
 * }
 * return (
 * <Button onClick={handleClick} variant="success">Save</Button>
 * )}
 * ?)
 */
export const useToast = (defaultOpts: UseToastOptions = {}) => {
  const toast = useChakraToast(defaultOpts)
  const toastIdRef = useRef<ToastId | null>(null)

  return (opts: UseToastOptions = {}) => {
    const toastProps: UseToastOptions = {
      render: ({ onClose }: { onClose: () => void }) => {
        const {
          variant = 'success',
          title = 'Success',
          description = '',
        } = opts

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
    }

    const { replacePreviousToast = false } = opts
    if (replacePreviousToast && toastIdRef && toastIdRef.current) {
      toast.update(toastIdRef.current, toastProps)
    } else {
      toastIdRef.current = toast(toastProps)
    }
  }
}
