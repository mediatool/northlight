import React from 'react'
import { ConversationSolid, SearchSolid } from '@mediatool/icons'
import { user } from '../../../assets/png'
import {
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  InputGroup,
  InputLeftElement,
  PlainTextInput,
} from '../../../../lib/components'
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
        <Icon as={ SearchSolid } />
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
      icon={ <Icon as={ ConversationSolid } /> }
      bgColor="blue.500"
    />
  </HStack>
)
