import React from 'react'
import { Button, HStack, Text } from '~lib/components'
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
      <Text>Variants:</Text>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Text>Disabled:</Text>
      <Button disabled={ true }>Default</Button>
      <Button disabled={ true } variant="outline">Outline</Button>
      <Button disabled={ true } variant="ghost">Ghost</Button>
      <Button disabled={ true } variant="link">Link</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Text>Color scheme:</Text>
      <Button colorScheme="green">Green</Button>
      <Button colorScheme="orange" variant="outline">Orange</Button>
      <Button colorScheme="teal" variant="ghost">Teal</Button>
      <Button colorScheme="red" variant="link">Red</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Text>Size:</Text>
      <Button size="xs">Size xs</Button>
      <Button size="sm">Size sm</Button>
      <Button size="md">Size md</Button>
      <Button size="lg">Size lg</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Text>Left Icon:</Text>
      <Button leftIcon={ <HubIcon /> }>Hub icon</Button>
      <Button leftIcon={ <HubIcon /> } variant="outline" colorScheme="purple">Hub icon</Button>
      <Button leftIcon={ <HubIcon /> } variant="ghost" colorScheme="yellow">Hub icon</Button>
      <Button leftIcon={ <HubIcon /> } variant="link" colorScheme="pink">Hub icon</Button>
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <Text>Right Icon:</Text>
      <Button rightIcon={ <SwitchesIcon /> }>Primary solid icon</Button>
      <Button rightIcon={ <SwitchesIcon /> } variant="outline" colorScheme="purple">Switches icon</Button>
      <Button rightIcon={ <SwitchesIcon /> } variant="ghost" colorScheme="yellow">Switches icon</Button>
      <Button rightIcon={ <SwitchesIcon /> } variant="link" colorScheme="pink">Switches icon</Button>
    </HStack>
  </Page>
)

export default ButtonPage
