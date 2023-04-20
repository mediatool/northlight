import { useEffect, useState } from 'react'

export const useIsRightSidebarVisible = () => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

  const handleResize = () => {
    setTimeout(() => {
      setWindowWidth(window.innerWidth)
    }, 200)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth > 1800
}
