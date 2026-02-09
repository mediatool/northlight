import React, { KeyboardEventHandler, useRef } from 'react'
import { CalendarDuo } from '@northlight/icons'
import { Button } from '../../../button'
import { TriggerProps } from './types'
import { Icon } from '../../../icon'

export const Trigger = (props: TriggerProps) => {
  const {
    id,
    'aria-haspopup': ariaHasPopup,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    'aria-expanded': ariaExpanded,
    isDisabled,
    handleClick,
  } = props
  const ref = useRef<HTMLButtonElement>(null)

  const handleKeyDown: KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <Button
      ref={ ref }
      id={ id }
      aria-haspopup={ ariaHasPopup }
      aria-label={ ariaLabel }
      aria-labelledby={ ariaLabelledBy }
      aria-describedby={ ariaDescribedBy }
      aria-expanded={ ariaExpanded }
      size="sm"
      boxSize={ 8 }
      variant="ghost"
      isDisabled={ isDisabled }
      onClick={ handleClick }
      onKeyDown={ handleKeyDown }
      pointerEvents={ isDisabled ? 'none' : 'auto' }
    >
      <Icon as={ CalendarDuo } />
    </Button>
  )
}
