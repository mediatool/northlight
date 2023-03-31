import React from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/react'
import { OrganizationLogoProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/organization-logo}
 *
 * @example
 * (?
 * <OrganizationLogo name="mediatool" />
 * ?)
 *
 */
export const OrganizationLogo = ({
  name,
  image,
  variant = 'square',
  ...rest
}: OrganizationLogoProps) => {
  const getInitials = (orgName: string) => orgName[0].toUpperCase()
  const {
    container,
    text,
  } = useMultiStyleConfig('Avatar', { variant, image, ...rest })

  return (
    <chakra.div
      __css={ container }
      data-testid="organization-logo-test-id"
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
