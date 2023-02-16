import React, { Children, useEffect, useRef, useState } from 'react'
import {
  always,
  compose,
  dec,
  defaultTo,
  gt,
  identity,
  ifElse,
  inc,
  take,
} from 'ramda'
import { OverflowGroupProps } from './types'
import { getChildrenWithProps } from '../../utils'

const positiveOrZero = ifElse(gt(0), always(0), identity)
const EMPTY_RECT = {
  clientWidht: 0,
  clientHeight: 0,
}

export const OverflowGroup = ({
  children,
  max: initMax = 0,
  childrenProps,
  onChange = identity,
  rect = null,
}: OverflowGroupProps) => {
  const [ max, setMax ] = useState(initMax)
  const isLocked = useRef(false)
  const nbrChildren = Children.count(children)
  const setIsLocked = (val: boolean) => () => {
    isLocked.current = val
  }

  useEffect(() => {
    setMax(initMax)
  }, [ initMax ])

  const rectDependency = defaultTo(EMPTY_RECT, rect) as HTMLElement
  useEffect(setIsLocked(false), [
    rectDependency.clientWidth,
    rectDependency.clientHeight,
  ])

  const updateMax = () => {
    if (!rect) return

    if (
      rect.scrollHeight <= rect.clientHeight &&
      rect.scrollWidth <= rect.clientWidth &&
      max < nbrChildren &&
      !isLocked.current &&
      max < initMax
    ) {
      setMax(inc)
    }

    if (
      rect.scrollHeight > rect.clientHeight ||
      rect.scrollWidth > rect.clientWidth
    ) {
      setMax(dec)
      isLocked.current = true
    }
  }

  /* This useEffect is rendered without dependencies,
  this forces the effect to run on every re-render.
  This is due to the rect being a deep ref that can't
  be used as a dependency in a normal useEffect,
  and react only does shallow comparison, this makes
  sure that the rect value stays up to date with the prop */
  useEffect(updateMax)

  const handleResize = () => {
    setTimeout(compose(setIsLocked(false), updateMax), 100)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    const nbrRemainingChildren = positiveOrZero(nbrChildren - max)
    onChange(nbrRemainingChildren)
  }, [ max, nbrChildren ])

  const avatars = take(
    max,
    getChildrenWithProps(children, defaultTo({}, childrenProps))
  )

  return <>{ avatars }</>
}
