import React, { forwardRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { CheckDuo } from '@northlight/icons'
import { getContrastColor } from '../../utils'
import { Icon } from '../icon'
import { IconButton } from '../icon-button'
import { Box } from '../box'
import { ColorButtonProps } from './types.ts'
import { columns } from './constants.ts'
import { useArrowFocus } from '../../hooks'

export const ColorButton = forwardRef(({
  color,
  onClick,
  size,
  selected = false,
}: ColorButtonProps, ref: any) => {
  if (!color) return <Box />
  const { defaultArrows, focusPrevious, focusNext } = useArrowFocus(columns)

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

  const { colorButton } = useMultiStyleConfig('ColorPicker', { size })

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
