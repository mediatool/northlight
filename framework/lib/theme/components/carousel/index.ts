import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Carousel: ComponentMultiStyleConfig = {
  parts: [ 'container', 'arrow', 'radio' ],
  baseStyle: () => ({
    container: {
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      width: 'full',
      height: 'full',
    },
    radio: {
      position: 'absolute',
      bottom: '1',
      left: '50%',
      transform: 'translateX(-50%)',
      overflowX: 'scroll',
      maxWidth: '90%',
      padding: '2',
    },
    arrow: {
      position: 'absolute',
      bottom: '0',
      height: '100%',
      cursor: 'pointer',
    },
  }),
}
