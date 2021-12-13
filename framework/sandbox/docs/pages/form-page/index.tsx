import React from 'react'
import {
  Box,
  Button,
  Code,
  Form,
  FormattedTextInput,
  Heading,
  Image,
  List,
  ListItem,
  MaskedTextInput,
  Stack,
  Text,
  TextField,
  TextInputFormatter,
} from '~lib/components'
import * as CurrentPrimitives from '~lib/components/textfield'
import { Page } from '../../components'
import { textfield } from '../../../assets/png'

const formatter: TextInputFormatter = {
  format: (value) => new Intl.NumberFormat().format(Number(value)),
  unFormat: (value) => value
    .replaceAll(/\s/g, '')
    .replaceAll(',', ''),
}

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
          We have composed our own primitives, that are hooked up to Formik via TextField.
          <br />
          If you desire to use these in a formik context, they should be passed to TextField
          via the <strong>component</strong> prop.
          <br />
        </Text>
      </>
    }
  >
    <Box w="40%">
      <Heading as="h4" size="md">Current primitives</Heading>
      <List mb={ 10 }>
        { Object.keys(CurrentPrimitives).map((primitive) => (
          primitive !== 'TextField' && <ListItem key={ primitive }>{ primitive }</ListItem>
        )) }
      </List>
      <Image
        src={ textfield }
        mb={ 10 }
      />
      <Form
        initialValues={ {
          phone: '', firstname: '', lastname: '', formatted: '',
        } }
        onSubmit={ () => {} }
      >
        { (form) => (
          <Stack spacing={ 3 }>
            <TextField
              name="firstname"
              placeholder="Firstname"
            />
            <TextField
              name="lastname"
              placeholder="Surname"
            />
            <TextField
              name="phone"
              as={ MaskedTextInput }
              mask="+46 99 999 99 99"
              placeholder="Masked Phone number"
            />
            <TextField
              name="formatted"
              as={ FormattedTextInput }
              formatter={ formatter }
              placeholder="I format according to your locale as you type numbers"
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
