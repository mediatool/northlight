import { FlexProps } from '@chakra-ui/react'

export interface ToolboxProps extends Omit<FlexProps, 'direction'> {
  isOpen: boolean
  direction?: 'right' | 'left'
  shouldPush?: boolean
  children: JSX.Element[] | JSX.Element
  size?: 'sm' | 'md' | 'lg'
  onClose: () => void
  autoFocus?: boolean
}

export interface ToolboxHeaderProps extends FlexProps {
  onClose?: () => void
  children: JSX.Element | string
}

export interface ToolboxContentProps extends FlexProps {
  children: JSX.Element | string
}

export interface ToolboxFooterProps extends FlexProps {
  children: JSX.Element | JSX.Element[] | string
}
