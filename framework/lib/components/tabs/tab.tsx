import React from 'react'
import { Tab as ChakraTab } from '@chakra-ui/react'
import { TabProps } from './types'

/**
 * Tab component is used to display a tab in a Tabs component.
 * @see Tabs
 * @see {@link https://northlight.dev/reference/tab}
 *
 * @example
 * (?
<Tabs variant="piped">
  <TabList>
    <Tab elementColor="brand">Social Media</Tab>
    <Tab elementColor="success">Online</Tab>
    <Tab elementColor="warning">TV</Tab>
    <Tab elementColor="ai">Paid Search</Tab>
  </TabList>
</Tabs>
 * ?)
 */
export const Tab = (props: TabProps) => {
  const { elementColor, sx, ...rest } = props
  const tabSx = elementColor
    ? { '&::before': { backgroundColor: elementColor }, ...sx }
    : sx

  return (
    <ChakraTab sx={ tabSx } { ...rest } />
  )
}
