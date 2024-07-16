import { describe, it } from 'mocha'
import { expect } from 'chai'
import React from 'react'
import { render } from '@testing-library/react'
import { MediatoolThemeProvider, VisuallyHidden, getContrastColor, theme } from '../../../../lib'

interface ContrastColorProps {
  color: string
  expectedResult: string
}

const ContrastColor = ({ color, expectedResult }: ContrastColorProps) => {
  expect(getContrastColor(color)).to.equal(expectedResult)

  return <VisuallyHidden />
}

const ContextWrapper = (props: ContrastColorProps) => (
  <MediatoolThemeProvider theme={ theme }>
    <ContrastColor { ...props } />
  </MediatoolThemeProvider>
)

describe('getContrastColor', () => {
  const brightContrastColor = theme.colors.text.inverted
  const darkContrastColor = theme.colors.text.default

  it('returns dark color when given a bright color', () => {
    const brightColor = 'mono.white'

    render(
      ContextWrapper({
        color: brightColor,
        expectedResult: darkContrastColor,
      })
    )
  })

  it('returns bright color when given a dark color', () => {
    const darkColor = 'mono.black'

    render(
      ContextWrapper({
        color: darkColor,
        expectedResult: brightContrastColor,
      })
    )
  })

  it('returns dark color when given a bright hexColor', () => {
    const brightHexColor = '#EAF3FF'

    render(
      ContextWrapper({
        color: brightHexColor,
        expectedResult: darkContrastColor,
      })
    )
  })

  it('returns bright color when given a dark hexColor', () => {
    const darkHexColor = '#081C32'

    render(
      ContextWrapper({
        color: darkHexColor,
        expectedResult: brightContrastColor,
      })
    )
  })
})
