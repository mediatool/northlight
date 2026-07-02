import { DOMAttributes, createContext } from 'react'
import { RadioGroupProps, RadioGroupState, useRadioGroupState } from '@react-stately/radio'
import { CheckboxGroupProps, CheckboxGroupState, useCheckboxGroupState } from '@react-stately/checkbox'
import { AriaCheckboxGroupProps, useCheckboxGroup } from '@react-aria/checkbox'
import { AriaRadioGroupProps, useRadioGroup } from '@react-aria/radio'
import { FlipButtonGroupProps } from './types'

export const FlipButtonContext = createContext<CheckboxGroupState | RadioGroupState | null>(null)

const withGroupLabel = (props: FlipButtonGroupProps, isMulti: boolean) => ({
  ...props,
  'aria-label': `${isMulti ? 'Checkbox' : 'Radio'}-button-group`,
})

// ponytail: split by isMulti at the hook boundary so each react-aria hook is
// called unconditionally; isMulti is fixed per instance, so behavior is identical.
export const useMultiFlipButton = (props: FlipButtonGroupProps) => {
  const state = useCheckboxGroupState(props as CheckboxGroupProps)
  const { groupProps } = useCheckboxGroup(
    withGroupLabel(props, true) as AriaCheckboxGroupProps,
    state
  )
  return { state, flipButtonGroupProps: groupProps as DOMAttributes<Element> }
}

export const useSingleFlipButton = (props: FlipButtonGroupProps) => {
  const state = useRadioGroupState(props as RadioGroupProps)
  const { radioGroupProps } = useRadioGroup(
    withGroupLabel(props, false) as AriaRadioGroupProps,
    state
  )
  return { state, flipButtonGroupProps: radioGroupProps as DOMAttributes<Element> }
}
