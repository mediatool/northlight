import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import {
  H1,
  Lead,
  Link,
  ListItem,
  P,
  Stack,
  UnorderedList,
} from '@northlight/ui'

export default function AboutTokens () {
  return (
    <Stack p="6" spacing="8" maxW="1000px">
      <H1>About Design tokens</H1>
      <Stack>
        <Lead>Abstract</Lead>
        <P>
          Our design tokens are a set of css variables, which were deduced by
          one big .json file defined in @northlight/tokens. This file has then
          been parsed by{ ' ' }
          <Link
            as={ ReactLink }
            isExternal={ true }
            to="https://chakra-ui.com/docs/styled-system/customize-theme"
            sx={ { color: 'cyan.500', textDecoration: 'underline' } }
          >
            Chakra UI theme
          </Link>
          . This makes the tokens easily accessible by{ ' ' }
          <Link
            as={ ReactLink }
            isExternal={ true }
            to="/reference/theming-reference"
            sx={ { color: 'cyan.500', textDecoration: 'underline' } }
          >
            style props
          </Link>
          . We export multiple themes, as of currently webapptheme(light mode) and
          tottTheme(dark mode). You can customize and put together your own
          theme.
        </P>
      </Stack>
      <Stack>
        <Lead>Our tokens are split into two parts</Lead>
        <UnorderedList>
          <ListItem>Global reference tokens</ListItem>
          <ListItem> System and component tokens</ListItem>
        </UnorderedList>
        <P>
          The component tokens are meant for internal usage inside the library,
          ex: "background.button.default". The system tokens, which are also
          under the component token menu, are prefixed with "st", these can
          change from theme to theme. Ex: "md".
        </P>
        <P>
          Global reference tokens are token values which are consistent across all
          themes, for example: "blue.500"
        </P>
        <P>
          As a note you should always try to use the system tokens. If there is
          some occurence where you can't use them, you can open an issue or PR
          and we'd be glad to extend our token range.
        </P>
      </Stack>
    </Stack>
  )
}
