import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { borderRadius, color } from '~/tokens'

export const Alert: ComponentSingleStyleConfig = {
  baseStyle: {
    container: {
      borderRadius: borderRadius.toast.default,
      color: color.text.default,
      paddingEnd: 8,
      width: 'auto',
    },
  },
  variants: {
    success: {
      container: {
        bgColor: color.background.toast.success,
      },
    },
    warning: {
      container: {
        bgColor: color.background.toast.warning,
      },
    },
    info: {
      container: {
        bgColor: color.background.toast.info,
      },
    },
    error: {
      container: {
        bgColor: color.background.toast.error,
        color: color.text.toast.error,
      },
    },
  },
}
