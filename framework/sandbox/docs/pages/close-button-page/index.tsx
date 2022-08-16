import React from 'react'
import { CloseButton, HStack } from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const CloseButtonPage = () => (
  <Page
    title="Close Button"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/close-button"
        linkText="Chakra Close Button"
      />
    ) }
  >
    <HStack spacing={ 4 }>
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
      <CloseButton size="lg" disabled={ true } />
    </HStack>
  </Page>
)

export default CloseButtonPage
