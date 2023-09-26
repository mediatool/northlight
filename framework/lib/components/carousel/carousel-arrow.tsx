import React from 'react'
import { ChevronLeftSolid, ChevronRightSolid } from '@northlight/icons'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Center } from '../center'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { CarouselArrowProps } from './types.ts'

export const CarouselArrow = ({
  onClick,
  direction,
  ...rest
}: CarouselArrowProps) => {
  const { arrow } = useMultiStyleConfig('Carousel', {})

  return (
    <Center
      sx={ arrow }
      onClick={ onClick }
      { ...rest }
    >
      <IconButton aria-label={ `move carousel to ${direction}` } variant="ghost" size="lg">
        <Icon as={ direction === 'right' ? ChevronRightSolid : ChevronLeftSolid } />
      </IconButton>
    </Center>
  )
}
