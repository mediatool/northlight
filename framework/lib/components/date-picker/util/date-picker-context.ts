import { createContext, useContext } from 'react'
import { ContextValue } from '../types'

export const DatePickerContext = createContext<ContextValue>({} as any)

export const useDatePickerState = () => {
  const context = useContext(DatePickerContext)

  if (!context) {
    throw new Error('useDatePickerState must be called within the scope of a DatePicker')
  }

  return context
}
