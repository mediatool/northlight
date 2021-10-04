import React from 'react'
import { expect } from 'chai'
import { render, screen } from '@testing-library/react'
import { Chip } from '../components/chip'

describe('ChipComponent', () => {
  it('should render chip', () => {
    render(<Chip type="success" variant="normal"><p>2020-10-05</p></Chip>)

    return expect(screen.getByTestId('chip-root')).to.be.ok
  })
})
