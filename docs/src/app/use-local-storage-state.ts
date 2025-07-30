import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useLocalStorageState = <T>(
  defaultValue: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] => {
  const [ state, setState ] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key)
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error parsing the localStorage key "${key}": `, error)
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error whilst running JSON.stringify on the localStorage key "${key}": `, error)
    }
  }, [ key, state ])

  return [ state, setState ]
}
