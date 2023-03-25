import React from 'react'
import { map } from 'ramda'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../../../../lib'
import { TokensSet } from '../../utils/types'
import { Visualizer } from '../visualizer'

interface Props {
  dataSet: TokensSet[]
}

const TabsPage = ({ dataSet }: Props) => (
  <Tabs isLazy={ true } height="full" lazyBehavior="keepMounted" w="100%">
    <TabList
      p={ 1 }
      position="absolute"
      zIndex="maxnus"
      top={ 10 }
      right={ 4 }
      background="mono.black"
      borderRadius="full"
    >
      { map(({ name }) => (
        <Tab key={ name }>{ name }</Tab>
      ), dataSet) }
    </TabList>
    <TabPanels height="calc(100vh - 100px)" w="100%">
      { map(({ data, title }) => (
        <TabPanel height="full" key={ title } w="100%">
          <Visualizer data={ data } title={ title } />
        </TabPanel>
      ), dataSet) }
    </TabPanels>
  </Tabs>
)

export default TabsPage
