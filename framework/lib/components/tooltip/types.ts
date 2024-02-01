import { TooltipProps as ChakraTooltipProps } from '@chakra-ui/react'

export type TooltipVariants = 'success' | 'warning' | 'error' | 'info' | 'danger' | 'ai' | 'default' | 'ghost'

export interface OurTooltipProps extends ChakraTooltipProps {
  variant?: TooltipVariants
  description?: React.ReactNode
  hasIcon?: boolean
}
