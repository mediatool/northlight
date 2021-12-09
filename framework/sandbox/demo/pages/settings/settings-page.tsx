import React from 'react'
import { AppLayout, PageLayout } from '~lib/components'
import { SettingsBreadcrumbs } from './breadcrumbs'
import { SettingsTabs } from './tabs'
import { SearchField } from '../../../components'

const SettingsPage = () => (
  <AppLayout
    breadcrumbs={ <SettingsBreadcrumbs /> }
    search={ <SearchField /> }
  >
    <PageLayout title="Personal account" subtitle="Test">
      <SettingsTabs />
    </PageLayout>
  </AppLayout>
)

export default SettingsPage
