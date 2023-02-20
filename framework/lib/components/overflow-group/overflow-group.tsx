import React, { Children, useEffect, useRef, useState } from 'react'
import { always, dec, defaultTo, gt, identity, ifElse, inc, take } from 'ramda'
import { OverflowGroupProps } from './types'
import { getChildrenWithProps } from '../../utils'

const positiveOrZero = ifElse(gt(0), always(0), identity)
const EMPTY_RECT = {
  clientWidht: 0,
  clientHeight: 0,
}
const EMPTY_WINDOW = {
  innerWidth: 0,
  innerHeight: 0,
}

export const OverflowGroup = ({
  children,
  max: initMax = 0,
  childrenProps,
  onChange = identity,
  rect,
}: OverflowGroupProps) => {
  const [ max, setMax ] = useState(typeof rect === 'undefined' ? initMax : 0)
  const [ windowState, setWindowState ] = useState(EMPTY_WINDOW)
  const isLocked = useRef(false)
  const nbrChildren = Children.count(children)

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

  const rectDependency = defaultTo(EMPTY_RECT, rect) as HTMLElement
  useEffect(updateMax, [
    rectDependency.clientWidth,
    rectDependency.clientHeight,
    nbrChildren,
    max,
    windowState.innerHeight,
    windowState.innerHeight,
    initMax,
  ])

  useEffect(() => {
    isLocked.current = false
  }, [ rectDependency.clientHeight, rectDependency.clientWidth ])

  const handleResize = () => {
    setTimeout(() => {
      isLocked.current = false
      setWindowState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      })
    }, 200)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const nbrRemainingChildren = positiveOrZero(nbrChildren - max)
    onChange(nbrRemainingChildren)
  }, [ max, nbrChildren ])

  const shownChildren = take(
    max,
    getChildrenWithProps(children, defaultTo({}, childrenProps))
  )

  return <>{ shownChildren }</>
}
