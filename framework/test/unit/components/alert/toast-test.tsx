/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { Toast } from '../../../../lib/components'

const { isOk } = assert

describe('Alert Component', () => {
  it('Alert UI component should render properly', () => {
    render(<Toast />)
    const select = screen.getByTestId('toast-test')
    isOk(select)
  })
})
