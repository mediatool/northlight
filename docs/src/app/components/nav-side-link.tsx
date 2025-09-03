import React from 'react'
import {
  Button,
  Label,
  LinkOverlay,
  useCurrentTheme,
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
  const currentTheme = useCurrentTheme()

  const buttonVariant = currentTheme === 'camphouseLightTheme' ? 'sidebar' : 'brand'

  return (
    <Button
      size="sm"
      p={ 4 }
      variant={ isActive ? buttonVariant : 'ghost' }
      isActive={ isActive }
      onClick={ onClick }
      display="flex"
      justifyContent="start"
    >
      <LinkOverlay { ...linkProps }>
        <Label size="sm" sx={ { cursor: 'pointer' } }>{ linkName }</Label>
      </LinkOverlay>
    </Button>
  )
}
