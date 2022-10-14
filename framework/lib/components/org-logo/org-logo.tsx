import React from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/react'
import { OrgLogoProps } from './types'

export const OrgLogo = ({
  name,
  image,
  variant = 'square',
  ...rest
}: OrgLogoProps) => {
  const getInitials = (orgName: string) => orgName[0].toUpperCase()
  const {
    container,
    text,
  } = useMultiStyleConfig('Avatar', { variant, image, ...rest })

  return (
    <chakra.div
      __css={ container }
      data-testid="orglogo-test-id"
    >
      { image ? (
        <chakra.img
          alt={ name }
          src={ image }
        />
      )
        : (
          <chakra.span __css={ text }>
            { getInitials(name) }
          </chakra.span>
        )
      }
    </chakra.div>
  )
}
