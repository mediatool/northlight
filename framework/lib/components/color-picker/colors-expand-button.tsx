import React from 'react'
import { ChevronDownDuo, ChevronUpDuo } from '@mediatool/icons'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { columns } from './constants'
import { ColorsExpandButtonProps } from './types'
import { useArrowFocus } from '../../hooks'

export const ColorsExpandButton = ({
  onClick,
  size,
  expanded,
}: ColorsExpandButtonProps) => {
  const { defaultArrows, focusPrevious, focusFirst } = useArrowFocus(columns)
  const { colorButton } = useMultiStyleConfig('ColorPicker', { size })
  const onKeyDown = (e: any) => {
    switch (e.key) {
      case 'Tab':
        focusFirst()
        break
      case 'ArrowUp':
        e.preventDefault()
        focusPrevious({ wrap: true, repeat: 1 })
        break
      case 'PageUp':
        e.preventDefault()
        focusPrevious({ wrap: true, repeat: columns * 5 })
        break
      default:
        defaultArrows(e)
        break
    }
  }

  return (
    <IconButton
      variant="ghost"
      onKeyDown={ onKeyDown }
      aria-label="display more colors"
      onClick={ onClick }
      sx={ colorButton }
    >
      <Icon as={ expanded ? ChevronUpDuo : ChevronDownDuo } />
    </IconButton>
  )
}
