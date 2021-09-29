import React from 'react'
import { ChipProps } from './types'

export const Chip = ({variant, type, children } : ChipProps) => {
  const classNames = ['tag',`tag--${variant}`,`tag--${type}`].join(' ')
  
  return (
    <div 
      className={classNames}
      data-testid="chip-root">
        {children}
    </div>
  )
}