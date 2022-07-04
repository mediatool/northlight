import React from 'react'
import {
  Box,
  Button,
  CheckboxField,
  Code,
  Form,
  FormattedNumberInput,
  Heading,
  Image,
  List,
  ListItem,
  MaskedTextInput,
  NumberInputField,
  RadioField,
  RadioGroupField,
  Stack,
  SwitchField,
  Text,
  TextField,
  TextareaField,
} from '~lib/components'
import * as CurrentPrimitives from '~lib/components/text-field'
import { Page } from '../../components'
import { textfield } from '../../../assets/png'
import { useLocalizedNumberFormatter } from '../formatted-number-input-page/use-localized-number-formatter'

const FormPage = () => {
  const formatter = useLocalizedNumberFormatter()

  return (
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
            phone: '',
            firstname: '',
            lastname: '',
            formatted: '',
            review: '',
            newsletter: true,
            personalInfoAgree: false,
            userRole: '',
            dogs: 0,
          } }
          onSubmit={ () => {} }
        >
          { (form) => (
            <Stack spacing={ 3 }>
              <TextField
                label="Firstname"
                name="firstname"
                placeholder="John"
              />
              <TextField
                label="Lastname"
                name="lastname"
                placeholder="Doe"
              />
              <TextField
                label="Phone"
                name="phone"
                as={ MaskedTextInput }
                mask="+46 99 999 99 99"
                placeholder="Masked Phone number"
              />
              <TextField
                label="Number"
                name="formatted"
                as={ FormattedNumberInput }
                formatter={ formatter }
                placeholder="I format according to your locale as you type numbers"
              />
              <SwitchField name="newsletter" label="Subscribe to the newsletter" />
              <CheckboxField name="personalInfoAgree" label="I hereby consent to Mediatool using my personal information for further processing" />
              <RadioGroupField
                name="userRole"
                label="Choose your role"
                direction="row"
              >
                <RadioField value="user">User</RadioField>
                <RadioField value="editor">Editor</RadioField>
                <RadioField value="admin">Admin</RadioField>
              </RadioGroupField>
              <TextareaField
                name="review"
                label="Please write a short description of your work experience"
              />
              <SwitchField
                name="newsletter"
                label="Subscribe to the newsletter"
              />
              <CheckboxField
                name="personalInfoAgree"
                label="I hereby consent to Mediatool using my personal information for further processing"
              />
              <Button type="submit" variant="success">Submit</Button>
              <NumberInputField
                name="dogs"
                label="Enter how many dogs you own"
              />
              <Code p={ 4 }>{ JSON.stringify(form.values, null, 2) }</Code>
            </Stack>
          ) }
        </Form>
      </Box>
      <Box mt={ 6 }>
        <Text>This example composes { '<Form>' }, { '<TextField>' }, { '<SwitchField>' }, { '<CheckboxField />' }, { '<RadioGroupField>' }, { '<TextareField>' }, and { '<Button>' }</Text>
      </Box>
    </Page>
  )
}

export default FormPage
