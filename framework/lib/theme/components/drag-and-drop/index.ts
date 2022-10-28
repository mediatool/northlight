import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { color as colorToken, coreSizing } from '@mediatool/tokens'
import { merge } from 'ramda'

export const DragAndDrop: ComponentMultiStyleConfig = {
  parts: [ 'dropZone' ],
  baseStyle: ({ sx }) => ({
    dropZone: merge({
      border: `2px dashed ${colorToken.text.default}`,
      padding: coreSizing['4'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: coreSizing['4'],
      justifyContent: 'center',
      textAlign: 'center',
      minH: coreSizing['56'],
      minW: coreSizing['56'],
      bgColor: colorToken.background.button.default,
      _hover: {
        bgColor: colorToken.background.button['default-hover'],
      },
    }, sx),
  }),
}
