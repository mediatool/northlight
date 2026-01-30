import {
  TabPanelProps as ChakraTabPanelProps,
  TabProps as ChakraTabProps,
  TabsProps as ChakraTabsProps,
} from '@chakra-ui/react'

export interface TabsProps extends ChakraTabsProps {}
export interface TabPanelProps extends ChakraTabPanelProps {}
export interface TabProps extends ChakraTabProps {
  /** Custom color for the indicator element (used with 'piped' variant) */
  elementColor?: string
}
