import React from 'react'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { MediatoolThemeProvider, Select } from '../../../../lib/components'
import '../../../../matchMediaPolyfill'

const { isOk } = assert

describe('Select', () => {
  it('Renders properly', () => {
    render(
      <MediatoolThemeProvider>
        <Select data-testid="my-select" />
      </MediatoolThemeProvider>
    )

    const input =
      screen.getByTestId('my-select').children[0].children[2].children[0]
        .children[1].children[0]

    isOk(input)
  })
})
