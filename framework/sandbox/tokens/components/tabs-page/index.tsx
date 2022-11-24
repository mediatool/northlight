import React from 'react'
import { map } from 'ramda'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../../../../lib'
import { TokensSet } from '../../utils/types'
import { Visualizer } from '../visualizer'

interface Props {
  dataSet: TokensSet[]
}

const TabsPage = ({ dataSet }: Props) => (
  <Tabs isLazy={ true } height="full" lazyBehavior="keepMounted">
    <TabList
      p={ 1 }
      position="absolute"
      zIndex="maxnus"
      top={ 8 }
      right={ 8 }
      background="mono.black"
      borderRadius="full"
    >
      { map(({ name }) => (
        <Tab key={ name }>{ name }</Tab>
      ), dataSet) }
    </TabList>
    <TabPanels height="full">
      { map(({ data, title }) => (
        <TabPanel height="full" key={ title }>
          <Visualizer data={ data } title={ title } />
        </TabPanel>
      ), dataSet) }
    </TabPanels>
  </Tabs>
)

export default TabsPage
