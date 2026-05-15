import React, { KeyboardEventHandler, useRef } from 'react'
import { CalendarDuo } from '@northlight/icons'
import { Button } from '../../../button'
import { TriggerProps } from './types'
import { Icon } from '../../../icon'

const sizeToButtonSize = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
} as const

const sizeToBoxSize = {
  sm: 6,
  md: 8,
  lg: 10,
}

const sizeToIconBoxSize = {
  sm: 3,
  md: 4,
  lg: 5,
}

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
    size = 'md',
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
      size={ sizeToButtonSize[size] }
      boxSize={ sizeToBoxSize[size] }
      variant="ghost"
      isDisabled={ isDisabled }
      onClick={ handleClick }
      onKeyDown={ handleKeyDown }
      pointerEvents={ isDisabled ? 'none' : 'auto' }
    >
      <Icon
        as={ CalendarDuo }
        sx={ {
          boxSize: sizeToIconBoxSize[size],
          '& path': { vectorEffect: 'non-scaling-stroke' },
        } }
      />
    </Button>
  )
}
