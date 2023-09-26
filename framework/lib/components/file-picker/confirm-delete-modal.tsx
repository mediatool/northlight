import React from 'react'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '../modal'
import { Button } from '../button'
import { ConfirmDeleteModalProps } from './types.ts'

export const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  confirmDelete,
  fileName,
  ...rest
}: ConfirmDeleteModalProps) => {
  const handleDelete = () => {
    confirmDelete()
    onClose()
  }

  return (
    <Modal isOpen={ isOpen } onClose={ onClose } { ...rest }>
      <ModalHeader
        sx={ { fontSize: 'lg' } }
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        pr={ 16 }
      >
        Delete { fileName }
      </ModalHeader>
      <ModalBody>
        Deleting this file is a permanent action. You will not be able to
        recover this file at a later time.
      </ModalBody>
      <ModalFooter>
        <Button variant="danger" onClick={ handleDelete }>
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  )
}
