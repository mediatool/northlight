import React, { forwardRef, useState } from 'react'
import { Box, useMultiStyleConfig } from '@chakra-ui/react'
import { Blinker } from '../blinker'
import { IconButton } from '../icon-button'
import { NotificationIconButtonProps } from './types'

export const NotificationIconButton = forwardRef(({
  variant = 'ghost',
  icon,
  'aria-label': ariaLabel,
  hasNotification = false,
  blinkerColor = 'green.500',
  size,
  ...rest
}: NotificationIconButtonProps, ref: any) => {
  const [ isBlinking, setIsBlinking ] = useState(false)
  const { container, notifier } = useMultiStyleConfig('NotificationIconButton', { size, variant })
  return (
    <Box
      onMouseEnter={ () => setIsBlinking(true) }
      onMouseLeave={ () => setIsBlinking(false) }
      sx={ container }
    >
      { hasNotification && (
        <Box sx={ notifier }>
          <Blinker isBlinking={ isBlinking } color={ blinkerColor } size="2xs" />
        </Box>
      ) }
      <IconButton
        variant={ variant }
        icon={ icon }
        aria-label={ ariaLabel }
        ref={ ref }
        size={ size }
        { ...rest }
      />
    </Box>
  )
})
