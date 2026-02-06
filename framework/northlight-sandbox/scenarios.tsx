import React from 'react'
import { parseDate } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'
import type { ComponentScenarios } from '../sandbox/lib/types.ts'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  DatePicker,
  Heading,
  Input,
  Radio,
  RadioGroup,
  SearchBar,
  Spinner,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '../lib'

// Simple browser-compatible assertions
function assert (condition: boolean, message: string) {
  if (!condition) throw new Error(`Assertion failed: ${message}`)
}

function assertEqual<T> (actual: T, expected: T, message: string) {
  if (actual !== expected) {
    throw new Error(`Assertion failed: ${message} (expected ${expected}, got ${actual})`)
  }
}

type SearchBarOption = { label: string, value: string }

interface SearchBarWithStateProps {
  options: SearchBarOption[]
  isMulti?: boolean
  defaultValue?: SearchBarOption | SearchBarOption[]
}

function SearchBarWithState ({ options, isMulti = false, defaultValue }: SearchBarWithStateProps) {
  const initialValue = defaultValue
    ? (Array.isArray(defaultValue) ? defaultValue : [ defaultValue ])
    : []
  const [ selected, setSelected ] = React.useState<SearchBarOption[]>(initialValue)

  return (
    <Stack>
      <SearchBar
        defaultOptions={ options }
        isMulti={ isMulti }
        value={ isMulti ? selected : selected[0] }
        onAdd={ (val) => {
          const option = options.find((o) => o.value === val)
          if (option) {
            setSelected((prev) => (isMulti ? [ ...prev, option ] : [ option ]))
          }
        } }
        onRemove={ (val) => setSelected((prev) =>
          prev.filter((item) => item.value !== val)
        ) }
        placeholder="Search fruits..."
      />
      <Text data-testid="selected-count">{ selected.length }</Text>
      <Text data-testid="selected-values">{ selected.map((s) => s.label).join(',') }</Text>
    </Stack>
  )
}

interface DatePickerWithStateProps {
  defaultValue?: string
}

function DatePickerWithState ({ defaultValue }: DatePickerWithStateProps) {
  const [ date, setDate ] = React.useState<DateValue | null>(
    defaultValue ? parseDate(defaultValue) : null
  )

  return (
    <Stack>
      <DatePicker
        aria-label="Select date"
        value={ date }
        onChange={ setDate }
        resetDate={ () => setDate(null) }
        firstDayOfWeek="monday"
      />
      <Text data-testid="date-value">{ date?.toString() ?? '' }</Text>
    </Stack>
  )
}

const buttonScenarios: ComponentScenarios = {
  name: 'Button',
  component: Button,
  inline: true,
  scenarios: [
    {
      name: 'default',
      props: { children: 'Default Button' },
      code: '<Button>Default Button</Button>',
    },
    {
      name: 'brand',
      props: { children: 'Brand Button', variant: 'brand' },
      code: '<Button variant="brand">Brand Button</Button>',
    },
    {
      name: 'danger',
      props: { children: 'Danger Button', variant: 'danger' },
      code: '<Button variant="danger">Danger Button</Button>',
    },
    {
      name: 'success',
      props: { children: 'Success Button', variant: 'success' },
      code: '<Button variant="success">Success Button</Button>',
    },
    {
      name: 'ghost',
      props: { children: 'Ghost Button', variant: 'ghost' },
      code: '<Button variant="ghost">Ghost Button</Button>',
    },
    {
      name: 'link',
      props: { children: 'Link Button', variant: 'link' },
      code: '<Button variant="link">Link Button</Button>',
    },
    {
      name: 'loading',
      props: { children: 'Loading...', isLoading: true },
      code: '<Button isLoading>Loading...</Button>',
    },
    {
      name: 'disabled',
      props: { children: 'Disabled', isDisabled: true },
      code: '<Button isDisabled>Disabled</Button>',
    },
    {
      name: 'click test',
      props: { children: 'Click Me' },
      code: '<Button onClick={() => alert("Clicked!")}>Click Me</Button>',
    },
  ],
}

const buttonSizesScenarios: ComponentScenarios = {
  name: 'Button Sizes',
  component: Button,
  inline: true,
  scenarios: [
    {
      name: 'xs',
      props: { children: 'Extra Small', size: 'xs' },
      code: '<Button size="xs">Extra Small</Button>',
    },
    {
      name: 'sm',
      props: { children: 'Small', size: 'sm' },
      code: '<Button size="sm">Small</Button>',
    },
    {
      name: 'md',
      props: { children: 'Medium', size: 'md' },
      code: '<Button size="md">Medium</Button>',
    },
    {
      name: 'lg',
      props: { children: 'Large', size: 'lg' },
      code: '<Button size="lg">Large</Button>',
    },
  ],
}

const alertScenarios: ComponentScenarios = {
  name: 'Alert',
  component: Alert,
  inline: true,
  scenarios: [
    {
      name: 'info',
      props: {
        status: 'info',
        children: [
          <AlertIcon key="icon" />,
          <AlertTitle key="title">Info Alert</AlertTitle>,
          <AlertDescription key="desc">This is an informational message.</AlertDescription>,
        ],
      },
    },
    {
      name: 'success',
      props: {
        status: 'success',
        children: [
          <AlertIcon key="icon" />,
          <AlertTitle key="title">Success!</AlertTitle>,
          <AlertDescription key="desc">Your action was completed successfully.</AlertDescription>,
        ],
      },
    },
    {
      name: 'warning',
      props: {
        status: 'warning',
        children: [
          <AlertIcon key="icon" />,
          <AlertTitle key="title">Warning</AlertTitle>,
          <AlertDescription key="desc">Please review before continuing.</AlertDescription>,
        ],
      },
    },
    {
      name: 'error',
      props: {
        status: 'error',
        children: [
          <AlertIcon key="icon" />,
          <AlertTitle key="title">Error</AlertTitle>,
          <AlertDescription key="desc">Something went wrong.</AlertDescription>,
        ],
      },
    },
  ],
}

const badgeScenarios: ComponentScenarios = {
  name: 'Badge',
  component: Badge,
  inline: true,
  scenarios: [
    { name: 'default', props: { children: 'Default' } },
    { name: 'green', props: { children: 'Success', colorScheme: 'green' } },
    { name: 'yellow', props: { children: 'Warning', colorScheme: 'yellow' } },
    { name: 'red', props: { children: 'Error', colorScheme: 'red' } },
    { name: 'blue', props: { children: 'Info', colorScheme: 'blue' } },
  ],
}

const inputScenarios: ComponentScenarios = {
  name: 'Input',
  component: Input,
  inline: true,
  scenarios: [
    { name: 'default', props: { placeholder: 'Enter text...' } },
    { name: 'filled', props: { placeholder: 'Filled variant', variant: 'filled' } },
    { name: 'flushed', props: { placeholder: 'Flushed variant', variant: 'flushed' } },
    { name: 'disabled', props: { placeholder: 'Disabled', isDisabled: true } },
    { name: 'invalid', props: { placeholder: 'Invalid input', isInvalid: true } },
    {
      name: 'type test',
      props: { placeholder: 'Type here...' },
      play: async ({ screen, user }) => {
        const input = screen.getByPlaceholderText('Type here...') as HTMLInputElement
        assertEqual(input.value, '', 'Input should be empty initially')
        await user.type(input, 'Hello World!')
        assertEqual(input.value, 'Hello World!', 'Input should contain typed text')
      },
    },
  ],
}

const checkboxScenarios: ComponentScenarios = {
  name: 'Checkbox',
  component: Checkbox,
  inline: true,
  scenarios: [
    { name: 'unchecked', props: { children: 'Unchecked' } },
    { name: 'checked', props: { children: 'Checked', defaultChecked: true } },
    { name: 'disabled', props: { children: 'Disabled', isDisabled: true } },
    { name: 'invalid', props: { children: 'Invalid', isInvalid: true } },
    {
      name: 'toggle test',
      props: { children: 'Toggle Me' },
      play: async ({ screen, user }) => {
        const checkbox = screen.getByRole('checkbox', { name: 'Toggle Me' }) as HTMLInputElement
        assert(!checkbox.checked, 'Checkbox should be unchecked initially')
        await user.click(checkbox)
        assert(checkbox.checked, 'Checkbox should be checked after first click')
        await user.click(checkbox)
        assert(!checkbox.checked, 'Checkbox should be unchecked after second click')
      },
    },
  ],
}

const switchScenarios: ComponentScenarios = {
  name: 'Switch',
  component: Switch,
  inline: true,
  scenarios: [
    { name: 'off', props: { 'aria-label': 'Switch off' } },
    { name: 'on', props: { 'aria-label': 'Switch on', defaultChecked: true } },
    { name: 'disabled', props: { 'aria-label': 'Switch disabled', isDisabled: true } },
    {
      name: 'toggle test',
      props: { 'aria-label': 'Toggle switch' },
      play: async ({ screen, user }) => {
        const switchEl = screen.getByRole('checkbox', { name: 'Toggle switch' }) as HTMLInputElement
        assert(!switchEl.checked, 'Switch should be off initially')
        await user.click(switchEl)
        assert(switchEl.checked, 'Switch should be on after click')
      },
    },
  ],
}

const spinnerScenarios: ComponentScenarios = {
  name: 'Spinner',
  component: Spinner,
  inline: true,
  scenarios: [
    { name: 'xs', props: { size: 'xs' } },
    { name: 'sm', props: { size: 'sm' } },
    { name: 'md', props: { size: 'md' } },
    { name: 'lg', props: { size: 'lg' } },
    { name: 'xl', props: { size: 'xl' } },
  ],
}

const cardScenarios: ComponentScenarios = {
  name: 'Card',
  component: Card,
  scenarios: [
    {
      name: 'basic',
      props: {
        maxW: '400px',
        children: [
          <CardHeader key="header">
            <Heading size="md">Card Title</Heading>
          </CardHeader>,
          <CardBody key="body">
            <Text>This is a basic card component with a header and body content.</Text>
          </CardBody>,
        ],
      },
    },
  ],
}

const tabsScenarios: ComponentScenarios = {
  name: 'Tabs',
  component: Tabs,
  scenarios: [
    {
      name: 'line',
      props: {
        variant: 'line',
        children: [
          <Box key="stack">
            <TabList key="list">
              <Tab>Overview</Tab>
              <Tab>Settings</Tab>
              <Tab>Activity</Tab>
            </TabList>
            <TabPanels key="panels">
              <TabPanel pt={ 4 }>
                <Heading size="sm" mb={ 2 }>Welcome to the Overview</Heading>
                <Text color="gray.600">
                  This panel shows your dashboard summary. You can view key metrics,
                  recent updates, and quick actions from here.
                </Text>
              </TabPanel>
              <TabPanel pt={ 4 }>
                <Heading size="sm" mb={ 2 }>Account Settings</Heading>
                <Text color="gray.600">
                  Manage your preferences, notifications, and security options.
                  Changes are saved automatically.
                </Text>
              </TabPanel>
              <TabPanel pt={ 4 }>
                <Heading size="sm" mb={ 2 }>Recent Activity</Heading>
                <Text color="gray.600">
                  Track your latest actions and events. Activity logs are kept
                  for 30 days.
                </Text>
              </TabPanel>
            </TabPanels>
          </Box>,
        ],
      },
      play: async ({ screen, user }) => {
        const tab1 = screen.getByRole('tab', { name: 'Overview' })
        const tab2 = screen.getByRole('tab', { name: 'Settings' })
        const tab3 = screen.getByRole('tab', { name: 'Activity' })

        assertEqual(tab1.getAttribute('aria-selected'), 'true', 'Overview should be selected initially')

        await user.click(tab2)
        assertEqual(tab2.getAttribute('aria-selected'), 'true', 'Settings should be selected')
        assert(screen.getByText('Account Settings') !== null, 'Settings content should be visible')

        await user.click(tab1)
        assertEqual(tab1.getAttribute('aria-selected'), 'true', 'Overview should be selected')

        await user.click(tab3)
        assertEqual(tab3.getAttribute('aria-selected'), 'true', 'Activity should be selected')
        assert(screen.getByText('Recent Activity') !== null, 'Activity content should be visible')
      },
    },
    {
      name: 'enclosed',
      props: {
        variant: 'enclosed',
        children: [
          <TabList key="list">
            <Tab>Profile</Tab>
            <Tab>Security</Tab>
            <Tab>Billing</Tab>
          </TabList>,
          <TabPanels key="panels">
            <TabPanel pt={ 4 }>
              <Heading size="sm" mb={ 2 }>Your Profile</Heading>
              <Text color="gray.600">
                Update your personal information, avatar, and display preferences.
              </Text>
            </TabPanel>
            <TabPanel pt={ 4 }>
              <Heading size="sm" mb={ 2 }>Security Settings</Heading>
              <Text color="gray.600">
                Configure two-factor authentication and manage connected devices.
              </Text>
            </TabPanel>
            <TabPanel pt={ 4 }>
              <Heading size="sm" mb={ 2 }>Billing Information</Heading>
              <Text color="gray.600">
                View invoices, update payment methods, and manage subscriptions.
              </Text>
            </TabPanel>
          </TabPanels>,
        ],
      },
    },
    {
      name: 'soft-rounded',
      props: {
        variant: 'soft-rounded',
        colorScheme: 'blue',
        children: [
          <TabList key="list">
            <Tab>All</Tab>
            <Tab>Active</Tab>
            <Tab>Archived</Tab>
          </TabList>,
          <TabPanels key="panels">
            <TabPanel pt={ 4 }>
              <Heading size="sm" mb={ 2 }>All Items</Heading>
              <Text color="gray.600">
                Showing all 24 items in your collection, sorted by date.
              </Text>
            </TabPanel>
            <TabPanel pt={ 4 }>
              <Heading size="sm" mb={ 2 }>Active Items</Heading>
              <Text color="gray.600">
                18 items are currently active and available for use.
              </Text>
            </TabPanel>
            <TabPanel pt={ 4 }>
              <Heading size="sm" mb={ 2 }>Archived Items</Heading>
              <Text color="gray.600">
                6 items have been archived. You can restore them anytime.
              </Text>
            </TabPanel>
          </TabPanels>,
        ],
      },
    },
  ],
}

const radioScenarios: ComponentScenarios = {
  name: 'Radio',
  component: RadioGroup,
  inline: true,
  scenarios: [
    {
      name: 'default',
      props: {
        defaultValue: 'option1',
        children: (
          <Stack direction="column" gap={ 2 }>
            <Radio value="option1">Option 1</Radio>
            <Radio value="option2">Option 2</Radio>
            <Radio value="option3">Option 3</Radio>
          </Stack>
        ),
      },
      play: async ({ screen, user }) => {
        const option1 = screen.getByRole('radio', { name: 'Option 1' }) as HTMLInputElement
        const option2 = screen.getByRole('radio', { name: 'Option 2' }) as HTMLInputElement
        const option3 = screen.getByRole('radio', { name: 'Option 3' }) as HTMLInputElement

        assert(option1.checked, 'Option 1 should be checked initially')

        await user.click(option2)
        assert(option2.checked, 'Option 2 should be checked')
        assert(!option1.checked, 'Option 1 should be unchecked')

        await user.click(option3)
        assert(option3.checked, 'Option 3 should be checked')
        assert(!option2.checked, 'Option 2 should be unchecked')
      },
    },
  ],
}

const searchBarOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
]

const searchBarScenarios: ComponentScenarios = {
  name: 'SearchBar',
  component: SearchBarWithState,
  scenarios: [
    {
      name: 'multi',
      props: {
        options: searchBarOptions,
        isMulti: true,
      },
      play: async ({ screen, documentScreen, user, container }) => {
        const input = container.querySelector('input') as HTMLInputElement
        const countEl = screen.getByTestId('selected-count')
        const valuesEl = screen.getByTestId('selected-values')

        assertEqual(countEl.textContent, '0', 'Should start with 0 selected')

        await user.click(input)
        const menu = await documentScreen.findByTestId('select-menu-wrapper-test-id')
        const options = menu.querySelectorAll('[id*="option"]')
        await user.click(options[0])

        assertEqual(countEl.textContent, '1', 'Should have 1 selected after adding')
        assert(valuesEl.textContent?.includes('Apple') ?? false, 'Should show Apple')

        await user.click(input)
        const menu2 = await documentScreen.findByTestId('select-menu-wrapper-test-id')
        const options2 = menu2.querySelectorAll('[id*="option"]')
        await user.click(options2[1])

        assertEqual(countEl.textContent, '2', 'Should have 2 selected')

        const removeButtons = container.querySelectorAll('[aria-label="Remove Apple"]')
        if (removeButtons.length > 0) {
          await user.click(removeButtons[0])
          assertEqual(countEl.textContent, '1', 'Should have 1 after removal')
        }

        await user.keyboard('{Escape}')
      },
    },
    {
      name: 'prefilled multi',
      props: {
        options: searchBarOptions,
        isMulti: true,
        defaultValue: [
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
        ],
      },
      play: async ({ screen, user, container }) => {
        const countEl = screen.getByTestId('selected-count')
        assertEqual(countEl.textContent, '2', 'Should start with 2 selected')

        const removeButtons = container.querySelectorAll('[aria-label="Remove Apple"]')
        if (removeButtons.length > 0) {
          await user.click(removeButtons[0])
          assertEqual(countEl.textContent, '1', 'Should have 1 after removal')
        }

        await user.keyboard('{Escape}')
      },
    },
    {
      name: 'single',
      props: {
        options: searchBarOptions,
        isMulti: false,
      },
      play: async ({ screen, documentScreen, user, container }) => {
        const input = container.querySelector('input') as HTMLInputElement
        const countEl = screen.getByTestId('selected-count')
        const valuesEl = screen.getByTestId('selected-values')

        assertEqual(countEl.textContent, '0', 'Should start with 0 selected')

        await user.click(input)
        const menu = await documentScreen.findByTestId('select-menu-wrapper-test-id')
        const options = menu.querySelectorAll('[id*="option"]')
        await user.click(options[0])

        assertEqual(countEl.textContent, '1', 'Should have 1 selected')
        assert(valuesEl.textContent?.includes('Apple') ?? false, 'Should show Apple')

        await user.click(input)
        const menu2 = await documentScreen.findByTestId('select-menu-wrapper-test-id')
        const options2 = menu2.querySelectorAll('[id*="option"]')
        await user.click(options2[1])

        assertEqual(countEl.textContent, '1', 'Should still have 1 selected (replaced)')
        assert(valuesEl.textContent?.includes('Banana') ?? false, 'Should show Banana')

        await user.keyboard('{Escape}')
      },
    },
    {
      name: 'prefilled single',
      props: {
        options: searchBarOptions,
        isMulti: false,
        defaultValue: { label: 'Apple', value: 'apple' },
      },
      play: async ({ screen, documentScreen, user, container }) => {
        const input = container.querySelector('input') as HTMLInputElement
        const countEl = screen.getByTestId('selected-count')
        const valuesEl = screen.getByTestId('selected-values')

        assertEqual(countEl.textContent, '1', 'Should start with 1 selected')
        assert(valuesEl.textContent?.includes('Apple') ?? false, 'Should show Apple')

        await user.click(input)
        const menu = await documentScreen.findByTestId('select-menu-wrapper-test-id')
        const options = menu.querySelectorAll('[id*="option"]')
        await user.click(options[1])

        assertEqual(countEl.textContent, '1', 'Should still have 1 selected')
        assert(valuesEl.textContent?.includes('Banana') ?? false, 'Should show Banana')

        await user.keyboard('{Escape}')
      },
    },
  ],
}

const datePickerScenarios: ComponentScenarios = {
  name: 'DatePicker',
  component: DatePickerWithState,
  scenarios: [
    {
      name: 'empty',
      props: {},
      play: async ({ screen }) => {
        const dateEl = screen.getByTestId('date-value')
        assertEqual(dateEl.textContent, '', 'Should start empty')
      },
    },
    {
      name: 'prefilled',
      props: {
        defaultValue: '2024-06-15',
      },
      play: async ({ screen, user }) => {
        const dateEl = screen.getByTestId('date-value')
        assertEqual(dateEl.textContent, '2024-06-15', 'Should start with prefilled date')

        const resetButton = screen.getByRole('button', { name: 'reset-date' })
        await user.click(resetButton)

        assertEqual(dateEl.textContent, '', 'Date should be cleared after reset')
      },
    },
  ],
}

export const scenarios = [
  buttonScenarios,
  buttonSizesScenarios,
  alertScenarios,
  badgeScenarios,
  inputScenarios,
  checkboxScenarios,
  switchScenarios,
  spinnerScenarios,
  cardScenarios,
  tabsScenarios,
  radioScenarios,
  searchBarScenarios,
  datePickerScenarios,
]
