import React, { useRef } from 'react'
import { CalendarDuo } from '@mediatool/icons'
import { useButton } from '@react-aria/button'
import { Button } from '../../../button'
import { TriggerProps } from './types'
import { Icon } from '../../../icon'

export const Trigger = (props: TriggerProps) => {
  const { isDisabled, handleClick } = props
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)

  return (
    <Button
      { ...buttonProps }
      ref={ ref }
      size="sm"
      boxSize={ 8 }
      variant="ghost"
      isDisabled={ isDisabled }
      onPointerDown={ handleClick }
      pointerEvents={ isDisabled ? 'none' : 'auto' }
    >
      <Icon as={ CalendarDuo } />
    </Button>
  )
}
