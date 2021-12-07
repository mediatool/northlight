import React from 'react'
import { HStack, Tag, TagCloseButton, TagLabel, TagLeftIcon } from '~lib/components'
import { SwitchesIcon } from '~lib/components/icons'
import { DefaultPageSubtitle, Page } from '../../components'

const TagPage = () => (
  <Page
    title="Tag"
    subtitle={
      <DefaultPageSubtitle
        slug="/data-display/tag"
        linkText="Chakra Tag"
      />
    }
  >
    <HStack spacing={ 4 }>
      <Tag size="sm">Primary solid</Tag>
      <Tag size="md">Primary solid</Tag>
      <Tag size="lg">Primary solid</Tag>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Tag size="sm">
        <TagLeftIcon as={ SwitchesIcon } boxSize="12px" />
        <TagLabel>Primary solid</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag size="md">
        <TagLeftIcon as={ SwitchesIcon } boxSize="12px" />
        <TagLabel>Primary solid</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag size="lg">
        <TagLeftIcon as={ SwitchesIcon } boxSize="12px" />
        <TagLabel>Primary solid</TagLabel>
        <TagCloseButton />
      </Tag>
    </HStack>
  </Page>
)

export default TagPage
