import React, { useEffect, useState } from 'react'
import { Capitalized, Stack } from '../../../lib'
import { NavSideLink } from '../../../lib/internal-components'

interface SideNavBarProps {
  links: string[]
  sections: string[]
}

export const SideNavBar = ({ links, sections }: SideNavBarProps) => {
  const [ activeSection, setActiveSection ] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      let index = sections.length
      while (
        index > 0 &&
        window.scrollY <
          (document.getElementById(sections[index - 1])?.offsetTop || 0)
      ) {
        index -= 1
      }
      setActiveSection(index)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Stack w="28rem" position="fixed" h="full" right="0" top="100px" pt="8">
      <Capitalized>On this page</Capitalized>
      { links.map((link, i) => (
        <NavSideLink
          linkName={ link }
          linkProps={ { href: `/reference/Select#Example-${i}` } }
          isActive={ activeSection === i }
          onClick={ () => setActiveSection(i) }
        />
      )) }
    </Stack>
  )
}
