import React from 'react'
import {
  Modal as ChakraModal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react'

export const Modal = ({
  isCentered = true,
  children,
  ...rest
}: ModalProps) => (
  <ChakraModal
    isCentered={ isCentered }
    scrollBehavior="inside"
    motionPreset="slideInBottom"
    { ...rest }
  >
    <ModalOverlay />
    <ModalContent data-testid="modal-test-id">
      <ModalCloseButton data-testid="modal-test-button-id" />
      { children }
    </ModalContent>
  </ChakraModal>
)
