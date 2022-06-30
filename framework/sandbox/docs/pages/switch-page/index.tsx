import React from 'react'
import {
  Code,
  Divider,
  Form,
  HStack,
  Stack,
  Switch,
  SwitchField,
  Text,
} from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const SwitchPage = () => (
  <Page
    title="Switch"
    subtitle={
      <DefaultPageSubtitle
        slug="/switch"
        linkText="Chakra Switch"
      />
    }
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 }>
        <Text>Mediatool uses 1 switch:</Text>
        <Switch />
        <Code w="max-content">{ '<Switch />' }</Code>
      </Stack>
      <Text>There are 2 additional <strong>states</strong> of the switch component:</Text>
      <HStack alignItems="flex-start" spacing={ 8 }>
        <Stack spacing={ 4 }>
          <Text><strong>isDisabled:</strong></Text>
          <Switch isDisabled={ true } />
          <Code w="max-content">{ '<Switch  isDisabled={ true } />' }</Code>
        </Stack>
        <Stack spacing={ 4 }>
          <Text><strong>isChecked:</strong></Text>
          <Switch isChecked={ true } />
          <Code w="max-content">{ '<Switch isChecked={ true } />' }</Code>
        </Stack>
      </HStack>
      <Divider />
      <Text>They can be used in 3 different <strong>sizes</strong> (sm, md, lg)</Text>
      <HStack spacing={ 4 } w="30%" >
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </HStack>
      <HStack>
        <Text>Example: </Text>
        <Code w="max-content">{ '<Switch size="md" />' }</Code>
      </HStack>
      <Text>If you don't specify a size, it will be <strong>md</strong></Text>
      <Divider />
      <Stack mb={ 4 } spacing={ 4 }>
        <Text>
          When we use it in forms, we do it with the <strong>SwitchField</strong> component
        </Text>
        <Form initialValues={ { toggle: false } } onSubmit={ () => {} }>
          <HStack maxW="200px" borderBottom="1px solid black">
            <SwitchField name="toggle" label="Toggle me" />
          </HStack>
        </Form>
        <Text>
          It must have a <strong>name</strong> and <strong>label</strong>
        </Text>
        <Code w="max-content">{ '<SwitchField name="toggle" label="Toggle me" />' }</Code>
      </Stack>
    </Stack>
  </Page>
)

export default SwitchPage
