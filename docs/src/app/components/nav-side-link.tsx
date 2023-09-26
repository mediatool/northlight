import React from 'react'
import {
  Button,
  CurrentTheme,
  LinkOverlay,
  P,
  useCurrentTheme,
} from '@northlight/ui/ts'

interface CustomNavLinkProps {
  linkName: string
  isActive: boolean
  onClick?: () => void
  linkProps: Record<string, unknown>
}

const getBgColor = (currentTheme: CurrentTheme) => {
  switch (currentTheme) {
    case 'webappTheme': return 'blue.100'
    case 'tottTheme': return 'blue.800'
    default: return 'bg.filled'
  }
}
export const NavSideLink = ({
  linkName,
  isActive,
  onClick,
  linkProps,
}: CustomNavLinkProps) => {
  const currentTheme = useCurrentTheme()
  const bgColorHover = getBgColor(currentTheme)
  const color = isActive ? 'mono.white' : 'text.default'

  return (
    <Button
      p="4"
      _hover={ { bgColor: isActive ? 'bg.brand.default' : bgColorHover } }
      _active={ { bgColor: 'bg.brand.default' } }
      bgColor={ isActive ? 'bg.brand.default' : 'transparent' }
      onClick={ onClick }
      display="flex"
      justifyContent="start"
    >
      <LinkOverlay { ...linkProps }>
        <P sx={ { color, textAlign: 'left' } }>{ linkName }</P>
      </LinkOverlay>
    </Button>
  )
}
