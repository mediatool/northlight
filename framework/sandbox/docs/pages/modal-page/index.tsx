import React from 'react'
import {
  useDisclosure,
} from '../../../../lib/hooks'
import {
  Box,
  Button,
  Divider,
  ListItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
  UnorderedList,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const ModalPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Page
      title="Modal"
      subtitle={ (
        <DefaultPageSubtitle
          slug="/modal"
          linkText="Chakra Modal"
        />
      ) }
    >
      <Stack spacing={ 4 }>
        <Text>Mediatool's modal component gives you out of the box:</Text>
        <UnorderedList pl={ 8 }>
          <ListItem>The modal itself</ListItem>
          <ListItem>The overlay</ListItem>
          <ListItem>The close button</ListItem>
        </UnorderedList>
        <Text>Everthing else will be added as children.</Text>
        <Text>For the modal title we should use
          <Text as="b"> ModalHeader.</Text>
        </Text>
        <Text>For the modal body we should use
          <Text as="b"> ModalBody.</Text>
        </Text>
        <Text>For the modal actions we should use
          <Text as="b"> ModalFooter.</Text>
        </Text>
        <Divider />
        <Text>This is an expamble of a simple modal</Text>
        <Box w={ 200 }>
          <Button onClick={ onOpen }>Open</Button>
          <Modal isOpen={ isOpen } onClose={ onClose }>
            <ModalHeader>Title goes here</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
              Explicabo consequuntur sequi voluptatem delectus,
              vitae doloribus doloremque inventore illo nisi quisquam repellendus, culpa vel?
              Dolorem, odit voluptas doloribus minus quasi eligendi?
            </ModalBody>
            <ModalFooter>
              <Button>Action</Button>
            </ModalFooter>
          </Modal>
        </Box>
      </Stack>
    </Page>
  )
}

export default ModalPage
