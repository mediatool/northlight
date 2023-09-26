import React from 'react'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import { render } from '@testing-library/react'
import { MediatoolThemeProvider, VisuallyHidden, addAlpha, theme } from '../../../../lib'

interface AlphaProps {
  color: string
  opacity: number
  expectedResult: string
}

const Alpha = ({ color, opacity, expectedResult }: AlphaProps) => {
  const colorTest = addAlpha(color, opacity)
  expect(colorTest).to.equal(expectedResult)

  return <VisuallyHidden />
}

const ContextWrapepr = (props: AlphaProps) => (
  <MediatoolThemeProvider theme={ theme }>
    <Alpha { ...props } />
  </MediatoolThemeProvider>
)

describe('addAlpha', () => {
  it('Adds opacity 0.5 to hex value', () => {
    const color = '#000000'
    const expectedResult = '#00000080'
    const opacity = 0.5
    render(
      ContextWrapepr({
        color,
        expectedResult,
        opacity,
      })
    )
  })

  it('Handles color tokens', () => {
    const color = 'blue.500'
    const expectedResult = '#2a8bfbCC'
    const opacity = 0.8
    render(
      ContextWrapepr({
        color,
        expectedResult,
        opacity,
      })
    )
  })
})
