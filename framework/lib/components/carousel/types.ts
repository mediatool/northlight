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
  /** Whether to show default navigational arrows on sides */
  showArrows?: boolean
  /** Whether to show default navigational radio button on bottom  */
  showRadio?: boolean
  /** This is the width of the container that each seperate child component is rendered within  */
  itemWidth?: number
  /** This is the height of the container that each seperate child component is rendered within  */
  itemHeight?: number
  spacing?: number
  /** A number, representing the index of the number
   * that is currently centered/focused in the carousel */
  value?: number
  /** callback function that passes the current centered item in the carousel */
  onChange?: (value: number) => void
  /** Custom styles to apply directly on closes wrapper to children */
  carouselStyles?: StackProps
}
