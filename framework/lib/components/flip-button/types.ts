import React, { ComponentType, InputHTMLAttributes } from 'react'
import { StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'
import { CheckboxGroupState } from '@react-stately/checkbox'
import { RadioGroupState } from '@react-stately/radio'
import { CSSObject } from '@emotion/react'

type FlipButtonSize = 'xs' | 'sm' | 'md' | 'lg'
type FlipButtonVariant = 'default' | 'brand'

type StyleType = {
  opacity: '0'
  width: '0'
  height: '0'
}

type InputPropsType = InputHTMLAttributes<HTMLInputElement>
type FocusPropsType = React.DOMAttributes<Element>

type UnionToIntersection<U> = (
  U extends any
    ? (k: U) => void
    : never
) extends (k: infer I) => void
  ? I
  : never

type TupleTypes<T> = {
  [P in keyof T]: T[P];
} extends {
  [key: number]: infer V
} ? V : never

type MergedFocusAndInputProps = UnionToIntersection<TupleTypes<[InputPropsType, FocusPropsType]>>

export interface CustomFlipButtonPropsType
  extends MergedFocusAndInputProps {
  ref: React.MutableRefObject<null>
  style: StyleType
  'aria-label': string
}

type FocusRingType = {
  outline?: string
  ring?: string
  ringColor?: string
  ringOffset?: string
}

export type CustomContainerPropsType = {
  'aria-checked': boolean
  'aria-disabled': boolean
  sx: FocusRingType
  as: 'label'
  cursor: 'pointer'
}
export interface CustomFlipButtonProps {
  state: CheckboxGroupState | RadioGroupState | null
  flipButtonProps: CustomFlipButtonPropsType
  containerProps: CustomContainerPropsType
  isFocused: boolean
  isSelected: boolean
  isDisabled: boolean
  isMulti: boolean
  focusRing: FocusRingType
  label?: string
  value: string
}
export interface FlipButtonProps {
  size?: FlipButtonSize
  variant?: FlipButtonVariant
  isMulti?: boolean
  isDisabled?: boolean
  icon?: ComponentType<any>
  value: string
  label?: string
  children: ((props: CustomFlipButtonProps) => JSX.Element) | string
}

export interface FlipButtonGroupProps
  extends Omit<FlipButtonProps, 'value' | 'children' | 'label'> {
  onChange?: (val: string | string[]) => void
  direction?: StackDirection
  children?: React.ReactNode[] | React.ReactNode
  name?: string
  value?: string | string[]
  /** This enables passing styles directly to the div closes to the flip buttons */
  sx?: CSSObject
}

export interface FlipButtonGroupFieldProps extends FlipButtonGroupProps {
  name: string
  label: string
  isRequired?: boolean
  validate?: RegisterOptions
  value?: string
}
