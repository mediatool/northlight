import React from 'react'
import { Tab, TabKind, TabList, TabPanel, TabPanels, Tabs } from '~lib/components'
import { tabs } from './tabs'

export const SettingsTabs = () => (
  <Tabs defaultIndex={ 0 } isFitted={ true }>
    <TabList>
      { tabs.map(({ title, kind = 'base' }) => (
        <Tab
          key={ title }
          fontSize="sm"
          kind={ kind as TabKind }
        >
          { title }
        </Tab>
      )) }
    </TabList>
    <TabPanels>
      { tabs.map(({ component: Component, title }) => (
        <TabPanel key={ title }>
          <Component />
        </TabPanel>
      )) }
    </TabPanels>
  </Tabs>
)
