import React from 'react'
import { motion } from 'framer-motion'
import { Center } from '../center'
import { carouselItemWidth } from './constants'
import { CarouselItemProps } from './types'

const variants = {
  active: { scale: 1.15, opacity: 1 },
  inActive: { scale: 0.95, opacity: 0.7 },
}

export const CarouselItem = ({
  children,
  isActive = false,
  itemWidth = carouselItemWidth,
  itemHeight = carouselItemWidth,
}: CarouselItemProps) => (
  <motion.div animate={ isActive ? 'active' : 'inActive' } variants={ variants }>
    <Center minW={ `${itemWidth}px` } h={ `${itemHeight}px ` }>
      { children }
    </Center>
  </motion.div>
)
