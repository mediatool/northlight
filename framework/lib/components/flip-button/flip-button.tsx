import React, { useContext, useRef } from 'react'
import { CheckSolid } from '@mediatool/icons'
import { useCheckboxGroupItem } from '@react-aria/checkbox'
import {
  SlideFade,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { useRadio } from '@react-aria/radio'
import { useFocusRing } from '@react-aria/focus'
import { merge } from 'ramda'
import { CheckboxGroupState } from '@react-stately/checkbox'
import { RadioGroupState } from '@react-stately/radio'
import { FlipButtonContext } from './utils'
import { HStack } from '../stack'
import { Icon } from '../icon'
import { Text } from '../text'
import { FlipButtonProps } from './types'

export const FlipButton = (props: FlipButtonProps) => {
  const {
    children,
    size,
    variant,
    isMulti,
    value,
    isDisabled = false,
    icon,
  } = props
  const state = useContext(FlipButtonContext)
  const ref = useRef(null)
  const { inputProps } = isMulti
    ? useCheckboxGroupItem(props, state as CheckboxGroupState, ref)
    : useRadio(props, state as RadioGroupState, ref)

  const { button, buttonIcon } = useMultiStyleConfig('FlipButton', { size, variant })
  const { focusProps, isFocusVisible } = useFocusRing()
  const focusStyles = {
    outline: 'none',
    ring: '2px',
    ringColor: 'border.wcag',
    ringOffset: '1px',
  }

  const isSelected = isMulti
    ? (state as CheckboxGroupState).isSelected(value)
    : (state as RadioGroupState).selectedValue === value

  return (
    <HStack
      spacing={ isSelected || icon ? 2 : 0 }
      sx={ merge(button, isFocusVisible ? focusStyles : {}) }
      aria-checked={ isSelected }
      aria-disabled={ isDisabled }
      as="label"
    >
      <input
        { ...inputProps }
        ref={ ref }
        { ...focusProps }
        aria-label={ isMulti ? 'Checkbox-input' : 'Radio-input' }
        style={ { opacity: '0', width: '0' } }
      />
      { icon
        ? (
          <Icon as={ icon || CheckSolid } sx={ buttonIcon } />
        ) : isSelected && (
          <SlideFade in={ isSelected }>
            <Icon as={ icon || CheckSolid } sx={ buttonIcon } />
          </SlideFade>
        ) }
      <Text textAlign="center">{ children }</Text>
    </HStack>
  )
}
