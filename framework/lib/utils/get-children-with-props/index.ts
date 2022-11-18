import { Children } from 'react'
import { CSSObject } from '@emotion/react'
import { passPropsToChild } from './pass-props-to-child'

export const getChildrenWithProps = (
  children: React.ReactNode | React.ReactNode[],
  styles: CSSObject
) => {
  const childrenAsArr = Children.toArray(children)
  const childrenWithoutFocus = childrenAsArr.map((child: React.ReactNode) =>
    passPropsToChild(child, { ...styles })
  )
  return childrenWithoutFocus
}
