import { IconButtonProps } from '@chakra-ui/react'

type ColorPickerSize = 'sm' | 'md' | 'lg'

export interface ColorPickerProps
  extends Omit<
  IconButtonProps,
  'onChange' | 'value' | 'aria-label' | 'variant'
  > {
  onChange?: (value: string) => void
  colors?: string[]
  expandedColors?: string[]
  value?: string | null
  size?: ColorPickerSize
  name?: string
}

export type ColorButtonProps = {
  color: string
  onClick: () => void
  size?: ColorPickerSize
  selected?: boolean
}

export type ColorsExpandButtonProps = {
  onClick: () => void
  size: ColorPickerSize
  expanded: boolean
}
