import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const NumVal: ComponentSingleStyleConfig = {
  baseStyle: ({ theme: { sizes: sizing }, sx }) =>
    merge(
      {
        color: 'inherit',
        width: '100%',
        maxWidth: '100%',
        marginBottom: sizing[0],
        marginInlineStart: sizing[0],
        marginEnd: sizing[0],
        marginInlineEnd: sizing[0],
      },
      sx
    ),
  sizes: {
    '2xs': ({ theme, sx }) => {
      const { tinyMono } = theme.typography.numVal
      return merge(
        {
          fontFamily: tinyMono.fontFamily,
          fontWeight: tinyMono.fontWeight,
          lineHeight: tinyMono.lineHeight,
          fontSize: tinyMono.fontSize,
          letterSpacing: tinyMono.letterSpacing,
          textTransform: tinyMono.textCase,
          textDecoration: tinyMono.textDecoration,
        },
        sx
      )
    },
    xs: ({ theme, sx }) => {
      const { xsMono } = theme.typography.numVal
      return merge(
        {
          fontFamily: xsMono.fontFamily,
          fontWeight: xsMono.fontWeight,
          lineHeight: xsMono.lineHeight,
          fontSize: xsMono.fontSize,
          letterSpacing: xsMono.letterSpacing,
          textTransform: xsMono.textCase,
          textDecoration: xsMono.textDecoration,
        },
        sx
      )
    },
    sm: ({ theme, sx }) => {
      const { smMono } = theme.typography.numVal
      return merge(
        {
          fontFamily: smMono.fontFamily,
          fontWeight: smMono.fontWeight,
          lineHeight: smMono.lineHeight,
          fontSize: smMono.fontSize,
          letterSpacing: smMono.letterSpacing,
          textTransform: smMono.textCase,
          textDecoration: smMono.textDecoration,
        },
        sx
      )
    },
    md: ({ theme, sx }) => {
      const { mdMono } = theme.typography.numVal
      return merge(
        {
          fontFamily: mdMono.fontFamily,
          fontWeight: mdMono.fontWeight,
          lineHeight: mdMono.lineHeight,
          fontSize: mdMono.fontSize,
          letterSpacing: mdMono.letterSpacing,
          textTransform: mdMono.textCase,
          textDecoration: mdMono.textDecoration,
        },
        sx
      )
    },
    lg: ({ theme, sx }) => {
      const { lgMono } = theme.typography.numVal
      return merge(
        {
          fontFamily: lgMono.fontFamily,
          fontWeight: lgMono.fontWeight,
          lineHeight: lgMono.lineHeight,
          fontSize: lgMono.fontSize,
          letterSpacing: lgMono.letterSpacing,
          textTransform: lgMono.textCase,
          textDecoration: lgMono.textDecoration,
        },
        sx
      )
    },
  },
}
