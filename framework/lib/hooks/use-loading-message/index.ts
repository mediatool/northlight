import { useState } from 'react'
import { useInterval } from '../use-interval'

export const useLoadingMessage = (prefix: string = '', delay: number = 300) => {
  const [ dots, setDots ] = useState('.')

  useInterval(() => {
    if (dots.length === 3) {
      setDots('.')
    } else {
      setDots(`${dots}.`)
    }
  }, delay)
  return `${prefix}${dots}`
}
