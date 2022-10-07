import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderRadius, color, coreSizing, palette, sizing } from '@mediatool/tokens'

export const Avatar: ComponentMultiStyleConfig = {
  parts: [ 'container', 'text', 'badge', 'icon' ],
  sizes: {
    '2xs': {
      container: {
        width: sizing.avatar['2xs'],
        height: sizing.avatar['2xs'],
      },
      text: {
        lineHeight: sizing.avatar['2xs'],
      },
    },
    xs: {
      container: {
        width: sizing.avatar.xs,
        height: sizing.avatar.xs,
      },
      text: {
        lineHeight: sizing.avatar.xs,
      },
    },
    sm: {
      container: {
        width: sizing.avatar.sm,
        height: sizing.avatar.sm,
      },
      text: {
        lineHeight: sizing.avatar.sm,
      },
      icon: {
        boxSize: sizing.avatar.sm,
      },
    },
    md: {
      container: {
        width: sizing.avatar.md,
        height: sizing.avatar.md,
      },
      text: {
        lineHeight: sizing.avatar.md,
      },
      icon: {
        boxSize: sizing.avatar.md,
      },
    },
    lg: {
      container: {
        width: sizing.avatar.lg,
        height: sizing.avatar.lg,
      },
      text: {
        lineHeight: sizing.avatar.lg,
      },
      icon: {
        boxSize: sizing.avatar.lg,
      },
    },
    xl: {
      container: {
        width: sizing.avatar.xl,
        height: sizing.avatar.xl,
      },
      text: {
        lineHeight: sizing.avatar.xl,
      },
    },
    '2xl': {
      container: {
        width: sizing.avatar['2xl'],
        height: sizing.avatar['2xl'],
      },
      text: {
        lineHeight: sizing.avatar['2xl'],
      },
    },

  },
  baseStyle: ({ image }) => ({
    container: {
      bgColor: image ? color.background.avatar.image : color.background.avatar.default,
      color: color.text.inverted,
      display: 'grid',
      placeItems: 'center',
      objectFit: 'cover',
      position: 'relative',
    },
    userImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    badge: {
      position: 'absolute',
      bottom: `-${coreSizing['1']}`,
      right: `-${coreSizing['1']}`,
      minWidth: coreSizing['5'],
      height: coreSizing['5'],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 'xs',
      fontWeight: 'semibold',
      padding: coreSizing['0a'],
      bgColor: palette.red['500'],
      color: color.text.inverted,
      borderRadius: borderRadius.avatar.square,
      border: 'none',
    },

  }),
  variants: {
    square: {
      container: {
        borderRadius: borderRadius.avatar.square,
        '> img': {
          borderRadius: borderRadius.avatar.square,
        },
      },
      badge: {
        borderRadius: borderRadius.avatar.square,
      },
    },
    rounded: {
      container: {
        borderRadius: borderRadius.avatar.rounded,
        '> img': {
          borderRadius: borderRadius.avatar.rounded,
        },
      },
      badge: {
        borderRadius: borderRadius.avatar.rounded,
      },
    },
  },
}
