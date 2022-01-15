import { useRef } from 'react'
import { randomId } from '@mantine/hooks'

/**
 * Randomly generated strings that are stable between re-renders.
 * Mostly used in combination with building ui, that's not able to rely on any other
 * unique identifers.
 */
export const useStableIds = (amount: number) => {
  const ref = useRef<string[]>(
    new Array(amount).fill(undefined).map(() => randomId().substring(8))
  )

  return ref.current
}
