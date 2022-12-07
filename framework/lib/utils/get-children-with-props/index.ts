import React, { Children } from 'react'
import { T } from 'ramda'
import { passPropsToChild } from './pass-props-to-child'

export const getChildrenWithProps = (
  children: React.ReactNode | React.ReactNode[],
  styles: Record<string, any>,
  predicate: (child: React.ReactNode, index: number) => boolean = T
) => {
  const childrenAsArr = Children.toArray(children)
  const childrenWithoutFocus = childrenAsArr.map((child, i) => (
    predicate(child, i)
      ? passPropsToChild(child, { ...styles })
      : child
  ))
  return childrenWithoutFocus
}
