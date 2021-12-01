import React from 'react'
import {
  CSSObject,
  TabProps,
  chakra,
  useStyles,
  useTab,
} from '@chakra-ui/react'
import { kindColorsMap } from './kind-styles-map'
import { TabKind } from './types'

interface Props extends TabProps {
  kind?: TabKind
}

const StyledTab = chakra('button')

export const Tab = React.forwardRef((props: Props, ref: any) => {
  const { kind = 'base', ...rest } = props
  const { tab } = useStyles()
  const tabProps = useTab({ ...rest, ref })

  const tabKindColorsTuple = kindColorsMap[kind]
  const [ baseColor, selectedColor ] = tabKindColorsTuple

  /*
    Logging tab in the console shows _selected, there might be something fishy with
    Chakra types here.
  */
  // @ts-ignore
  const { _selected: selectedStyles } = tab

  const css: CSSObject = {
    ...tab,
    color: baseColor,
    _selected: {
      ...selectedStyles,
      color: selectedColor,
    },
  }

  return (
    <StyledTab __css={ css } { ...tabProps }>
      { tabProps.children }
    </StyledTab>
  )
})
