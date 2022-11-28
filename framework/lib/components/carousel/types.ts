import { BoxProps, CenterProps } from '@chakra-ui/react'

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
  itemWidth?: number
  itemHeight?: number
  spacing?: number
  value?: number
  onChange?: (value: number) => void

}
