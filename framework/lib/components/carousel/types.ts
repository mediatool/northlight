import { BoxProps, CenterProps, StackProps } from '@chakra-ui/react'

export interface CarouselArrowProps extends CenterProps {
  direction: 'right' | 'left'
}

export interface CarouselItemProps {
  children: JSX.Element
  isActive: boolean
  itemWidth?: number
  itemHeight?: number
}

export interface CarouselProps extends Omit<BoxProps, 'onChange'> {
  children: JSX.Element[]
  showArrows?: boolean
  showRadio?: boolean
  /** This is the width of the container that each seperate child component is rendered within  */
  itemWidth?: number
  /** This is the height of the container that each seperate child component is rendered within  */
  itemHeight?: number
  spacing?: number
  value?: number
  onChange?: (value: number) => void
  /** Custom styles to apply directly on closes wrapper to children */
  carouselStyles?: StackProps
}
