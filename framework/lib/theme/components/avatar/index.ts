import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { getContrastColor } from '../../../utils'
import { getAvatarBgColor } from './get-avatar-bg-color'

export const Avatar: ComponentMultiStyleConfig = {
  parts: [ 'container', 'text', 'badge', 'icon' ],
  sizes: {
    '2xs': ({ theme: { sizes: sizing } }) => ({
      container: {
        width: sizing.avatar['2xs'],
        height: sizing.avatar['2xs'],
      },
      text: {
        lineHeight: sizing.avatar['2xs'],
        fontSize: '3xs',
      },
    }),
    xs: ({ theme: { sizes: sizing } }) => ({
      container: {
        width: sizing.avatar.xs,
        height: sizing.avatar.xs,
      },
      text: {
        lineHeight: sizing.avatar.xs,
        fontSize: 'xs',
      },
    }),
    sm: ({ theme: { sizes: sizing } }) => ({
      container: {
        width: sizing.avatar.sm,
        height: sizing.avatar.sm,
      },
      text: {
        lineHeight: sizing.avatar.sm,
        fontSize: 'sm',
      },
      icon: {
        boxSize: sizing.avatar.sm,
      },
    }),
    md: ({ theme: { sizes: sizing } }) => ({
      container: {
        width: sizing.avatar.md,
        height: sizing.avatar.md,
      },
      text: {
        lineHeight: sizing.avatar.md,
        fontSize: 'md',
      },
      icon: {
        boxSize: sizing.avatar.md,
      },
    }),
    lg: ({ theme: { sizes: sizing } }) => ({
      container: {
        width: sizing.avatar.lg,
        height: sizing.avatar.lg,
      },
      text: {
        lineHeight: sizing.avatar.lg,
        fontSize: 'lg',
      },
      icon: {
        boxSize: sizing.avatar.lg,
      },
    }),
    xl: ({ theme: { sizes: sizing } }) => ({
      container: {
        width: sizing.avatar.xl,
        height: sizing.avatar.xl,
      },
      text: {
        lineHeight: sizing.avatar.xl,
        fontSize: '2xl',
      },
    }),
    '2xl': ({ theme: { sizes: sizing } }) => ({
      container: {
        width: sizing.avatar['2xl'],
        height: sizing.avatar['2xl'],
      },
      text: {
        lineHeight: sizing.avatar['2xl'],
        fontSize: '4xl',
      },
    }),

  },
  baseStyle: ({ theme: {
    colors: color,
    sizes: sizing,
    radii: borderRadius,
  }, image, name }) => {
    const avatarBgColor = getAvatarBgColor(image, name, color)

    return {
      container: {
        bgColor: avatarBgColor,
        color: getContrastColor(avatarBgColor),
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
        bottom: `-${sizing['1']}`,
        right: `-${sizing['1']}`,
        minWidth: sizing['5'],
        height: sizing['5'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 'xs',
        fontWeight: 'semibold',
        padding: sizing['0a'],
        bgColor: color.red['500'],
        color: color.text.inverted,
        borderRadius: borderRadius.avatar.square,
        border: 'none',
      },

    }
  },
  variants: {
    square: ({ theme: { radii: borderRadius } }) => ({
      container: {
        aspectRatio: '1 / 1',
        borderRadius: borderRadius.avatar.square,
        '> img': {
          borderRadius: borderRadius.avatar.square,
          aspectRatio: '1 / 1',
        },
      },
      badge: {
        borderRadius: borderRadius.avatar.square,
      },
    }),
    rounded: ({ theme: { radii: borderRadius } }) => ({
      container: {
        aspectRatio: '1 / 1',
        borderRadius: borderRadius.avatar.rounded,
        '> img': {
          borderRadius: borderRadius.avatar.rounded,
          aspectRatio: '1 / 1',
        },
      },
      badge: {
        borderRadius: borderRadius.avatar.rounded,
      },
    }),
  },
}
