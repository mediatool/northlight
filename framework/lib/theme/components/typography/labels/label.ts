import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { color, typography } from '@mediatool/tokens'
import { merge } from 'ramda'

const {
  smLabel,
  tinyLabel,
  mdLabel,
  lgLabel,
  xsLabel,
} = typography.labels

export const Label: ComponentSingleStyleConfig = {
  baseStyle: ({ sx }) => merge({
    color: color.text.default,
  }, sx),
  sizes: {
    '2xs': ({ sx }) => merge({
      fontFamily: tinyLabel.fontFamily,
      fontWeight: tinyLabel.fontWeight,
      lineHeight: tinyLabel.lineHeight,
      fontSize: tinyLabel.fontSize,
      letterSpacing: tinyLabel.letterSpacing,
      textTransform: tinyLabel.textCase,
    }, sx),
    xs: ({ sx }) => merge({
      fontFamily: xsLabel.fontFamily,
      fontWeight: xsLabel.fontWeight,
      lineHeight: xsLabel.lineHeight,
      fontSize: xsLabel.fontSize,
      letterSpacing: xsLabel.letterSpacing,
      textTransform: xsLabel.textCase,
    }, sx),
    sm: ({ sx }) => merge({
      fontFamily: smLabel.fontFamily,
      fontWeight: smLabel.fontWeight,
      lineHeight: smLabel.lineHeight,
      fontSize: smLabel.fontSize,
      letterSpacing: smLabel.letterSpacing,
      textTransform: smLabel.textCase,
    }, sx),
    md: ({ sx }) => merge({
      fontFamily: mdLabel.fontFamily,
      fontWeight: mdLabel.fontWeight,
      lineHeight: mdLabel.lineHeight,
      fontSize: mdLabel.fontSize,
      letterSpacing: mdLabel.letterSpacing,
      textTransform: mdLabel.textCase,
    }, sx),
    lg: ({ sx }) => merge({
      fontFamily: lgLabel.fontFamily,
      fontWeight: lgLabel.fontWeight,
      lineHeight: lgLabel.lineHeight,
      fontSize: lgLabel.fontSize,
      letterSpacing: lgLabel.letterSpacing,
      textTransform: lgLabel.textCase,
    }, sx),
  },
}
