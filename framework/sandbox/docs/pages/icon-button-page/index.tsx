import React from 'react'
import { HStack, IconButton, SwitchesIcon } from '~lib/components'
import { HubIcon } from '~lib/components/icons'
import { DefaultPageSubtitle, Page } from '../../components'

const IconButtonPage = () => (
  <Page
    title="IconButton"
    subtitle={
      <DefaultPageSubtitle
        slug="/form/icon-button"
        linkText="Chakra IconButton"
      />
    }
  >
    <HStack spacing={ 4 }>
      <IconButton icon={ <SwitchesIcon /> } aria-label="Hub" />
      <IconButton disabled={ true } variant="outline" icon={ <SwitchesIcon /> } aria-label="Hub" />
      <IconButton variant="ghost" icon={ <SwitchesIcon /> } aria-label="Hub" />
      <IconButton variant="link" icon={ <SwitchesIcon /> } aria-label="Hub" />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <IconButton disabled={ true } icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton disabled={ true } variant="outline" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton disabled={ true } variant="ghost" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton disabled={ true } variant="link" icon={ <HubIcon /> } aria-label="Hub" />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <IconButton colorScheme="gray" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton colorScheme="gray" variant="outline" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton colorScheme="gray" variant="ghost" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton colorScheme="gray" variant="link" icon={ <HubIcon /> } aria-label="Hub" />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <IconButton size="xs" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="sm" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="md" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="lg" icon={ <HubIcon /> } aria-label="Hub" />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <IconButton size="xs" isRound={ true } variant="outline" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="sm" isRound={ true } variant="outline" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="md" isRound={ true } variant="outline" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="lg" isRound={ true } variant="outline" icon={ <HubIcon /> } aria-label="Hub" />
    </HStack>
    <HStack spacing={ 4 } mt={ 4 }>
      <IconButton size="xs" variant="ghost" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="sm" variant="ghost" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="md" variant="ghost" icon={ <HubIcon /> } aria-label="Hub" />
      <IconButton size="lg" variant="ghost" icon={ <HubIcon /> } aria-label="Hub" />
    </HStack>
  </Page>
)

export default IconButtonPage
