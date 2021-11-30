import React from 'react'
import { InfoIcon } from '@chakra-ui/icons'
import { Button, Link } from '~lib/components'

export const HelpCenterLink = () => (
  <Button
    as={ Link }
    href="https://intercom.help/mediatool/en/"
    bg="green.200"
    color="blue.800"
    leftIcon={ <InfoIcon boxSize={ 4 } color="primary" /> }
    ml={ 4 }
    _hover={ { textDecoration: 'none', bg: 'green.400' } }
  >
    Help Center
  </Button>
)
