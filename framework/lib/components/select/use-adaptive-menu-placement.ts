import { useEffect, useRef, useState } from 'react'
import { isNil } from 'ramda'
import { UseAdaptiveMenuPlacementProps } from './types'

export const useAdaptiveMenuPlacement = ({
  dropdownHeightPx,
  containerRef,
}: UseAdaptiveMenuPlacementProps) => {
  const [ menuPlacement, setMenuPlacement ] = useState<'bottom' | 'top'>('bottom')
  const selectContainerRef = useRef<HTMLDivElement>(null)

  const adjustMenuPlacement = () => {
    if (isNil(selectContainerRef.current)) return
    let node = selectContainerRef.current.parentNode as HTMLDivElement
    while (node.parentNode) {
      const { overflowY, maxHeight, height } = getComputedStyle(node)
      if (overflowY !== 'visible' || maxHeight || height) break
      node = node.parentNode as HTMLDivElement
    }

    const selectRect = selectContainerRef.current.getBoundingClientRect()
    const containerRect =
      containerRef && containerRef.current
        ? containerRef.current.getBoundingClientRect()
        : node.getBoundingClientRect()
    const pxToContainerBottom = Math.abs(
      selectRect.bottom - containerRect.bottom
    )
    const pxToContainerTop = Math.abs(selectRect.top - containerRect.top)
    const pxToWindowBottom = Math.abs(selectRect.bottom - window.innerHeight)

    const shouldBeAtTop =
      (dropdownHeightPx > pxToContainerBottom && pxToContainerTop > pxToContainerBottom) ||
      (dropdownHeightPx > pxToWindowBottom && selectRect.top > pxToWindowBottom)

    setMenuPlacement(shouldBeAtTop ? 'top' : 'bottom')
  }

  useEffect(() => {
    adjustMenuPlacement()
    window.addEventListener('resize', adjustMenuPlacement)
    window.addEventListener('scroll', adjustMenuPlacement)
    return () => {
      window.removeEventListener('resize', adjustMenuPlacement)
      window.addEventListener('scroll', adjustMenuPlacement)
    }
  }, [])

  return { selectContainerRef, menuPlacement }
}
