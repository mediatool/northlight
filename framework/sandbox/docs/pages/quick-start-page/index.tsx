import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import {
  Code,
  H1,
  Lead,
  Link,
  ListItem,
  OrderedList,
  P,
  Stack,
  StepStack,
} from '../../../../lib/components'

export default function QuickStart () {
  return (
    <Stack p="6" spacing="8" maxW="1000px">
      <H1>Quick Start</H1>
      <Stack>
        <Lead>Installation</Lead>
        <StepStack>
          <P>
            Run <Code>yarn add @northlight/ui</Code>(or whatever package manager
            you are using)
          </P>
          <P>
            Add the <Code>{ '<MediatoolThemeProvider />' }</Code> at root of
            project
          </P>
          <P>
            You can change theme by importing tottTheme(dark mode) and passing
            it down to the provider
          </P>
        </StepStack>
      </Stack>
      <Stack>
        <Lead>Usage</Lead>
        <P>Northlight is split into three main packages</P>
        <OrderedList>
          <ListItem>
            <Code>@northlight/ui</Code>
          </ListItem>
          <ListItem>
            <Code>@northlight/icons</Code>
          </ListItem>
          <ListItem>
            <Code>@northlight/tokens</Code>
          </ListItem>
        </OrderedList>
        <P>
          @northlight/ui is the main package, containing all the ui components,
          @northlight/icons is a set of react components that display svgs meant
          to be used with the { '<Icon />' } component from @northlight/ui. We
          have our own tokens, css variables which are part of our theme and can
          be accessed via{ ' ' }
          <Link
            as={ ReactLink }
            to="/reference/theme-reference"
            sx={ { color: 'cyan.500', textDecoration: 'underline' } }
          >
            style props
          </Link>
        </P>
      </Stack>
      <Stack>
        <Lead>On docs</Lead>
        <P>
          This documentation is split into multiple parts. Under "Guide" there are blog-like
          examples of the library and more thourough explanations with source
          code. Reference are autogenerated pages for each react component
          exported from the library, with short examples along with what props
          each component takes. Tokens and icons act as reference pages/lookup
          tables.
        </P>
      </Stack>
    </Stack>
  )
}
