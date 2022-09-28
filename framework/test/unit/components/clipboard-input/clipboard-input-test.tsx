import React from 'react'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import { ClipboardInput } from '../../../../lib/components'

const { isOk } = assert

const getClipboardInput = (customProps = { }) => {
  const props = {
    value: 'some value',
    ...customProps,
  }
  return (
    <ClipboardInput { ...props } />
  )
}

const getComponent = () => screen.getByTestId('clipboard-input-test-id').children[0]

describe('ClipboardInput', () => {
  it('Renders properly', () => {
    render(getClipboardInput())
    const clipboardInput = getComponent()
    isOk(clipboardInput)
  })
  it('Has correct read only default states', () => {
    render(getClipboardInput({}))
    const clipboardInput = getComponent()
    expect(clipboardInput).to.have.property('readOnly', true)
    expect(clipboardInput.getAttribute('aria-readonly')).to.equal('true')
  })
  it('Copy button takes custom aria label', () => {
    render(getClipboardInput({ 'aria-label': 'Copy super secret code' }))
    const clipboardButton = screen.getByRole('button')
    expect(clipboardButton.getAttribute('aria-label')).to.equal('Copy super secret code')
  })
  it('Input has aria-label with value', () => {
    render(getClipboardInput({}))
    const clipboardInput = getComponent()
    expect(clipboardInput.getAttribute('aria-label')).to.equal('Value to copy: some value')
  })
})
