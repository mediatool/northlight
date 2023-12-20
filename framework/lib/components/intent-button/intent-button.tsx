import React, { useEffect, useRef, useState } from 'react'
import { TrashDuo } from '@northlight/icons'
import { Tooltip } from '../tooltip'
import { Center } from '../center'
import { Icon } from '../icon'
import { IntentButtonProps } from './types'
import { TimeoutProgressCircle } from './timeout-progress-circle'
import { IconButton } from '../icon-button'

/**
 * @see {@link https://northlight.dev/reference/intent-button}
 *
 * Hold in to confirm delete
 *
 * @example
 * (?
 * +
 *
 * const Example = () => {
 * const [isShowing, setIsShowing] = useState(true)
 *
 * const handleDelete = () => {
 * setIsShowing(false)
 * }
 *
 * return (
 * <>
 * {isShowing && (
 * <IntentButton onTimeout={handleDelete} />
 * )}
 * </>
 * )
 *
 * }
 * render(<Example />)
 *?)
 *
 */
export const IntentButton = ({
  icon = TrashDuo,
  timeout = 1000,
  ringColor = 'border.error',
  onTimeout = () => {},
  tooltipText = 'Hold to Delete',
  'aria-label': ariaLabel = 'confirm delete',
  ...rest
}: IntentButtonProps) => {
  const [ progress, setProgress ] = useState(0)
  const [ isHovering, setIsHovering ] = useState(false)
  const timerRef = useRef<number | undefined>(undefined)

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = undefined
    }
    setProgress(0)
  }

  useEffect(() => clearTimer, [])

  const startTimer = () => {
    clearTimer()

    const startTime = Date.now()
    timerRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const updatedProgress = (elapsedTime / timeout) * 100
      if (updatedProgress >= 100) {
        clearInterval(timerRef.current)
        onTimeout()
      } else {
        setProgress(updatedProgress)
      }
    }, 10)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    clearTimer()
  }

  return (
    <Tooltip label={ tooltipText } placement="top">
      <Center
        position="relative"
        cursor="pointer"
        onMouseDown={ startTimer }
        onMouseUp={ clearTimer }
        onMouseLeave={ handleMouseLeave }
        onMouseEnter={ handleMouseEnter }
        boxSize="50px"
        opacity={ `${(100 - progress) / 100}` }
        { ...rest }
      >
        <IconButton
          icon={ <Icon as={ icon } /> }
          size="md"
          aria-label={ ariaLabel }
          variant="ghost"
        />
        { isHovering && (
          <TimeoutProgressCircle
            ringColor={ ringColor }
            progress={ progress }
            position="absolute"
            top="0"
            left="0"
          />
        ) }
      </Center>
    </Tooltip>
  )
}
