import React, { HTMLAttributes } from 'react'
import * as icons from './icons'

export type IconType =
  'added'
  | 'modified'
  | 'deleted'
  | 'approved'
  | 'approvalRequested'
  | 'campaignCreated'
  | 'denied'
  | 'orgCreated'
  | 'pending'
  | 'logo'

export type ChangelogIconProps = {
  height: number
  icon: IconType
} & HTMLAttributes<HTMLImageElement>

export const ChangelogIcon = ({ height = 40, icon, ...rest }: ChangelogIconProps) => {
  const iconSrc = icons[icon]

  return (
    <img
      className="changelog-entry__icon"
      src={ iconSrc }
      height={ height }
      alt={ icon }
      { ...rest }
    />
  )
}
