import React from 'react'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { ActivityItem } from '../components'

const { isOk } = assert

describe('ActivityItem', () => {
  it('should render itself and time and summary', () => {
    const Summary = () => (
      <span data-testid="test-summary">It renders summary</span>
    )

    const Time = () => (
      <p data-testid="activity-item-time">It renders time</p>
    )

    render(
      <ActivityItem time={ <Time /> } summary={ <Summary /> } />
    )

    isOk(screen.getByTestId('activity-item-root'))
    isOk(screen.getByTestId('test-summary'))
    isOk(screen.getByTestId('activity-item-time'))
  })
})
