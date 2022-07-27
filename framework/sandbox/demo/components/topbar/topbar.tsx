import React from 'react'
import { user } from '~/sandbox/assets/png'
import { Center, HStack, IconButton, Image, InputGroup, InputLeftElement, MessageIconFilled, PlainTextInput, SearchIcon } from '~lib/components'
import { BreadcrumbsDemo } from './breadcrumbs'

export const DemoTopbar = () => (
  <HStack
    alignItems="center"
    p={ 3 }
    spacing={ 5 }
  >
    <BreadcrumbsDemo />
    <InputGroup maxW={ 96 } flex={ 2 }>
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <PlainTextInput
        placeholder="Search files plans, data, help"
        pl={ 10 }
      />
    </InputGroup>
    <Center justifyContent="flex-end">
      <Image
        boxSize={ 10 }
        borderRadius="full"
        src={ user }
      />
    </Center>
    <IconButton
      aria-label="Open conversations"
      icon={ <MessageIconFilled boxSize={ 5 } /> }
      bgColor="blue.500"
    />
  </HStack>
)
