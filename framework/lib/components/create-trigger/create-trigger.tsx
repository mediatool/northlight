import React from 'react'
import { CSSObject } from '@chakra-ui/system'
import { Button } from '~lib/components'
import { PlusIcon } from '../icons'

type CreateTriggerProps = {
  handleClick: () => void
  disabled?: boolean
}

const disabledStyle:CSSObject = {
  bgColor: 'gray.100',
  cursor: 'not-allowed',
  color: 'white',
  _hover: {
    bgColor: 'gray.100',
  },
}

export const CreateTrigger = ({ handleClick, disabled }: CreateTriggerProps) => (
  <Button
    boxSize="40px"
    borderRadius="full"
    color="mediatool.500"
    colorScheme="green"
    bgColor="green.200"
    onClick={ handleClick }
    _hover={ { bgColor: 'green.300' } }
    _active={ { bgColor: 'green.400' } }
    disabled={ disabled }
    _disabled={ disabledStyle }
  >
    <PlusIcon boxSize="27px" />
  </Button>

)
