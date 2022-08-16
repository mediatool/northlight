import React from 'react'
import {
  Box,
  Button,
  CheckboxField,
  Code,
  DatePickerField,
  Form,
  FormattedNumberInput,
  Heading,
  Image,
  MaskedTextInput,
  NumberInputField,
  RadioField,
  RadioGroupField,
  SelectField,
  Stack,
  SwitchField,
  Text,
  TextField,
  TextareaField,
  VStack,
} from '../../../../lib/components'
import { Page } from '../../components'
import { textfield } from '../../../assets/png'
import { useLocalizedNumberFormatter } from '../formatted-number-input-page/use-localized-number-formatter'

const FormPage = () => {
  const formatter = useLocalizedNumberFormatter()

  return (
    <Page
      title="Form"
      subtitle={ (
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
      ) }
    >
      <VStack w="40%">
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
            experience: '',
            sports: [],
            date: '',
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
              <SelectField
                name="experience"
                label="Years of work experience"
                options={ [
                  { label: '0-1: Youngling', value: 'rank1' },
                  { label: '1-3: Padawan ', value: 'rank2' },
                  { label: '3-7: Knight ', value: 'rank3' },
                  { label: '7-12: Master', value: 'rank4' },
                  { label: '12-20: Council Member', value: 'rank5' },
                  { label: '20-30: Master of the order', value: 'rank6' },
                  { label: '30+: Grand Master', value: 'rank7' },
                ] }
                isMulti={ false }
              />
              <SelectField
                name="sports"
                label="What sports have you played the last month?"
                options={ [
                  { label: 'Soccer', value: 'soccer' },
                  { label: 'Golf', value: 'golf' },
                  { label: 'Basketball', value: 'basketball' },
                  { label: 'Tennis', value: 'tennis' },
                  { label: 'Cricket', value: 'cricket' },
                  { label: 'Boxing', value: 'boxing' },
                  { label: 'Hockey', value: 'hockey' },
                  { label: 'Baseball', value: 'baseball' },
                  { label: 'Chess', value: 'chess' },
                  { label: 'Swimming', value: 'swimming' },
                  { label: 'Volleyball', value: 'volleyball' },
                  { label: 'Rugby', value: 'rugby' },
                  { label: 'Bowling', value: 'bowling' },
                  { label: 'Figure Skating', value: 'figure-skating' },
                  { label: 'Table Tennis', value: 'table-tennis' },
                  { label: 'Surfing', value: 'surfing' },
                  { label: 'Running', value: 'running' },
                  { label: 'Sailing', value: 'sailing' },
                  { label: 'Archery', value: 'archery' },
                  { label: 'Motorcycle Racing', value: 'motorcycle-racing' },
                  { label: 'Horse Racing', value: 'horse-racing' },
                  { label: 'Badminton', value: 'Badminton' },
                  { label: 'Fencing', value: 'fencing' },
                  { label: 'Bodybuilding', value: 'body-building' },
                  { label: 'Rowing', value: 'rowing' },
                  { label: 'Handball', value: 'handball' },
                  { label: 'Scoop', value: 'Scoop' },
                ] }
                isMulti={ true }
              />
              <NumberInputField
                name="dogs"
                label="Enter how many dogs you own"
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
              <DatePickerField name="date" label="Pick a date" direction="row" />
              <Button type="submit" variant="success">Submit</Button>
              <Code p={ 4 }>{ JSON.stringify(form.values, null, 2) }</Code>
            </Stack>
          ) }
        </Form>
      </VStack>
      <Box mt={ 6 } maxW="50%">
        <Text>This example composes { '<Form>' }, { '<TextField>' }, { '<SwitchField>' }, { '<CheckboxField />' }, { '<RadioGroupField>' }, { '<TextareField>' }, { '<SelectField>' }, and { '<Button>' }</Text>
      </Box>
      <Image
        src={ textfield }
        mt={ 10 }
      />
    </Page>
  )
}

export default FormPage
