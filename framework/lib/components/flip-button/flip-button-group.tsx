import React, { Children, DOMAttributes, cloneElement, isValidElement } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { omit } from 'ramda'
import { CheckboxGroupState } from '@react-stately/checkbox'
import { RadioGroupState } from '@react-stately/radio'
import { Stack } from '../stack'
import { FlipButtonGroupProps } from './types'
import { FlipButtonContext, useMultiFlipButton, useSingleFlipButton } from './utils'

type FlipButtonGroupViewProps = {
  props: FlipButtonGroupProps
  state: CheckboxGroupState | RadioGroupState
  flipButtonGroupProps: DOMAttributes<Element>
}

const FlipButtonGroupView = ({ props, state, flipButtonGroupProps }: FlipButtonGroupViewProps) => {
  const {
    isMulti = false,
    name,
    children,
    direction = 'row',
    isDisabled = false,
    iconPlacement = 'left',
    size,
    variant,
    icon,
    sx = {},
    ...rest
  } = props

  const numberOfButtons = Children.count(children)

  const childrenWithProps = (Children.toArray(children)).map((child: React.ReactNode) =>
    (isValidElement(child)
      ? cloneElement(child, {
        key: child.props.value,
        isMulti,
        variant,
        isDisabled,
        iconPlacement,
        icon,
        size,
        ...child.props,
      })
      : child)
  )

  const { container } = useMultiStyleConfig('FlipButton', {
    size,
    variant,
    numberOfButtons,
    sx,
  })

  const restWithoutOnChange = omit([ 'onChange' ], rest)

  return (
    <Stack
      { ...flipButtonGroupProps }
      direction={ direction }
      id={ name }
      spacing={ 0 }
      sx={ container }
      { ...restWithoutOnChange }
    >
      <FlipButtonContext.Provider value={ state }>
        { childrenWithProps }
      </FlipButtonContext.Provider>
    </Stack>
  )
}

const MultiFlipButtonGroup = (props: FlipButtonGroupProps) => {
  const { state, flipButtonGroupProps } = useMultiFlipButton(props)
  return (
    <FlipButtonGroupView
      props={ props }
      state={ state }
      flipButtonGroupProps={ flipButtonGroupProps }
    />
  )
}

const SingleFlipButtonGroup = (props: FlipButtonGroupProps) => {
  const { state, flipButtonGroupProps } = useSingleFlipButton(props)
  return (
    <FlipButtonGroupView
      props={ props }
      state={ state }
      flipButtonGroupProps={ flipButtonGroupProps }
    />
  )
}

/**
 * Provides context to FlipButton
 * @see FlipButton
 * @see {@link https://northlight.dev/reference/flip-button-group}
 */
export const FlipButtonGroup = (props: FlipButtonGroupProps) => (
  props.isMulti
    ? <MultiFlipButtonGroup { ...props } />
    : <SingleFlipButtonGroup { ...props } />
)
