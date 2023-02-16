import React from 'react'

export interface OverflowGroupProps {
  childrenProps?: Record<string, any>
  max?: number
  children: JSX.Element[] | React.ReactNode[]
  onChange?: (nbrRemainingChildren: number) => void
  rect?: HTMLElement | null
}
