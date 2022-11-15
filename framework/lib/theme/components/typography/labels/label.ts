import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const Label: ComponentSingleStyleConfig = {
  baseStyle: ({ theme: { colors: color, sizes: sizing }, sx }) => merge({
    color: color.text.default,
    width: '100%',
    maxWidth: '100%',
    marginBottom: sizing[0],
    marginInlineStart: sizing[0],
    marginEnd: sizing[0],
    marginInlineEnd: sizing[0],
  }, sx),
  sizes: {
    '2xs': ({ theme, sx }) => {
      const { tinyLabel } = theme.typography.labels
      return merge({
        fontFamily: tinyLabel.fontFamily,
        fontWeight: tinyLabel.fontWeight,
        lineHeight: tinyLabel.lineHeight,
        fontSize: tinyLabel.fontSize,
        letterSpacing: tinyLabel.letterSpacing,
        textTransform: tinyLabel.textCase,
      }, sx)
    },
    xs: ({ theme, sx }) => {
      const { xsLabel } = theme.typography.labels
      return merge({
        fontFamily: xsLabel.fontFamily,
        fontWeight: xsLabel.fontWeight,
        lineHeight: xsLabel.lineHeight,
        fontSize: xsLabel.fontSize,
        letterSpacing: xsLabel.letterSpacing,
        textTransform: xsLabel.textCase,
      }, sx)
    },
    sm: ({ theme, sx }) => {
      const { smLabel } = theme.typography.labels
      return merge({
        fontFamily: smLabel.fontFamily,
        fontWeight: smLabel.fontWeight,
        lineHeight: smLabel.lineHeight,
        fontSize: smLabel.fontSize,
        letterSpacing: smLabel.letterSpacing,
        textTransform: smLabel.textCase,
      }, sx)
    },
    md: ({ theme, sx }) => {
      const { mdLabel } = theme.typography.labels
      return merge({
        fontFamily: mdLabel.fontFamily,
        fontWeight: mdLabel.fontWeight,
        lineHeight: mdLabel.lineHeight,
        fontSize: mdLabel.fontSize,
        letterSpacing: mdLabel.letterSpacing,
        textTransform: mdLabel.textCase,
      }, sx)
    },
    lg: ({ theme, sx }) => {
      const { lgLabel } = theme.typography.labels
      return merge({
        fontFamily: lgLabel.fontFamily,
        fontWeight: lgLabel.fontWeight,
        lineHeight: lgLabel.lineHeight,
        fontSize: lgLabel.fontSize,
        letterSpacing: lgLabel.letterSpacing,
        textTransform: lgLabel.textCase,
      }, sx)
    },
  },
}
