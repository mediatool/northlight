import { BadgeProps as ChakraBadgeProps, ThemingProps } from '@chakra-ui/react'

type BadgeSize = 'xs' | 'sm' | 'md' | 'lg'
type BadgeVariant = 'solid' | 'outline' | 'subtle' | 'ghost'
type ColorScheme = ThemingProps['colorScheme']

export interface BadgeProps extends Omit<ChakraBadgeProps, 'size' | 'variant' > {
  size?: BadgeSize
  variant?: BadgeVariant
  colorScheme?: ColorScheme
}
