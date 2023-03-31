import React from 'react'
import { Tabs as ChakraTabs } from '@chakra-ui/react'
import { TabsProps } from './types'

/**
 * Context provider for tabs tabs
 * @see TabList
 * @see TabPanels
 * @see {@link https://northlight.dev/reference/tabs}
 * @example
 * (?
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
 * ?)
 *
 */
export const Tabs = (({
  children,
  variant = 'soft-rounded',
  isManual = true,
  ...rest
}: TabsProps) => (
  <ChakraTabs
    isManual={ isManual }
    variant={ variant }
    { ...rest }
  >
    { children }
  </ChakraTabs>
))
