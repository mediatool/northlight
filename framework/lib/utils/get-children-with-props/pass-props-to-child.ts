import React, { cloneElement, isValidElement } from 'react'
import { CSSObject } from '@emotion/react'

export const passPropsToChild = (child: React.ReactNode, styles: CSSObject) => (
  isValidElement(child)
    ? cloneElement(child, {
      ...styles,
    })
    : child
)
