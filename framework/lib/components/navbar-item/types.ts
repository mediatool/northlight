import { ComponentType } from 'react'
import { LinkProps, NavLinkProps } from 'react-router-dom'

export interface NavbarItemProps extends Omit<LinkProps, 'className' | 'style'>, NavLinkProps {
  to: string
  icon: ComponentType
  /** Whether to only display the icon or the coresponding text as well */
  renderTitle?: boolean
}
