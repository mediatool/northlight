import React from 'react'
import {
  Avatar,
} from '@chakra-ui/react'
import { OrgLogoProps } from '../../types'

export const OrgLogo = ({
  name,
  image,
  variant,
  ...rest
}: OrgLogoProps) => (
  <Avatar
    name={ name }
    src={ image }
    variant={ variant }
    getInitials={ (orgName: string) => orgName[0] }
    data-testid="orglogo-test-id"
    { ...rest }
  />
)
