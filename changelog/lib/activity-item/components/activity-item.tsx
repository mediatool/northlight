import React, { ReactNode } from 'react'

export interface ActivityItemProps {
  summary: ReactNode
  time: ReactNode
}

export const ActivityItem = ({
  time, summary,
}: ActivityItemProps) => (
  <div
    className="activity-item"
    data-testid="activity-item-root"
  >
    <div className="summary-wrapper">
      { time }
      <div className="summary">
        { summary }
      </div>
    </div>
  </div>
)
