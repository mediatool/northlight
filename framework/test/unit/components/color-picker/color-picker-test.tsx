import React from 'react'
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ColorPicker } from '../../../../lib/components'
import { columns } from '../../../../lib/components/color-picker/constants'

const { isOk } = assert

const getColorPicker = (customProps = {}) => {
  const props = {
    ...customProps,
  }
  return <ColorPicker { ...props } />
}

const getComponent = () => screen.getByTestId('color-picker-test-id')
const getColorButton = (index: number) => screen.getByTestId('color-picker-test-id')
  .children[1]
  .children[0]
  .children[0]
  .children[1]
  .children[0]
  .children[1]
  .children[index]
const getExpandButton = () => screen.getByTestId('color-picker-test-id')
  .children[1]
  .children[0]
  .children[0]
  .children[1]
  .children[0]
  .children[2]

describe('ColorPicker', () => {
  it('Renders properly', () => {
    render(getColorPicker())
    const colorPicker = getComponent()
    isOk(colorPicker)
  })

  it('Renders a clickable button that triggers popup', () => {
    render(getColorPicker())
    const triggerButton = getComponent().children[0]
    isOk(triggerButton)
  })

  it('Triggers popup on click', async () => {
    render(getColorPicker())
    const user = userEvent.setup()
    const triggerButton = getComponent().children[0]
    await user.click(triggerButton)
    expect(triggerButton.getAttribute('aria-expanded')).to.equal('true')
  })

  it('Focuses on icon button on tab', async () => {
    render(getColorPicker())
    const user = userEvent.setup()
    const colorPicker = getComponent().children[0]
    await user.tab()
    expect(colorPicker).to.deep.equal(document.activeElement)
  })

  it('Focuses on first colorbutton on popup', async () => {
    render(getColorPicker())
    const user = userEvent.setup()
    const triggerButton = getComponent().children[0]
    const colorButton = getColorButton(0)
    await user.click(triggerButton)
    expect(colorButton).to.deep.equal(document.activeElement)
  })

  it('Moves focus to next colorButton on tab', async () => {
    render(getColorPicker())
    const user = userEvent.setup()
    const triggerButton = getComponent().children[0]
    const colorButton = getColorButton(1)
    await user.click(triggerButton)
    await user.tab()
    expect(colorButton).to.deep.equal(document.activeElement)
  })

  it('Can move focus with keyboard keys', async () => {
    render(getColorPicker())
    const user = userEvent.setup()
    const triggerButton = getComponent().children[0]
    let index = 0
    await user.click(triggerButton)

    await user.keyboard('{ArrowRight}')
    index += 1
    expect(getColorButton(index)).to.deep.equal(document.activeElement)

    await user.keyboard('{ArrowDown}')
    index += columns
    expect(getColorButton(index)).to.deep.equal(document.activeElement)

    await user.keyboard('{ArrowLeft}')
    index -= 1
    expect(getColorButton(index)).to.deep.equal(document.activeElement)

    await user.keyboard('{ArrowUp}')
    index -= columns
    expect(getColorButton(index)).to.deep.equal(document.activeElement)
  })

  it('Renders custom color', () => {
    render(getColorPicker({ colors: [ '#00ff00' ] }))
    const colorButton = getColorButton(0)
    expect(colorButton.getAttribute('aria-label')).to.equal('select-#00ff00')
    isOk(colorButton)
  })

  it('Closes menu when press colorButton', async () => {
    render(getColorPicker({ colors: [ '#00ff00' ] }))
    const user = userEvent.setup()
    const colorButton = getColorButton(0)
    const triggerButton = getComponent().children[0]
    await user.click(triggerButton)
    expect(triggerButton.getAttribute('aria-expanded')).to.equal('true')
    await user.click(colorButton)
    expect(triggerButton.getAttribute('aria-expanded')).to.equal('false')
  })

  it('Adds expanded colors when press down arrow', async () => {
    render(getColorPicker({ expandedColors: [ '#00ff00' ] }))
    const user = userEvent.setup()
    const expandButton = getExpandButton()
    await user.click(expandButton)
    const expandedColorButton = getColorButton(10)
    expect(expandedColorButton.getAttribute('aria-label')).to.equal('select-#00ff00')
  })

  it('Can focus on expand button, and return focus', async () => {
    render(getColorPicker({ expandedColors: [ '#00ff00' ] }))
    const user = userEvent.setup()
    const expandButton = getExpandButton()
    const triggerButton = getComponent().children[0]
    const colorButton = getColorButton(0)
    await user.click(triggerButton)
    await user.keyboard('{PageDown}')
    expect(expandButton).to.deep.equal(document.activeElement)
    await user.keyboard('{PageUp}')
    expect(colorButton).to.deep.equal(document.activeElement)
  })
})
