import React, { ReactNode } from 'react'
import { MTImage } from 'mt-ui'
import { ChangelogIcon, IconType } from '../common'

export interface EntrySummaryProps {
  icon: IconType
  description: ReactNode
  actor: any
  time: ReactNode
}

export const EntrySummary = ({
  actor,
  description,
  icon,
  time,
}: EntrySummaryProps) => (
  <div className="changelog-entry-summary">
    <div className="changelog-entry-summary__icon">
      <ChangelogIcon height={ 32 } icon={ icon } />
    </div>
    <div className="changelog-entry-summary__avatar">
      {
        actor._id === 'system'
        ? <ChangelogIcon height={ 32 } icon="logo" />
        : <MTImage
            round={ true }
            item={ actor }
            width={ 32 }
            height={ 32 }
        />
      }
    </div>
    <div className="changelog-entry-summary__description">
      { time }
      { description }
    </div>
  </div>
)
