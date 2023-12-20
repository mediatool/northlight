import { BoxProps } from '@chakra-ui/react'
import { PinSize, PinVariant } from '../pin-input/types'

export interface StatusPinProps extends BoxProps {
  size?: PinSize
  variant: PinVariant
}
