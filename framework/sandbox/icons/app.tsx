import React from 'react'
import { NavLink } from 'react-router-dom'
import { Code, Divider, H1, Link, P, Stack, Text } from '../../lib'

const Icons = () => (
  <Stack p={ 4 } spacing={ 4 } bgColor="background.default" height="auto">
    <H1>Mediatool icons</H1>
    <P>Exported as components from the package{ ' ' }
      <Code>@northlight/icons</Code>
    </P>
    <Divider />
    <Stack>
      <P>Mediatool uses 2 variants of icons: { ' ' }
        <Link as={ NavLink } color="blue.500" fontWeight="bold" to="/icons/solid">solid</Link> and { ' ' }
        <Link as={ NavLink } color="blue.500" fontWeight="bold" to="/icons/duo">duo</Link>.
      </P>
      <P>Every icon is exported in both variants.</P>
    </Stack>
    <Divider />
    <Stack>
      <Text>To use an icon, you need to pass it to the icon component like this:</Text>
      <Code w="max-content">{ '<Icon as={ IconFromTheLibrary } />' }</Code>
    </Stack>
  </Stack>

)

export default Icons
