import React from 'react'
import { Button } from '../../components/button'
import { LinkOverlay } from '../../components/link-overlay'
import { P } from '../../components/typography'

const linkContainerStyles = {
  p: '4',
  _hover: { bgColor: 'blue.50' },
  _active: { bgColor: 'blue.100' },
}

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
  const color = isActive ? 'blue.500' : 'text.default'
  const bgColor = isActive ? 'blue.50' : 'transparent'

  return (
    <Button
      { ...linkContainerStyles }
      bgColor={ bgColor }
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
