import { ComponentType } from 'react'
import { LinkProps, NavLinkProps } from 'react-router-dom'

export type NavbarItemProps = LinkProps & NavLinkProps & {
  to: string
  icon: ComponentType
  renderTitle?: boolean
}
