import { useState } from 'react'

export const useOverflowGroup = () => {
  const [ rect, setRect ] = useState<HTMLDivElement | null>(null)
  const containerRef = (node: any) => {
    if (node) {
      setRect(node)
    }
  }

  return { rect, containerRef }
}
