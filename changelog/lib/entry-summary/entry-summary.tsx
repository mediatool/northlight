import React, { ReactNode } from 'react'
import { MTImage } from 'mt-ui'
import { ChangelogIcon, IconType } from '../common'

export interface EntrySummaryProps {
  icon: IconType
  description: ReactNode
  actor: any
}

export const EntrySummary = ({
  actor,
  description,
  icon,
}: EntrySummaryProps) => (
  <>
    <div className="changelog-entry-summary__icon">
      <ChangelogIcon height={ 44 } icon={ icon } />
    </div>
    <div className="changelog-entry-summary__description">
      { description }
    </div>
    <div className="changelog-entry-summary__avatar">
      <MTImage
        round={ true }
        item={ actor }
        width={ 44 }
        height={ 44 }
      />
    </div>
  </>
)
