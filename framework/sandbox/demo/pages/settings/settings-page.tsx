import React from 'react'
import { AppLayout } from '../../../components'
import { PageLayout } from '../../components'
import { SettingsBreadcrumbs } from './breadcrumbs'

const SettingsPage = () => (
  <AppLayout
    breadcrumbs={ <SettingsBreadcrumbs /> }
  >
    <PageLayout
      title="Personal account"
    >
      <p>On settings page</p>
    </PageLayout>
  </AppLayout>
)

export default SettingsPage
