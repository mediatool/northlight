/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { Alert } from '../../../../lib/components'

const { isOk } = assert

describe('Alert Component', () => {
  it('Alert UI component should render properly', () => {
    render(<Alert />)
    const select = screen.getByTestId('alert-test')
    isOk(select)
  })
})
