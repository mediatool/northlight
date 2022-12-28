import { ComponentMultiStyleConfig, keyframes } from '@chakra-ui/react'
import { CSSObject } from '@emotion/react'

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

const getInvalidColorStyles = (isInvalid: boolean, isImage: boolean = true) => ({
  borderColor: isInvalid ? 'red.500' : 'gray.300',
  bgColor: isInvalid && 'red.50',
  animation: isInvalid && `500ms ${shakeAnimation} ease`,
  _hover: isImage && {
    bgColor: isInvalid ? 'red.50' : 'blue.50',
    borderColor: isInvalid ? 'red.500' : 'blue.500',
  },
})

export const FilePicker: ComponentMultiStyleConfig = {
  parts: [ 'filePicker', 'fileItem', 'multiFilePicker' ],
  baseStyle: ({ theme: { sizes, colors }, hasLoaded, isImage, isInvalid }) => ({
    filePicker: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44',
      height: '40',
      textAlign: 'center',
      position: 'relative',
      borderWidth: hasLoaded && isImage ? '0' : sizes['0a'],
      borderStyle: 'dashed',
      borderRadius: 'lg',
      ...getInvalidColorStyles(isInvalid, isImage),
      ...thickRing,
    },
    multiFilePicker: {
      width: 'full',
      maxWidth: 'inherit',
      height: '32',
      position: 'relative',
      borderWidth: sizes['0a'],
      borderStyle: 'dashed',
      borderRadius: 'lg',
      ...getInvalidColorStyles(isInvalid),
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
}
