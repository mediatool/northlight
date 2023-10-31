import { FlexProps } from '@chakra-ui/react'

export interface ToolboxProps extends Omit<FlexProps, 'direction'> {
  isResizable?: boolean
  isOpen: boolean
  /** where the toolbox pops in from */
  direction?: 'right' | 'left'
  /** if true creates a statically positioned box element that takes up
   *  width, causes layout change. */
  shouldPush?: boolean
  children: JSX.Element[] | JSX.Element
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  onClose: () => void
  /** if true focuses on the first element in the toolboxcontent. */
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
