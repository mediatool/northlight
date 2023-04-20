import React, { ReactNode, useMemo } from 'react'
import { I18nContext, I18nManager } from '@shopify/react-i18n'
import { useUser } from './user-context'

interface I18nProviderProps {
  children: ReactNode
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const { user } = useUser()
  const i18nManager = useMemo(() => {
    const { preferences: { locale, currency } } = user

    return new I18nManager({
      locale,
      currency,
    })
  }, [ user ])

  return (
    <I18nContext.Provider value={ i18nManager }>
      { children }
    </I18nContext.Provider>
  )
}
