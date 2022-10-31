import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { coreSizing, palette } from '@mediatool/tokens'
import { merge } from 'ramda'

export const DragAndDrop: ComponentMultiStyleConfig = {
  parts: [ 'dropZone' ],
  baseStyle: ({ sx }) => ({
    dropZone: merge({
      border: `2px dashed ${palette.mono.black}`,
      padding: coreSizing['4'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: coreSizing['4'],
      justifyContent: 'center',
      textAlign: 'center',
      minH: coreSizing['56'],
      minW: coreSizing['56'],
      bgColor: palette.blue['50'],
      _hover: {
        bgColor: palette.blue['100'],
      },
    }, sx),
  }),
}
