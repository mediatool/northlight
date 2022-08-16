import React from 'react'
import {
  Alert,
  Button,
  Code,
  Divider,
  HStack,
  Stack,
  Text,
  useToast,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const ToastPage = () => {
  const toast = useToast()
  return (
    <Page
      title="Toast"
      subtitle={ (
        <DefaultPageSubtitle
          slug="/form/toast"
          linkText="Chakra Toast"
        />
      ) }
    >

      <Stack spacing={ 4 }>
        <Text>Mediatool uses 4 toast <strong>variants</strong></Text>
        <HStack spacing={ 4 }>
          <Alert variant="success" title="success" />
          <Alert variant="warning" title="warning" />
          <Alert variant="info" title="info" />
          <Alert variant="error" title="error" />
        </HStack>
        <Text>If you don't specify a variant, it will be <strong>success</strong></Text>
        <HStack spacing={ 4 }>
          <Text>Example: </Text>
          <Code w="max-content">{ '<Alert variant="success" title="success" />' }</Code>
          <Text>(Notice it uses <strong>Alert</strong>)</Text>
        </HStack>
        <Divider />
        <Text>It takes in a <strong>title </strong>
          and a <strong>description</strong>
        </Text>
        <HStack>
          <Alert
            title="title"
            description="description"
          />
        </HStack>
        <Code w="max-content">{
          `<Alert
          title="title"
          description="description"
          </Alert>` }
        </Code>
        <Divider />
        <Text>One can make the toast pop up (click the buttons): </Text>
        <HStack spacing={ 4 }>
          <Button
            variant="success"
            onClick={ () => toast({
              position: 'top-right',
              render: ({ onClose }) => (
                <Alert
                  variant="success"
                  title="Saved"
                  description="Your setting have been saved, you will need to reload the page before the changes take effect."
                  onClose={ onClose }
                />
              ),
            })
          }
          >
            Save Settings
          </Button>
          <Button
            variant="danger"
            onClick={ () => toast({
              position: 'top-right',
              render: ({ onClose }) => (
                <Alert
                  variant="error"
                  title="Error  "
                  description="Please save you changes before exiting"
                  onClose={ onClose }
                />
              ),
            })
          }
          >
            Exit
          </Button>
        </HStack>
        <Text>To implement the pop up, use the <strong>useToast</strong> hook</Text>
        <Code w="max-content" display="block" whiteSpace="pre">{
`const toast = useToast()
toast({
  position: 'top-right',
  render: ({ onClose }) => (
    <Alert
      variant="error"
      title="Error  "
      description="Please save you changes before exiting"
      onClose={ onClose }
    />
  ),
})` }
        </Code>
        <Text>Example: </Text>
        <Code w="max-content" display="block" whiteSpace="pre">{
`const toast = useToast()
<Button onClick={ () => toast({
  position: 'top-right',
  render: ({ onClose }) => (
    <Alert onClose={ onClose }/>
  ),
})
}` }
        </Code>
      </Stack>
    </Page>
  )
}

export default ToastPage
