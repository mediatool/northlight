import React from 'react'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { Blinker } from '../../../../lib/components'

const { isOk } = assert

const getBlinker = (customProps = { }) => {
  const props = {
    ...customProps,
  }
  return (
    <Blinker { ...props } />
  )
}

describe('Blinker', () => {
  it('Renders properly', () => {
    render(getBlinker())
    const blinker = screen.getByTestId('blinker-test-id')
    isOk(blinker)
  })
})
