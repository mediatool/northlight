import React from 'react'
import { StackSolid } from '@northlight/icons'
import {
  Code,
  Divider,
  HStack,
  Icon,
  P,
  Stack,
  Tag,
  TagCloseButton,
  TagGroup,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Text,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'
import { arrayWithLength } from '../../utils'

const TagPage = () => (
  <Page
    title="Tag"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/tag"
        linkText="Chakra Tag"
      />
    ) }
  >
    <Stack spacing={ 4 }>
      <Text>Mediatool uses 2 tag components:</Text>
      <HStack>
        <Tag>Solid</Tag>
        <Tag variant="subtle">Subtle</Tag>
      </HStack>
      <Text>If you don't specify the variant, it will be <strong>solid</strong></Text>
      <Code w="max-content">{ '<Tag variant="subtle">Subtle</Tag>' }</Code>
      <Divider />
      <HStack alignItems="flex-start" spacing={ 8 }>
        <Stack>
          <Text>Add a label, either directly: </Text>
          <HStack>
            <Tag>Label</Tag>
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
      <P>Use the { '<TagGroup />' } util component for responsive horizontal tag layouts, try resizing the window!</P>
      <TagGroup w="20%" border="1px solid black" p="2" borderRadius="md">
        { arrayWithLength(10).map((i) => (
          <Tag w="max-content" key={ i }>{ i }</Tag>
        )) }
      </TagGroup>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<TagGroup w="20%" border="1px solid black" p="2" borderRadius="md">
  { arrayWithLength(10).map((i) => (
    <Tag w="max-content">{ i }</Tag>
  )) }
</TagGroup>` }
      </Code>
      <Divider />
      <Text>One can add an icon using <strong>TagLeftIcon   </strong>
        or <strong>TagRightIcon</strong>, there's also a <strong>TagCloseButton</strong>
      </Text>
      <HStack spacing={ 4 }>
        <Tag>
          <TagLeftIcon>
            <Icon as={ StackSolid } />
          </TagLeftIcon>
          <TagLabel>Left Icon</TagLabel>
        </Tag>
        <Tag>
          <TagLabel>Right Icon</TagLabel>
          <TagRightIcon>
            <Icon as={ StackSolid } />
          </TagRightIcon>
        </Tag>
        <Tag>
          <TagLabel>Close Button</TagLabel>
          <TagCloseButton />
        </Tag>
      </HStack>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<HStack spacing={ 4 }>
  <Tag>
    <TagLeftIcon>
      <Icon as={ StackSolid } />
    </TagLeftIcon>
    <TagLabel>Left Icon</TagLabel>
  </Tag>
  <Tag>
    <TagLabel>Right Icon</TagLabel>
    <TagRightIcon>
      <Icon as={ StackSolid } />
    </TagRightIcon>
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
      <Text>(colorScheme works as well the same way as bgColor)</Text>
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
