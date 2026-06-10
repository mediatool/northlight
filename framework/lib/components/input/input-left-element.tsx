import React, { useContext, useEffect, useRef } from 'react'
import {
  InputLeftElement as ChakraInputLeftElement,
  InputLeftElementProps,
} from '@chakra-ui/react'
import { LeftElementContext } from './input-group'

export const InputLeftElement = ({
  children,
  ...props
}: InputLeftElementProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const contextValue = useContext(LeftElementContext)

  useEffect(() => {
    if (ref.current) {
      const handleResize = () => {
        if (contextValue) {
          contextValue.setLeftWidth(ref.current!.offsetWidth)
        }
      }

      handleResize()

      const resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(ref.current)

      return () => resizeObserver.disconnect()
    }
    return () => null
  }, [])

  return (
    <ChakraInputLeftElement ref={ ref } { ...props }>
      { children }
    </ChakraInputLeftElement>
  )
}
