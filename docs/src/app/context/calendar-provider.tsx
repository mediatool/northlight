import React, { ReactNode } from 'react'
import { I18nProvider } from '@react-aria/i18n'
import { useUser } from './user-context.tsx'

interface I18nProviderProps {
  children: ReactNode
}

export const CalendarProvider = ({ children }: I18nProviderProps) => {
  const { user: { preferences: { firstDayOfWeek = 'monday' } } } = useUser()

  const calendarLocale = firstDayOfWeek === 'monday' ? 'en-GB' : 'en-US'

  return (
    <I18nProvider locale={ calendarLocale }>
      { children }
    </I18nProvider>
  )
}
