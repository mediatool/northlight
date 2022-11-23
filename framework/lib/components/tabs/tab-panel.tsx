import React from 'react'
import { TabPanel as ChakraTabPanel } from '@chakra-ui/react'
import { TabPanelProps } from './types'

export const TabPanel = (props: TabPanelProps) => (
  <ChakraTabPanel padding={ 0 } { ...props } />
)
