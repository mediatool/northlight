import React from 'react'
import {
  Button,
  Label,
  LinkOverlay,
} from '@northlight/ui'

interface CustomNavLinkProps {
  linkName: string
  isActive: boolean
  onClick?: () => void
  linkProps: Record<string, unknown>
}

export const NavSideLink = ({
  linkName,
  isActive,
  onClick,
  linkProps,
}: CustomNavLinkProps) => {
  const color = isActive ? 'mono.white' : 'text.default'

  return (
    <Button
      size="sm"
      p="4"
      _hover={ { bgColor: isActive ? 'bg.brand.default' : 'background.button.ghost-hover' } }
      _active={ { bgColor: 'bg.brand.default' } }
      bgColor={ isActive ? 'bg.brand.default' : 'transparent' }
      onClick={ onClick }
      display="flex"
      justifyContent="start"
    >
      <LinkOverlay { ...linkProps }>
        <Label size="sm" sx={ { color, cursor: 'pointer' } }>{ linkName }</Label>
      </LinkOverlay>
    </Button>
  )
}
