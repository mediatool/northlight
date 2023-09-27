import { useCurrentTheme } from '@northlight/ui'
import React from 'react'
import TabsPage from '../../components/tabs-page'
import { getSystemTokens } from '../../utils'

const SystemTokensPage = () => {
  const theme = useCurrentTheme()
  const systemTokens = getSystemTokens(theme)

  return <TabsPage dataSet={ systemTokens } />
}

export default SystemTokensPage
