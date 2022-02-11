import { createContext, useContext } from 'react'
import { ContextValue } from '../types'

export const DateRangePickerContext = createContext<ContextValue>({} as any)

export const useDateRangePickerContext = () => {
  const context = useContext(DateRangePickerContext)

  if (!context) {
    throw new Error('useDateRangePickerContext must be called within the scope of a DateRangePicker')
  }

  return context
}
