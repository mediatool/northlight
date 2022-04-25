import React from 'react'
import { user } from '~/sandbox/assets/png'
import { Center, HStack, IconButton, Image, InputGroup, InputLeftElement, MessageIconFilled, PlainTextInput, SearchIcon } from '~lib/components'
import { BreadcrumbsDemo } from './breadcrumbs'

export const DemoTopbar = () => (
  <HStack
    h="100%"
    w="100%"
    p={ 3 }
    alignItems="center"
    spacing={ 5 }
  >
    <BreadcrumbsDemo />
    <InputGroup maxW="500px" flex={ 2 }>
      <InputLeftElement >
        <SearchIcon />
      </InputLeftElement>
      <PlainTextInput
        placeholder="Search files plans, data, help"
        pl={ 10 }
      />
    </InputGroup>
    <Center justifyContent="flex-end">
      <Image
        boxSize="40px"
        borderRadius="full"
        src={ user }
      />
    </Center>
    <IconButton
      aria-label="Open conversations"
      icon={ <MessageIconFilled boxSize="20px" /> }
      bgColor="blue.500"
    />
  </HStack>
)
