import { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { coreSizing } from '@mediatool/tokens'

export const StepList: ComponentSingleStyleConfig = {
  baseStyle: ({ tabs }) => ({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: `repeat(${tabs}, minmax(${coreSizing[32]}, 1fr))`,
    gridTemplateRows: '1fr',
    overflowX: 'auto',
    borderBottom: 'none',
    paddingBottom: coreSizing[2],
  }),
}
