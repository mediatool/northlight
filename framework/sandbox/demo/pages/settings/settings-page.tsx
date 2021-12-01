import React from 'react'
import { AppLayout } from '../../../components'
import { PageLayout } from '../../components'
import { SettingsBreadcrumbs } from './breadcrumbs'
import { SettingsTabs } from './tabs'

const SettingsPage = () => (
  <AppLayout breadcrumbs={ <SettingsBreadcrumbs /> }>
    <PageLayout title="Personal account">
      <SettingsTabs />
    </PageLayout>
  </AppLayout>
)

export default SettingsPage
