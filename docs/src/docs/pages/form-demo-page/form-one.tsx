import React from 'react'
import { TextSolid } from '@northlight/icons'
import {
  Avatar,
  Button,
  CheckboxField,
  Code,
  DatePickerField,
  DateRangePickerField,
  FilePickerField,
  FlipButton,
  FlipButtonGroupField,
  Form,
  FormattedNumberInputField,
  HStack,
  MaskedTextInput,
  MultiFilePickerField,
  NumberInputField,
  P,
  Radio,
  RadioGroupField,
  SearchBarField,
  SelectField,
  Stack,
  SwitchField,
  TextField,
  TextareaField,
} from '@northlight/ui/ts'

interface Option {
  label: string
  value: string
}

const options: Option[] = [
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
]

interface UserType {
  label: string
  value: string
  image: string
}

const users: UserType[] = [
  { label: 'Magnus Ohlin', value: 'magnus', image: '...' },
  { label: 'Magnus Nilsson', value: 'magnus 2', image: '...' },
]

const loadOptions = async () => users
const customOption = ({ label }: UserType) => (
  <HStack spacing="2">
    <Avatar name={ label } variant="rounded" />
    <P>{ label }</P>
  </HStack>
)

export const FormOne = () => (
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
      teste: '',
      dateRange: '',
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
        <FormattedNumberInputField
          label="Impressions"
          name="formatted"
        />
        <SelectField
          name="experience"
          label="Years of work experience"
          options={ options }
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
          onlyAcceptPercentage={ true }
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
        <DateRangePickerField
          name="dateRange"
          label="Select start and end date"
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
        <SearchBarField
          name="users"
          label="Search users"
          isMulti={ true }
          loadOptions={ loadOptions }
          customOption={ customOption }
        />
        <Button type="submit" variant="success">Submit</Button>
        <pre>
          <Code p={ 4 }>{ JSON.stringify(watch(), null, 2) }</Code>
        </pre>
      </Stack>
    ) }
  </Form>
)
