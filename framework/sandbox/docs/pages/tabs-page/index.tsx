import React from 'react'
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const TabsPage = () => (
  <Page
    title="Tabs"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/tabs"
        linkText="Chakra Tabs"
      />
    ) }
  >
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Page>
)

export default TabsPage
