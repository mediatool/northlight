import React, { useRef } from 'react'
import { useButton } from '@react-aria/button'
import { Button } from '@chakra-ui/react'
import { AriaButtonProps } from '@react-types/button'

export function MonthButton (props: AriaButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <Button
      { ...buttonProps }
      boxSize={ 8 }
      size="sm"
      variant="ghost"
      ref={ ref }
    >
      { props.children }
    </Button>
  )
}
