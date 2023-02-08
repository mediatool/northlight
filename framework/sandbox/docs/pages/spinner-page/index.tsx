import React from 'react'
import {
  Code,
  Divider,
  HStack,
  Spinner,
  Stack,
  Text,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const SpinnerPage = () => (
  <Page
    title="Spinner"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/spinner"
        linkText="Chakra Spinner"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Text>Mediatool uses 1 spinner component:</Text>
      <Spinner />
      <Code w="max-content">{ '<Spinner />' }</Code>
      <Divider />
      <Stack>
        <Text>For <strong>accessibility</strong>, add the label prop: </Text>
        <Spinner label="accessible-label" />
        <Code w="max-content">{ '<Spinner label="accessible-label" />' }</Code>
        <Text>
          This label is only visible to screen-readers,
          but would show up in case the spinner failed to render
        </Text>
        <Text>If you don't specify a label it will default to <strong>"Loading ..."</strong></Text>
      </Stack>
      <Divider />
      <Text>It can be used in 5 different <strong>sizes</strong>: (xs, sm, md, lg, xl)</Text>
      <HStack spacing={ 4 }>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </HStack>
      <HStack>
        <Text>Example: </Text>
        <Code w="max-content">{ '<Spinner size="xl" />' }</Code>
      </HStack>
      <Text>If you don't specify a size it will be <strong>md</strong></Text>
    </Stack>
  </Page>
)

export default SpinnerPage
