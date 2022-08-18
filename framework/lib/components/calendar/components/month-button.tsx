import React, { useRef } from 'react'
import { AriaButtonProps, useButton } from '@react-aria/button'
import { Button } from '@chakra-ui/react'

export const MonthButton = ({ children, ...rest }: AriaButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(rest, ref)

  return (
    <Button
      { ...buttonProps }
      boxSize={ 8 }
      size="sm"
      variant="ghost"
      ref={ ref }
    >
      { children }
    </Button>
  )
}
