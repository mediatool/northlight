import React from 'react'
import { ModalProps } from './types'
import { ModalBase } from './modal-base'

/**
 * @see {@link https://northlight.dev/reference/modal}
 *
 * */

export const Modal = ({
  stayMountedOnClose = false,
  isOpen,
  ...rest
}: ModalProps) => (
  <>
    { (stayMountedOnClose || isOpen) && <ModalBase isOpen={ isOpen } { ...rest } /> }
  </>
)
