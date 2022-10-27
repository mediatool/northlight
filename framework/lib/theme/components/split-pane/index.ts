import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { palette } from '@mediatool/tokens'

export const SplitPane: ComponentSingleStyleConfig = {
  baseStyle: ({ minL, minR, initialSplit, isOpen }) => ({
    display: 'grid',
    overflow: 'hidden',
    gridTemplateColumns: !isOpen ? '1fr' : `minmax(${minR}%, var(--split-pos, ${initialSplit}%)) auto minmax(${minL}%, 1fr)`,
    alignItems: 'stretch',
    justifyItems: 'stretch',
    height: '100%',
    width: '100%',
  }),
}

export const PaneDivider: ComponentSingleStyleConfig = {
  baseStyle: {
    bgColor: palette.mono.black,
    zIndex: 999,
    cursor: 'col-resize',
    height: '100%',
    width: 1,
    _hover: {
      outlineColor: palette.blue[500],
      outlineWidth: 4,
      outlineStyle: 'solid',
    },
    _active: {
      outlineColor: palette.blue[500],
      outlineWidth: 4,
      outlineStyle: 'solid',
    },
  },
}
