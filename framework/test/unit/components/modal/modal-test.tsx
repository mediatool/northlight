import React from 'react'
import { describe, it } from 'mocha'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { Modal, ModalBody, ModalHeader } from '../../../../lib/components'

const { isOk } = assert

describe('Modal', () => {
  it('Renders properly', () => {
    render(<Modal isOpen={ true } onClose={ () => null }>Modal</Modal>)
    const modal = screen.getByTestId('modal-test-id')
    isOk(modal)
  })
  it('Renders Text', () => {
    render(<Modal isOpen={ true } onClose={ () => null }>Modal</Modal>)
    const modal = screen.getByText('Modal')
    isOk(modal)
  })
  it('Does not render if isOpen is false', () => {
    render(<Modal isOpen={ false } onClose={ () => null }>Modal</Modal>)
    const modal = screen.queryByText('modal')
    isOk(!modal)
  })
  it('Render a close button at top', () => {
    render(<Modal isOpen={ true } onClose={ () => null }>Modal</Modal>)
    const closeButton = screen.getByTestId('modal-test-id').children[0]
    isOk(closeButton)
  })
  it('Supports use of ModalHeader', () => {
    render(
      <Modal isOpen={ true } onClose={ () => null }>
        <ModalHeader>Header</ModalHeader>
      </Modal>
    )
    const modalHeaderText = screen.getByText('Header')
    isOk(modalHeaderText)
  })
  it('Supports use of ModalBody', () => {
    render(
      <Modal isOpen={ true } onClose={ () => null }>
        <ModalBody>Body</ModalBody>
      </Modal>
    )
    const modalBodyText = screen.getByText('Body')
    isOk(modalBodyText)
  })
})
