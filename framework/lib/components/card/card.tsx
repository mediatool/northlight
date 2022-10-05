import React, { MutableRefObject } from 'react'
import { BoxProps } from '@chakra-ui/react'
import { Box } from '../box'
import { CardSize } from '../../types'

export interface CardProps extends BoxProps {
  size?: CardSize
  ref?: MutableRefObject<any>
}

export const Card = React.forwardRef(({
  size = 'sm',
  shadow = 'lg',
  rounded = 6,
  ...rest
}: CardProps, ref: any) => (
  <Box
    { ...rest }
    rounded={ rounded }
    shadow={ shadow }
    overflow="hidden"
    ref={ ref }
    w={ (rest.w || rest.width) ?? size }
  />
))
