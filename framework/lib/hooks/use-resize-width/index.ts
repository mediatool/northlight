import { MouseEvent, useState } from 'react'
import { clamp } from '../../utils'

interface UseResizeWidthProps {
  stationaryEdge?: 'left' | 'right'
  minWidthPx?: number
  maxWidthPx?: number
  defaultWidthPx: number
}

export const useResizeWidth = ({
  stationaryEdge = 'left',
  minWidthPx = 0,
  maxWidthPx = Number.MAX_SAFE_INTEGER,
  defaultWidthPx,
}: UseResizeWidthProps) => {
  const [ adjustableWidth, setAdjustableWidth ] = useState(defaultWidthPx)

  const resizeProps = {
    onMouseDown: (e: MouseEvent<unknown>) => {
      e.preventDefault()
      const startX = e.clientX
      const onMouseMove = (event: { clientX: number }) => {
        const newWidth =
          stationaryEdge === 'left'
            ? adjustableWidth + (event.clientX - startX)
            : adjustableWidth - (event.clientX - startX)
        setAdjustableWidth(clamp(minWidthPx, maxWidthPx, newWidth))
      }
      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    },
  }

  return {
    adjustableWidth,
    setAdjustableWidth,
    resizeProps,
  }
}
