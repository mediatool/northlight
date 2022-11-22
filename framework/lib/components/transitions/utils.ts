import { useEffect, useState } from 'react'
import { getChildrenWithProps } from '../../utils'
import {
  ChildrenType,
  DurationType,
  OffsetType,
  TransitionDirection,
} from './types'
import { defaultFadeDelay, defaultOffset } from './constants'

const unFocusStyles = { tabIndex: '-1' }
export const getChildrenWithFocus = (
  children: ChildrenType,
  disableFocus: boolean,
  show: boolean
) =>
  (show
    ? children
    : disableFocus
      ? getChildrenWithProps(children, unFocusStyles)
      : children)

export const getDuration = (
  enterDuration: DurationType,
  exitDuration: DurationType,
  duration: DurationType
) => {
  const inDuration = enterDuration || duration || defaultFadeDelay
  const outDuration = exitDuration || duration || defaultFadeDelay
  const transition = {
    enter: {
      duration: inDuration / 1000,
    },
    exit: {
      duration: outDuration / 1000,
    },
  }
  return transition
}

export const getOffsets = (
  direction: TransitionDirection,
  offset: OffsetType,
  offsetX: OffsetType,
  offsetY: OffsetType
) => {
  if (offsetX || offsetY) {
    return { offsetX, offsetY }
  }
  if (direction) {
    const delta = offset || defaultOffset
    switch (direction) {
      case 'right':
        return { offsetX: delta, offsetY: 0 }
      case 'left':
        return { offsetX: -delta, offsetY: 0 }
      case 'top':
        return { offsetX: 0, offsetY: -delta }
      case 'bottom':
        return { offsetX: 0, offsetY: delta }
      default:
        break
    }
  }
  return { offsetX: defaultOffset, offsetY: defaultOffset }
}

export const useDelay = (
  show: boolean,
  enterDelay: number,
  exitDelay: number
) => {
  const [ showWithDelay, setShowWithDelay ] = useState(false)
  useEffect(() => {
    const ref = setTimeout(
      () => setShowWithDelay(show),
      show ? enterDelay : exitDelay
    )
    return () => clearTimeout(ref)
  }, [ show ])
  return showWithDelay
}

export const useHiddenDisplay = (
  anchor: boolean = false,
  exitDelay: number = 0,
  exitDuration: DurationType = 0,
  duration: DurationType = 0
) => {
  const [ hidden, setHidden ] = useState(anchor)

  useEffect(() => {
    const ref = setTimeout(() => {
      setHidden(anchor)
    }, exitDelay + (exitDuration || duration || 0))
    return () => clearTimeout(ref)
  }, [ anchor ])

  return hidden
}
