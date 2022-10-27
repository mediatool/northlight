import React, { cloneElement, useCallback, useRef } from 'react'
import { Grid, useMultiStyleConfig } from '@chakra-ui/react'
import { SplitPaneProps } from './types'

export const SplitPane = ({
  children,
  initialSplit = 50,
  isOpen,
  minLeftWidth = 25,
  minRightWidth = 50,
}: SplitPaneProps) => {
  const dividerRef = useRef<HTMLDivElement | null>(null)

  const mouseDownHandler = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.target !== dividerRef.current) {
        return
      }
      let requestedFrame: number | null = null

      e.stopPropagation()
      e.preventDefault()

      const target = e.currentTarget

      target.setPointerCapture(e.pointerId)

      target.onpointermove = (moveEvent: PointerEvent) => {
        if (!(moveEvent.buttons && 1)) {
          target.onpointermove = null
          target.releasePointerCapture(moveEvent.pointerId)
          return
        }

        moveEvent.stopPropagation()
        moveEvent.preventDefault()

        if (!requestedFrame) {
          const { offsetX } = moveEvent

          requestedFrame = requestAnimationFrame(() => {
            target.style.setProperty(
              '--split-pos',
              `${Math.max(offsetX, 0)}px`
            )
            requestedFrame = null
          })
        }
      }
    },
    []
  )

  const containerStyle = useMultiStyleConfig('SplitPane', { minLeftWidth, minRightWidth, initialSplit, isOpen })

  return (
    <Grid
      sx={ containerStyle }
      onPointerDown={ mouseDownHandler }
    >
      { children[0] }
      { isOpen && cloneElement(children[1], { ref: dividerRef }) }
      { isOpen && children[2] }
    </Grid>
  )
}
