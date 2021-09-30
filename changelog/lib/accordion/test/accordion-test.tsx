import React from 'react'
import { expect } from 'chai'
import { render, screen } from '@testing-library/react'
import { Accordion } from '../components'

describe('Accordion', () => {
  it('should render itself and summary', () => {
    const Summary = () => (
      <span data-testid="test-summary">It renders</span>
    )

    render(
      <Accordion summary={<Summary />}>
      </Accordion>
    )

    expect(screen.getByTestId('changelog-accordion-root')).to.be.ok
    expect(screen.getByTestId('test-summary')).to.be.ok
  })

  it('should render content when expanded', () => {
    render(
      <Accordion summary="Content test">
        <p data-testid="mock-content">Mock</p>
      </Accordion>
    )

    screen.getByTestId('changelog-accordion-root').click()

    expect(screen.getByTestId('changelog-accordion-content')).to.be.ok
    expect(screen.getByTestId('mock-content').textContent).to.equal('Mock')
  })
})
