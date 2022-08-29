import React from 'react'
import { PlusSolid } from '@mediatool/icons'
import { SystemStyleObject } from '@chakra-ui/system'
import { Icon, IconButton } from '../../../../lib/components'

const disabledStyle:SystemStyleObject = {
  bgColor: 'gray.100',
  cursor: 'not-allowed',
  color: 'white',
  _hover: {
    bgColor: 'gray.100',
  },
}

export const CreateTrigger = () => (
  <IconButton
    icon={ <Icon as={ PlusSolid } boxSize={ 7 } /> }
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
