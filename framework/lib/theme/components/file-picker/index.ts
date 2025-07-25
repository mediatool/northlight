import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { CSSObject, keyframes } from '@emotion/react'
import { merge } from 'ramda'
import { CurrentTheme } from '../../../utils'

const shakeAnimation = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

const thickRing: CSSObject = {
  _focusVisible: {
    outline: 'none',
    ring: '3px',
    ringColor: 'border.wcag',
    ringOffset: '1px',
  },
}

const getBgColor = (currentTheme: CurrentTheme) => {
  switch (currentTheme) {
    case 'webappTheme': return 'blue.50'
    case 'tottTheme': return 'blue.900'
    default: return 'bg.filled'
  }
}

const getInvalidColorStyles = (isInvalid: boolean, isImage = true, currentTheme: CurrentTheme = 'webappTheme') => ({
  borderColor: isInvalid ? 'border.error' : 'border.default',
  bgColor: isInvalid && 'bg.error.default',
  animation: isInvalid && `500ms ${shakeAnimation} ease`,
  _hover: isImage && {
    bgColor: isInvalid ? 'bg.error.default' : getBgColor(currentTheme),
    borderColor: isInvalid ? 'border.error' : 'border.brand.default',
  },
})

const getAiColorStyles = (isInvalid: boolean, isImage = true) => ({
  borderColor: isInvalid ? 'border.error' : 'border.default',
  bgColor: isInvalid && 'bg.error.default',
  animation: isInvalid && `500ms ${shakeAnimation} ease`,
  _hover: isImage && {
    bgColor: isInvalid ? 'bg.error.default' : 'bg.filled',
    borderColor: isInvalid ? 'border.error' : 'border.ai',
  },
})

export const FilePicker: ComponentMultiStyleConfig = {
  parts: [ 'filePicker', 'fileItem', 'multiFilePicker' ],
  baseStyle: ({ theme: { sizes, colors }, hasLoaded, isImage, isInvalid, currentTheme, sx }) => ({
    filePicker: merge({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'full',
      height: '40',
      textAlign: 'center',
      position: 'relative',
      borderWidth: hasLoaded && isImage ? '0' : sizes['0a'],
      borderStyle: 'dashed',
      borderRadius: 'lg',
      ...getInvalidColorStyles(isInvalid, isImage, currentTheme),
      ...thickRing,
    }, sx),
    multiFilePicker: {
      width: 'full',
      maxWidth: 'inherit',
      height: '32',
      position: 'relative',
      borderWidth: sizes['0a'],
      borderStyle: 'dashed',
      borderRadius: 'lg',
      ...getInvalidColorStyles(isInvalid, undefined, currentTheme),
      ...thickRing,
    },
    fileItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingX: '2',
      paddingY: '1',
      borderRadius: sizes['2'],
      textAlign: 'center',
      position: 'relative',
      border: `2px solid ${colors.gray['100']}`,
      minHeight: '20',
    },
  }),
  variants: {
    ai: ({ isInvalid }) => ({
      filePicker: {
        ...getAiColorStyles(isInvalid),
      },
      multiFilePicker: {
        ...getAiColorStyles(isInvalid),
      },
    }),

  },
}
