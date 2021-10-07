import React from 'react'
import { MTElapsedTime } from 'mt-ui'

export interface ActivityItemTimeProps {
  time: string
  toolTipTime: string
  timeFormat: string
}

export const ActivityItemTime = ({
  time, toolTipTime, timeFormat,
}: ActivityItemTimeProps) => (
  <div
    className="activity-item-time"
    data-testid="activity-item-time"
    data-tip={ toolTipTime }
  >
    <MTElapsedTime timestamp={ time } format={ timeFormat } />
  </div>
)
