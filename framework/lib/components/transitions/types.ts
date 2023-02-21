import {
  CollapseProps as ChakraCollapseProps,
  FadeProps as ChakraFadeProps,
  ScaleFadeProps as ChakraScaleFadeProps,
  SlideFadeProps as ChakraSlideFadeProps,
  SlideProps as ChakraSlideProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

export type DurationType = number | null
export type OffsetType = number | string
export type ChildrenType = React.ReactNode | React.ReactNode[]
export type TransitionDirection = 'right' | 'bottom' | 'left' | 'top' | null

export interface FadeProps extends Omit<ChakraFadeProps, 'children' > {
  children: ReactNode | ReactNode[]
  duration?: DurationType
  enterDuration?: DurationType
  exitDuration?: DurationType
  disableFocus?: boolean
  hideDisplay?: boolean
  enterDelay?: number
  exitDelay?: number
  onTransitionComplete?: (isHidden: boolean) => void
}

export interface ScaleFadeProps extends FadeProps, Omit<ChakraScaleFadeProps, 'delay' | 'children'> {}

export interface SlideProps extends FadeProps, Omit<ChakraSlideProps, 'delay' | 'children'> {}
export interface SlideFadeProps extends FadeProps, Omit<ChakraSlideFadeProps, 'delay' | 'children'> {
  direction?: TransitionDirection
  offset?: number
}

export interface CollapseProps extends FadeProps, Omit<ChakraCollapseProps, 'delay' | 'children'> {}
