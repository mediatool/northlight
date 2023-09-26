import React, { Children, cloneElement, isValidElement } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { omit } from 'ramda'
import { Stack } from '../stack'
import { FlipButtonGroupProps } from './types.ts'
import { FlipButtonContext, useFlipButton } from './utils.ts'

/**
 * Provides context to FlipButton
 * @see FlipButton
 * @see {@link https://northlight.dev/reference/flip-button-group}
 */
export const FlipButtonGroup = (props: FlipButtonGroupProps) => {
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

  const { state, flipButtonGroupProps } = useFlipButton(props, isMulti)

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
