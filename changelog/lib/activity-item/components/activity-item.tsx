import React, { ReactNode } from 'react'

export interface ActivityItemProps {
  summary: ReactNode
}

export const ActivityItem = ({
  summary,
}: ActivityItemProps) => (
  <div
    className="activity-item"
    data-testid="activity-item-root"
  >
    <div className="summary-wrapper">
      <div className="summary">
        { summary }
      </div>
    </div>
  </div>
)
