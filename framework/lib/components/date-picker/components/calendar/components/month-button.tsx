import React, { useRef } from 'react'
import { useButton } from '@react-aria/button'
import { Button } from '../../../../button'
import { MonthButtonProps } from './types'

export const MonthButton = ({ children, ...rest }: MonthButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(rest, ref)

  return (
    <Button
      { ...buttonProps }
      boxSize={ 8 }
      size="xs"
      variant="ghost"
      ref={ ref }
    >
      { children }
    </Button>
  )
}
