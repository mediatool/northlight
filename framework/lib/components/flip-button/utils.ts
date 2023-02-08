import { DOMAttributes, createContext } from 'react'
import { RadioGroupProps, RadioGroupState, useRadioGroupState } from '@react-stately/radio'
import { CheckboxGroupProps, CheckboxGroupState, useCheckboxGroupState } from '@react-stately/checkbox'
import { AriaCheckboxGroupProps, useCheckboxGroup } from '@react-aria/checkbox'
import { AriaRadioGroupProps, useRadioGroup } from '@react-aria/radio'
import { FlipButtonGroupProps } from './types'

export const FlipButtonContext = createContext<CheckboxGroupState | RadioGroupState | null>(null)

export const useFlipButtonState = (
  props: FlipButtonGroupProps,
  isMulti: boolean
) => (
  isMulti
    ? useCheckboxGroupState(props as CheckboxGroupProps)
    : useRadioGroupState(props as RadioGroupProps)
)

export const useFlipButtonGroup = (
  props: FlipButtonGroupProps,
  state: CheckboxGroupState | RadioGroupState,
  isMulti: boolean
): DOMAttributes<Element> => {
  const propsWithLabel = {
    ...props,
    'aria-label': `${isMulti ? 'Checkbox' : 'Radio'}-button-group`,
  }

  return (isMulti
    ? useCheckboxGroup(
      propsWithLabel as AriaCheckboxGroupProps,
      state as CheckboxGroupState
    ).groupProps
    : useRadioGroup(
      propsWithLabel as AriaRadioGroupProps,
      state as RadioGroupState
    ).radioGroupProps
  )
}

export const useFlipButton = (props: FlipButtonGroupProps, isMulti: boolean) => {
  const state = useFlipButtonState(props, isMulti)
  const flipButtonGroupProps = useFlipButtonGroup(props, state, isMulti)
  return { state, flipButtonGroupProps }
}
