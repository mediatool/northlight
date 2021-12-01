import React from 'react'
import { Button, HStack } from '~lib/components'
import { HubIcon, SwitchesIcon } from '~lib/components/icons'
import { DefaultPageSubtitle, Page } from '../../components'

const ButtonPage = () => (
  <Page
    title="Button"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/button"
        linkText="Chakra Button"
      />
    }
  >
    <HStack spacing={ 4 }>
      <Button>Primary solid</Button>
      <Button variant="outline">Primary outlined</Button>
      <Button variant="ghost">Primary ghost</Button>
      <Button variant="link">Primary link</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Button disabled={ true }>Solid disabled</Button>
      <Button disabled={ true } variant="outline">Outlined disabled</Button>
      <Button disabled={ true } variant="ghost">Ghost disabled</Button>
      <Button disabled={ true } variant="link">Link disabled</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Button colorScheme="red">Red solid</Button>
      <Button colorScheme="red" variant="outline">Red outlined</Button>
      <Button colorScheme="red" variant="ghost">Red ghost</Button>
      <Button colorScheme="red" variant="link">Red link</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Button size="xs">Solid xs</Button>
      <Button size="sm">Solid sm</Button>
      <Button size="md">Solid md</Button>
      <Button size="lg">Solid lg</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Button size="xs" variant="outline">Outlined xs</Button>
      <Button size="sm" variant="outline">Outlined sm</Button>
      <Button size="md" variant="outline">Outlined md</Button>
      <Button size="lg" variant="outline">Outlined lg</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Button size="xs" variant="ghost">Ghost xs</Button>
      <Button size="sm" variant="ghost">Ghost sm</Button>
      <Button size="md" variant="ghost">Ghost md</Button>
      <Button size="lg" variant="ghost">Ghost lg</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Button leftIcon={ <HubIcon /> }>Primary solid icon</Button>
      <Button leftIcon={ <HubIcon /> } variant="outline">Primary outlined icon</Button>
      <Button leftIcon={ <HubIcon /> } variant="ghost">Primary ghost icon</Button>
      <Button leftIcon={ <HubIcon /> } variant="link">Primary link icon</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Button rightIcon={ <SwitchesIcon /> }>Primary solid icon</Button>
      <Button rightIcon={ <SwitchesIcon /> } variant="outline">Primary outlined icon</Button>
      <Button rightIcon={ <SwitchesIcon /> } variant="ghost">Primary ghost icon</Button>
      <Button rightIcon={ <SwitchesIcon /> } variant="link">Primary link icon</Button>
    </HStack>
  </Page>
)

export default ButtonPage
