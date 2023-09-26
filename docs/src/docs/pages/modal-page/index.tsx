import React, { useState } from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import {
  Box,
  Button,
  Divider,
  FlipButton,
  FlipButtonGroup,
  ListItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalSizes,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from '@northlight/ui/ts'
import { DefaultPageSubtitle, Page } from '../../components'

const ModalPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ size, setSize ] = useState<string | string[]>('md')

  const handleChange = (val: string | string[]) => {
    setSize(val)
  }

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
        <FormControl>
          <FormLabel>Picka size</FormLabel>
          <FlipButtonGroup onChange={ handleChange } value={ size }>
            <FlipButton value="xs">Xs</FlipButton>
            <FlipButton value="sm">Sm</FlipButton>
            <FlipButton value="md">Md</FlipButton>
            <FlipButton value="lg">Lg</FlipButton>
            <FlipButton value="xl">Xl</FlipButton>
            <FlipButton value="2xl">2xl</FlipButton>
            <FlipButton value="3xl">3xl</FlipButton>
            <FlipButton value="4xl">4xl</FlipButton>
            <FlipButton value="5xl">5xl</FlipButton>
            <FlipButton value="6xl">6xl</FlipButton>
            <FlipButton value="huge">Huge</FlipButton>
            <FlipButton value="full">Full</FlipButton>
          </FlipButtonGroup>
        </FormControl>
        <Text>This is an expamble of a simple modal</Text>
        <Box w={ 200 }>
          <Button onClick={ onOpen }>Open</Button>
          <Modal isOpen={ isOpen } onClose={ onClose } size={ size as ModalSizes }>
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
