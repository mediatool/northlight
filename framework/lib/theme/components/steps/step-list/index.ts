import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const StepList: ComponentSingleStyleConfig = {
  baseStyle: ({ theme: { sizes: sizing }, tabs }) => ({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: `repeat(${tabs}, minmax(${sizing[32]}, 1fr))`,
    gridTemplateRows: '1fr',
    overflowX: 'auto',
    borderBottom: 'none',
    paddingBottom: sizing[2],
  }),
}
