import { useCurrentTheme } from '@northlight/ui'
import React from 'react'
import TabsPage from '../../components/tabs-page'
import { getComponentTokens } from '../../utils'

const ComponentTokensPage = () => {
  const theme = useCurrentTheme()
  const componentTokens = getComponentTokens(theme)

  return <TabsPage dataSet={ componentTokens } />
}

export default ComponentTokensPage
