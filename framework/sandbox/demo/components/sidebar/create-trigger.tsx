import React from 'react'
import { CSSObject } from '@chakra-ui/system'
import { IconButton } from '~lib/components'
import { PlusIcon } from '../../../../lib/components/icons'

const disabledStyle:CSSObject = {
  bgColor: 'gray.100',
  cursor: 'not-allowed',
  color: 'white',
  _hover: {
    bgColor: 'gray.100',
  },
}

export const CreateTrigger = () => (
  <IconButton
    icon={ <PlusIcon boxSize="27px" /> }
    aria-label="Create"
    rounded="full"
    color="mediatool.500"
    colorScheme="green"
    bgColor="green.200"
    _hover={ { bgColor: 'green.300' } }
    _active={ { bgColor: 'green.400' } }
    _disabled={ disabledStyle }
  />
)
