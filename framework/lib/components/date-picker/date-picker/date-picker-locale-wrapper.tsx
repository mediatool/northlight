import React, { ReactNode } from 'react'
import { I18nProvider } from '@react-aria/i18n'
import { FirstDayOfWeek } from '../components/calendar/components/types'

interface DatePickerLocaleWrapperProps {
  firstDayOfWeek: FirstDayOfWeek
  children: ReactNode
}

export const DatePickerLocaleWrapper = ({
  firstDayOfWeek,
  children,
}: DatePickerLocaleWrapperProps) => {
  const locale = firstDayOfWeek === 'monday' ? 'en-DE' : 'en-US'
  return <I18nProvider locale={ locale }>{ children }</I18nProvider>
}
