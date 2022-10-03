import React from 'react'
import { TabPanel as ChakraTabPanel, TabPanelProps } from '@chakra-ui/react'

export const TabPanel = (props: TabPanelProps) => (
  <ChakraTabPanel padding={ 0 } { ...props } />
)
