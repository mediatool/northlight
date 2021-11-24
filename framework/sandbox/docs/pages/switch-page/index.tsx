import React, { ComponentProps } from 'react'
import { FormLabel } from '@chakra-ui/react'
import { FormControl, Switch as MediatoolSwitch, Stack } from '~lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

type Props = ComponentProps<typeof MediatoolSwitch> & {
  label: string
}

const Switch = ({ label, ...rest }: Props) => (
  <FormControl display="flex" alignItems="center">
    <FormLabel mb={ 0 }>
      { label }
    </FormLabel>
    <MediatoolSwitch { ...rest } />
  </FormControl>
)

const SwitchPage = () => (
  <Page
    title="Switch"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/switch"
        linkText="Chakra Switch"
      />
    }
  >
    <Stack spacing={ 4 } width="30%">
      <Switch label="sm" size="sm" />
      <Switch label="md" />
      <Switch label="lg" size="lg" />
      <Switch label="Purple color scheme" colorScheme="purple" />
    </Stack>
  </Page>
)

export default SwitchPage
