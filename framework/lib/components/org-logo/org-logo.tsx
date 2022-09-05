import React from 'react'
import { Avatar } from '@chakra-ui/react'
import { OrgLogoProps } from '../../types'

export const OrgLogo = ({
  name,
  image,
  variant = 'square',
  ...rest
}: OrgLogoProps) => {
  const getInitials = (orgName: string) => orgName[0]
  return (
    <Avatar
      name={ name }
      src={ image }
      variant={ variant }
      getInitials={ getInitials }
      data-testid="orglogo-test-id"
      { ...rest }
    />
  )
}
