import React from 'react'
import {
  Box,
  Button,
  Code,
  Form,
  Heading,
  Stack,
  Text,
  TextField,
} from '~lib/components'
import { Page } from '../../components'

const FormPage = () => (
  <Page
    title="Form"
    subtitle={
      <>
        <Heading as="h2" size="sm">
          The Form component is an abstraction of Formik.
        </Heading>
        <Text fontSize="sm">
          Form delegates the complexity of managing forms to Formik.
        </Text>
        <Text fontSize="sm">
          We have composed our own primitives, that are hooked up to Formik,
          such as <strong>TextField</strong>
        </Text>
      </>
    }
  >
    <Box w="40%">
      <Form
        initialValues={ { name: '' } }
        onSubmit={ () => {} }
      >
        { (form) => (
          <Stack spacing={ 3 }>
            <TextField
              name="name"
              mask="+4\9 99 999 99"
            />
            <Button type="submit" colorScheme="green">Submit</Button>

            <Code p={ 4 }>{ JSON.stringify(form.values, null, 2) }</Code>
          </Stack>
        ) }
      </Form>
    </Box>
    <Box mt={ 6 }>
      <Text>This example composes { '<Form>' }, { '<TextField>' } and { '<Button>' }</Text>
    </Box>
  </Page>
)

export default FormPage
