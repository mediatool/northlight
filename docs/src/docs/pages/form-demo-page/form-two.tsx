import React, { useState } from 'react'
import {
  Button,
  Code,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@northlight/ui'
import { PageOne } from './page-one'
import { PageTwo } from './page-two'
import { PageThree } from './page-three'
import { validation } from './validation'

type FormOneProps = {
  isOpen: boolean
  onClose: () => void
}

export const FormTwo = ({ isOpen, onClose }: FormOneProps) => {
  const initialValues = {
    firstName: {
      nested: '',
    },
    sports: '',
    dogs: 0,
    newsletter: false,
    date: '',
    color: '',
  }
  const [ values, setValues ] = useState(initialValues)

  return (
    <Form
      initialValues={ initialValues }
      onSubmit={ () => {} }
      validate={ validation }
    >
      { (methods) => (
        <>
          <Modal isOpen={ isOpen } onClose={ onClose } size="5xl">
            <Tabs>
              <ModalHeader>
                <TabList>
                  <Tab>Validation and Subscription</Tab>
                  <Tab>Dynamic Fields</Tab>
                  <Tab>Spreadsheet</Tab>
                </TabList>
              </ModalHeader>
              <ModalBody>
                <TabPanels h="600px">
                  <TabPanel>
                    <PageOne />
                  </TabPanel>
                  <TabPanel>
                    <PageTwo />
                  </TabPanel>
                  <TabPanel>
                    <PageThree />
                  </TabPanel>
                </TabPanels>
              </ModalBody>
              <ModalFooter>
                <Button onClick={ onClose }>Close</Button>
              </ModalFooter>
            </Tabs>
          </Modal>
          <Stack>
            <Code p={ 4 }>
              <pre>
                { JSON.stringify(values, null, 2) }
              </pre>
            </Code>
            <Button onClick={ () => setValues(methods.getValues()) } variant="success">
              Update Form Values
            </Button>
          </Stack>
        </>
      ) }
    </Form>

  )
}
