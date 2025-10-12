import React, { forwardRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { CheckDuo } from '@northlight/icons'
import { getContrastColor } from '../../utils'
import { Icon } from '../icon'
import { IconButton } from '../icon-button'
import { Box } from '../box'
import { ColorButtonProps } from './types'
import { columns } from './constants'
import { useArrowFocus } from '../../hooks'

export const ColorButton = forwardRef(({
  color,
  onClick,
  size,
  selected = false,
}: ColorButtonProps, ref: any) => {
  const { defaultArrows, focusPrevious, focusNext } = useArrowFocus(columns)
  const { colorButton } = useMultiStyleConfig('ColorPicker', { size })

  if (!color) return <Box />

  const onKeyDown = (e: any) => {
    switch (e.key) {
      case 'PageUp':
        e.preventDefault()
        focusPrevious({ wrap: false, repeat: columns * 5 })
        break
      case 'PageDown':
        e.preventDefault()
        focusNext({ wrap: false, repeat: columns * 5 })
        break
      default:
        defaultArrows(e)
        break
    }
  }

  return (
    <IconButton
      bg={ color }
      ref={ ref }
      onKeyDown={ onKeyDown }
      aria-label={ `select-${color}` }
      onClick={ onClick }
      sx={ colorButton }
      icon={ <Icon as={ CheckDuo } boxSize={ selected ? undefined : '0' } /> }
      color={ getContrastColor(color) }
    />
  )
})
