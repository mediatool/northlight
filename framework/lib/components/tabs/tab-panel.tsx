import React from 'react'
import { TabPanel as ChakraTabPanel } from '@chakra-ui/react'
import { TabPanelProps } from './types.ts'

/**
 * Used to display content under tabs context
 * @see Tabs
 * @see {@link https://northlight.dev/reference/tab-panel}
 * @example
 * (? <TabPanel>Tab 1</TabPanel>  ?)
 */
export const TabPanel = (props: TabPanelProps) => (
  <ChakraTabPanel padding={ 0 } { ...props } />
)
