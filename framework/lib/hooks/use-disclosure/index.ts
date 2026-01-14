import {
  useDisclosure as useDisclosureChakra,
} from '@chakra-ui/react'
import type { UseDisclosureProps } from '@chakra-ui/react'

export const useDisclosure = (props?: UseDisclosureProps) => {
  const { isOpen, onOpen, onClose } = useDisclosureChakra(props)

  const onToggle = () => (isOpen ? onClose() : onOpen())

  return { isOpen, onOpen, onClose, onToggle }
}
