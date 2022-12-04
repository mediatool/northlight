import React from 'react'
import { TextSolid } from '@mediatool/icons'
import {
  Button,
  CheckboxField,
  Code,
  DatePickerField,
  FilePickerField,
  FlipButton,
  FlipButtonGroupField,
  Form,
  FormattedNumberInput,
  MaskedTextInput,
  MultiFilePickerField,
  NumberInputField,
  Radio,
  RadioGroupField,
  SelectField,
  Stack,
  SwitchField,
  TextField,
  TextareaField,
} from '../../../../lib'
import { useLocalizedNumberFormatter } from '../formatted-number-input-page/use-localized-number-formatter'

export const FormOne = () => {
  const formatter = useLocalizedNumberFormatter()
  return (
    <Form
      initialValues={ {
        firstName: '',
        lastName: '',
        phone: '',
        formatted: '',
        experience: '',
        sports: '',
        foods: [],
        fontSize: 'sm',
        dogs: 0,
        newsletter: true,
        personalInfoAgree: false,
        date: '',
        review: '',
        image: '',
        multiImage: '',
      } }
      onSubmit={ () => {} }
    >
      { ({ watch }) => (
        <Stack spacing={ 3 }>
          <TextField
            name="firstName"
            label="First Name"
            placeholder="John"
          />
          <TextField
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            isRequired={ true }
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
            direction="row"
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
            direction="row"
          />
          <SwitchField
            name="newsletter"
            label="Subscribe to the newsletter"
          />
          <CheckboxField
            name="personalInfoAgree"
            label="I hereby consent to Mediatool using my personal information for further processing"
          />
          <RadioGroupField
            name="userRole"
            label="Choose your role"
            direction="row"
            validate={ { validate: (value: string) => value !== 'admin' || 'Sorry, but we don\' currently support admin accounts' } }
          >
            <Radio value="user">User</Radio>
            <Radio value="editor">Editor</Radio>
            <Radio value="admin">Admin</Radio>
          </RadioGroupField>
          <FlipButtonGroupField name="foods" label="Select the foods you enjoy" isMulti={ true } variant="brand">
            <FlipButton value="pizza">Pizza</FlipButton>
            <FlipButton value="hamburger">Button</FlipButton>
            <FlipButton value="steak">Steak</FlipButton>
          </FlipButtonGroupField>
          <FlipButtonGroupField name="fontSize" label="Choose your font size in app" icon={ TextSolid } size="sm">
            <FlipButton value="sm">xs</FlipButton>
            <FlipButton value="md">sm</FlipButton>
            <FlipButton value="lg">md</FlipButton>
            <FlipButton value="xl">lg</FlipButton>
          </FlipButtonGroupField>
          <TextareaField
            name="review"
            label="Please write a short description of your work experience"
          />
          <DatePickerField
            name="date"
            label="Date"
            direction="row"
          />
          <FilePickerField
            name="image"
            label="Select Image"
            confirmDelete={ true }
          />
          <MultiFilePickerField
            name="multiImage"
            label="Select multiple images"
          />

          <Button type="submit" variant="success">Submit</Button>
          <pre>
            <Code p={ 4 }>{ JSON.stringify(watch(), null, 2) }</Code>
          </pre>
        </Stack>
      ) }
    </Form>
  )
}
