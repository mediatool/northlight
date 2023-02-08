import React from 'react'
import {
  ClipboardInput,
  Code,
  Divider,
  Link,
  Stack,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const ClipboardInputPage = () => (
  <Page
    title="ClipboardInput"
    subtitle={ (
      <Text fontWeight="semibold">Based on
        <Link
          target="_blank"
          color="blue.500"
          href="https://chakra-ui.com/docs/hooks/use-clipboard"
        >
        &nbsp;Chakra useClipboard hook&nbsp;
        </Link>
      </Text>
    ) }
  >
    <Stack spacing={ 4 } maxWidth="450px">
      <Text>Mediatool use a ClipboardInput component in <b>3 sizes</b></Text>
      <ClipboardInput size="sm" value="Size sm" />
      <ClipboardInput value="Size md (default)" />
      <ClipboardInput size="lg" value="Size lg" />
      <Text>The default size is <b>md</b></Text>
      <Code w="max-content">{ '<ClipboardInput value="Size md (default)" />' }</Code>
      <Divider />
      <Text>It is possible to pass a custom <b>aria-label</b> to the copy button</Text>
      <ClipboardInput value="hello@northlight.com" aria-label="Copy email" />
      <Code w="max-content">{ '<ClipboardInput value="hello@northlight.com" aria-label="Copy email" />' }</Code>
    </Stack>
  </Page>
)

export default ClipboardInputPage
