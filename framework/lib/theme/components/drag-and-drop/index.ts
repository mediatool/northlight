import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const DragAndDrop: ComponentMultiStyleConfig = {
  parts: [ 'dropZone' ],
  baseStyle: ({ theme: { colors: palette, space: spacing, sizes: sizing }, sx }) => ({
    dropZone: merge({
      border: `2px dashed ${palette.mono.black}`,
      padding: spacing['4'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: spacing['4'],
      justifyContent: 'center',
      textAlign: 'center',
      minH: sizing['56'],
      minW: sizing['56'],
      bgColor: palette.blue['50'],
      _hover: {
        bgColor: palette.blue['100'],
      },
    }, sx),
  }),
}
