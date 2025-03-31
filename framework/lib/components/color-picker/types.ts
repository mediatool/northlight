import { IconButtonProps, PopoverProps, StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'

type ColorPickerSize = 'sm' | 'md' | 'lg'

export interface ColorPickerProps
  extends Omit<
  IconButtonProps,
  'onChange' | 'value' | 'aria-label' | 'variant'
  > {
  onChange?: (value: string | null) => void
  /** This are what color options the user can choose */
  colors?: string[]
  /** This are the extended color options  displayed when clicking the down caret */
  expandedColors?: string[]
  clearable?: boolean
  value?: string | null
  size?: ColorPickerSize
  name?: string
  popoverProps?: PopoverProps
  shouldRenderInPortal?: boolean
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

export type ColorPickerFieldProps = ColorPickerProps & {
  name: string
  label: string
  validate?: RegisterOptions
  size?: ColorPickerSize
  isRequired?: boolean
  direction?: StackDirection
}
