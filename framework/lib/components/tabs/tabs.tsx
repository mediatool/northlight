import React from 'react'
import { Tabs as ChakraTabs } from '@chakra-ui/react'
import { TabsProps } from './types'

/**
 * Tabs are used for secondary navigation between groups on the page of the same context.
 * @see TabList
 * @see TabPanels
 * @see {@link https://northlight.dev/reference/tabs}
 * @example
 * ## Structure
 * <br />
 * - **Tabs**: Context provider and state manager for tab components.
 * - **TabList**: Container for Tab items.
 * - **Tab**: Interactive label for displaying a TabPanel.
 * - **TabPanels**: Group wrapper for TabPanel items.
 * - **TabPanel**: Content area for a Tab.
 * <br />
 * <br />
 * You can render any element within `Tabs`, but `TabList` should only have `Tab` as children,
 * and `TabPanels` should have `TabPanel` as children. <br />
 * <br />
 * `Tabs` expects `TabList` and `TabPanels` as children. The order doesn't matter,
 * you can have `TabList` at the top, at the bottom, or both.
 * <br />
 * <br />
 *
 *  ## Usage
 * <br />
 * **Tabs** have three main variatns:
 * `rounded` (default) or no variant, `soft-rounded` and `line`. <br />
 * Also there are multiple sub-variants: `ai`, `enclosed`, `enclosed-colored` and `unstyled`
 * <br />
 * <br />
 * tip: `enclosed` and `enclosed-colored` can be combined with the `colorScheme=""` prop.
 * <br />
 * <br />
 * (?
    <Tabs>
    <Stack spacing="2">
      <TabList>
        <Tab><Icon as={ MediatoolLogoDuo } mr="2" />One</Tab>
        <Tab><Icon as={ MediatoolLogoDuo } mr="2" />Two</Tab>
        <Tab><Icon as={ MediatoolLogoDuo } mr="2" />Three</Tab>
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
  variant = 'rounded',
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
