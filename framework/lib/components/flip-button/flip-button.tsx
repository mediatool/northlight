import React, { useContext, useRef } from 'react'
import { CheckSolid } from '@northlight/icons'
import { useCheckboxGroupItem } from '@react-aria/checkbox'
import { SlideFade, useMultiStyleConfig } from '@chakra-ui/react'
import { useRadio } from '@react-aria/radio'
import { useFocusRing } from '@react-aria/focus'
import { mergeAll, omit } from 'ramda'
import { CheckboxGroupState } from '@react-stately/checkbox'
import { RadioGroupState } from '@react-stately/radio'
import { mergeProps } from '@react-aria/utils'
import { FlipButtonContext } from './utils'
import { HStack } from '../stack'
import { Icon } from '../icon'
import { Text } from '../text'
import { CustomContainerPropsType, CustomFlipButtonPropsType, FlipButtonProps } from './types'

/**
 * Meant to act as a middleman to turn any component into
 * either a radio or checkbox input
 * where the user can choose between multiple options
 * @see CheckboxGroup
 * @see RadioGroup
 * @see FlipButtonGroup
 * @see {@link https://northlight.dev/reference/flip-button}
 *
 * @example (Example)
 * ### It must always be wrapped in a group
 * (?
 * <FlipButton />
 * ?)
 * Or it will throw an error
 *
 *
 * @example (Example)
 * ### As a radio button group
 * (?
  *<FlipButtonGroup isMulti={ false } size="sm">
  <FlipButton value="one" icon={AgencyDuo}>One</FlipButton>
  <FlipButton value="two" icon={StagesDuo}>Two</FlipButton>
  <FlipButton value="three" icon={Flag04Duo}>Three</FlipButton>
</FlipButtonGroup>
 * ?)
 *
 * @example (Example)
 * ### As a checkbox button group
 * (?
  *<FlipButtonGroup isMulti={ true } size="sm">
  <FlipButton value="one" icon={TagsStackDuo}>One</FlipButton>
  <FlipButton value="two" icon={Image03Duo}>Two</FlipButton>
  <FlipButton value="three" icon={TagDuo }>Three</FlipButton>
</FlipButtonGroup>
 * ?)
 *
 * @example (Example)
 * ###Custom Flip Button
 * (?
 * +
 * const customElement = ({
  flipButtonProps,
  containerProps,
  isSelected,
  label,
  value,
}) => (
  <HStack
    { ...containerProps }
    spacing="4"
    _checked={ { bgColor: 'blue.500', color: 'text.inverted' } }
    borderRadius="md"
    p="2"
  >
    <input { ...flipButtonProps } />
    <Icon as={ UsersDuo } />
    <Stack spacing="0">
      <Text>{ label }</Text>
      <Text color={ isSelected ? 'text.inverted' : 'gray.200' }>
        { value === 'public'
          ? 'Everyone can view and edit the plan'
          : 'The plan is only visible to you'
        }
      </Text>
    </Stack>
  </HStack>
)

const MyComponent = () => (
<FlipButtonGroup direction="column" sx={{bgColor: 'transparent'}}>
  <FlipButton value="public" label="Public">
    { customElement }
  </FlipButton>
  <FlipButton value="private" label="Private">
    { customElement }
  </FlipButton>
</FlipButtonGroup>

)
render(<MyComponent/>)
 *
 * ?)
 *
 */
export const FlipButton = (props: FlipButtonProps) => {
  const {
    children,
    size,
    variant,
    isMulti,
    isDisabled = false,
    icon,
    value,
    iconPlacement = 'left',
    ...rest
  } = props
  const state = useContext(FlipButtonContext)
  const ref = useRef(null)

  const propsWithoutChildren = omit([ 'children' ], { ...props, 'aria-label': `${isMulti ? 'Checkbox' : 'Radio'}-input for ${value}` })
  const { inputProps } = isMulti
    ? useCheckboxGroupItem(propsWithoutChildren, state as CheckboxGroupState, ref)
    : useRadio(propsWithoutChildren, state as RadioGroupState, ref)

  const { button, buttonIcon } = useMultiStyleConfig('FlipButton', { size, variant })
  const { focusProps, isFocusVisible: isFocused } = useFocusRing()
  const focusStyles = {
    outline: 'none',
    ring: '2px',
    ringColor: 'border.wcag',
    ringOffset: '1px',
  }
  const focusRing = isFocused ? focusStyles : {}

  const isSelected = isMulti
    ? (state as CheckboxGroupState).isSelected(value)
    : (state as RadioGroupState).selectedValue === value

  const flipButtonProps: CustomFlipButtonPropsType = {
    ...mergeProps(inputProps, focusProps),
    ref,
    style: { opacity: '0', width: '0', height: '0' },
    'aria-label': isMulti ? 'Checkbox-input' : 'Radio-input',
  }

  const containerProps: CustomContainerPropsType = {
    'aria-checked': isSelected,
    'aria-disabled': isDisabled,
    sx: focusRing,
    as: 'label',
    cursor: 'pointer',
  }

  return typeof children === 'function'
    ? children({
      state,
      containerProps,
      flipButtonProps,
      isSelected,
      value,
      ...rest,
    })
    : (
      <HStack
        spacing={ (isSelected && iconPlacement !== 'none') || icon ? 2 : 0 }
        sx={ mergeAll([ button, isFocused ? focusStyles : {}, { flexDirection: iconPlacement === 'left' ? 'row' : 'row-reverse' } ]) }
        aria-checked={ isSelected }
        aria-disabled={ isDisabled }
        as="label"
      >
        <input { ...flipButtonProps } />
        { icon && iconPlacement !== 'none'
          ? (
            <Icon as={ icon || CheckSolid } sx={ buttonIcon } />
          ) : isSelected && iconPlacement !== 'none' && (
            <SlideFade in={ isSelected }>
              <Icon as={ icon || CheckSolid } sx={ buttonIcon } />
            </SlideFade>
          ) }
        <Text textAlign="center">{ children }</Text>
      </HStack>
    )
}
