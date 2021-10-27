import React from 'react'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { ActivityItem } from '../components'

const { isOk } = assert

describe('ActivityItem', () => {
  it('should render itself and summary', () => {
    const Summary = () => (
      <span data-testid="test-summary">It renders summary</span>
    )

    render(
      <ActivityItem summary={ <Summary /> } />
    )

    isOk(screen.getByTestId('activity-item-root'))
    isOk(screen.getByTestId('test-summary'))
  })
})
