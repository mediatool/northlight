import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { merge } from 'ramda'

export const DragAndDrop: ComponentMultiStyleConfig = {
  parts: [ 'dropZone' ],
  baseStyle: ({ sx }) => ({
    dropZone: merge({
      borderWidth: 'sm',
      borderStyle: 'dashed',
      borderColor: 'border.default',
      padding: '4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4',
      justifyContent: 'center',
      textAlign: 'center',
      minH: '56',
      minW: '56',
      bgColor: 'bg.filled',
    }, sx),
  }),
}
