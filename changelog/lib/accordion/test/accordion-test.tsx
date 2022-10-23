import React from 'react'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { Accordion } from '../components'

const { isOk, equal } = assert

describe('Accordion', () => {
  it('should render itself and summary', () => {
    const Summary = () => (
      <span data-testid="test-summary">It renders</span>
    )

    render(
      <Accordion summary={ <Summary /> }>
        <p>Children</p>
      </Accordion>
    )

    isOk(screen.getByTestId('changelog-accordion-root'))
    isOk(screen.getByTestId('test-summary'))
  })

  it('should render content when expanded', async () => {
    render(
      <Accordion summary="Content test">
        <p data-testid="mock-content">Mock</p>
      </Accordion>
    )

    await screen.getByTestId('changelog-accordion-caret-icon').click()

    isOk(screen.getByTestId('changelog-accordion-content'))
    equal(screen.getByTestId('mock-content').textContent, 'Mock')
  })
})
