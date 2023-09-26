import React from 'react'
import { Tabs as ChakraTabs } from '@chakra-ui/react'
import { TabsProps } from './types.ts'

/**
 * Context provider for tabs tabs
 * @see TabList
 * @see TabPanels
 * @see {@link https://northlight.dev/reference/tabs}
 * @example
 * (?
    <Tabs>
    <Stack spacing="2">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <P>one!</P>
        </TabPanel>
        <TabPanel>
          <P>two!</P>
        </TabPanel>
        <TabPanel>
          <P>three!</P>
        </TabPanel>
      </TabPanels>
      </Stack>
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
