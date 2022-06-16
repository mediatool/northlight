import React from 'react'
import {
  Code,
  Divider,
  HStack,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Text,
} from '~lib/components'
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
    <Stack spacing={ 4 }>
      <Text>Media uses 1 tag component:</Text>
      <HStack>
        <Tag>MediatoolTag</Tag>
      </HStack>
      <Code w="max-content">{ '<Tag>MediatoolTag</Tag>' }</Code>
      <Divider />
      <HStack alignItems="flex-start" spacing={ 8 }>
        <Stack>
          <Text>Add a label, either directly: </Text>
          <HStack>
            <Tag >Label</Tag>
          </HStack>
          <Code w="max-content">{ '<Tag>Label</Tag>' }</Code>
        </Stack>
        <Stack>
          <Text>Or by using <strong>TagLabel</strong>:</Text>
          <HStack>
            <Tag>
              <TagLabel>Label</TagLabel>
            </Tag>
          </HStack>
          <Code w="max-content" display="block" whiteSpace="pre">{
`<Tag>
  <TagLabel>Label</TagLabel>
</Tag>` }
          </Code>
        </Stack>
      </HStack>
      <Divider />
      <Text>One can add an icon using <strong>TagLeftIcon   </strong>
        or <strong>TagRightIcon</strong>, there's also a <strong>TagCloseButton</strong>
      </Text>
      <HStack spacing={ 4 }>
        <Tag>
          <TagLeftIcon as={ SwitchesIcon } boxSize="12px" />
          <TagLabel>Left Icon</TagLabel>
        </Tag>
        <Tag>
          <TagLabel>Right Icon</TagLabel>
          <TagRightIcon as={ SwitchesIcon } boxSize="12px" />
        </Tag>
        <Tag>
          <TagLabel>Close Button</TagLabel>
          <TagCloseButton />
        </Tag>
      </HStack>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<HStack spacing={ 4 }>
  <Tag>
    <TagLeftIcon as={ SwitchesIcon } boxSize="12px" />
    <TagLabel>Left Icon</TagLabel>
  </Tag>
  <Tag>
    <TagLabel>Right Icon</TagLabel>
    <TagRightIcon as={ SwitchesIcon } boxSize="12px" />
  </Tag>
  <Tag>
    <TagLabel>Close Button</TagLabel>
    <TagCloseButton />
  </Tag>
</HStack>` }
      </Code>
      <Divider />
      <Text>You can adjust the background color by adjusting <strong>bgColor:</strong></Text>
      <HStack>
        <Tag bgColor="#99ff99">Green</Tag>
        <Code w="max-content">{ '<Tag bgColor="#99ff99">Green</Tag>' }</Code>
      </HStack>
      <Text>Note: it only takes in a 6 figure hex value (#xxyyzz)</Text>
      <Divider />
      <Text>They can be used in 3 different <strong>sizes</strong>:</Text>
      <HStack spacing={ 4 }>
        <Tag size="sm">sm</Tag>
        <Tag size="md">md</Tag>
        <Tag size="lg">lg</Tag>
      </HStack>
      <Text>If you don't specify a size it will be <strong>md</strong></Text>
    </Stack>
  </Page>
)

export default TagPage
