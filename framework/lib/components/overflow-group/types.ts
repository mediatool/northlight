import React from 'react'

export interface OverflowGroupProps {
  childrenProps?: Record<string, any>
  max?: number
  children: JSX.Element[] | React.ReactNode[]
  onChange?: (nbrRemainingChildren: number) => void
  /** Should be used together with the userOverflowGroup hook to fit by parent element */
  rect?: HTMLElement | null
}
