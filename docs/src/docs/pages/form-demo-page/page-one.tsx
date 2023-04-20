import React from 'react'
import {
  Blinker,
  Box,
  ColorPickerField,
  DatePickerField,
  HStack,
  Heading,
  NumberInputField,
  SelectField,
  SimpleGrid,
  Stack,
  SwitchField,
  TextField,
  useFormContext,
  useWatch,
} from '@northlight/ui'

const PageOneFields = () => (
  <Stack spacing={ 8 }>
    <TextField
      name="firstName.nested"
      label="First Name"
      placeholder="John"
    />
    <SelectField
      name="sports"
      isRequired={ true }
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
    <DatePickerField
      name="date"
      label="Date"
      direction="row"
      isRequired={ true }
    />
    <ColorPickerField
      name="color"
      label="Select Color"
      direction="row"
    />
  </Stack>
)

export const PageOneSubscription = () => {
  const formValues = useWatch()
  const color = useWatch({ name: 'color' })

  const { formState: { errors } } = useFormContext()
  return (
    <Stack spacing={ 4 }>
      <HStack alignItems="start" overflow="hidden">
        <Stack>
          <Heading size="sm">Values</Heading>
          <Box fontSize="xs">
            <pre style={ { fontSize: 'xs' } }>
              { JSON.stringify(formValues, null, 2) }
            </pre>
          </Box>
        </Stack>
        <Stack>
          <Heading size="sm">Errors</Heading>
          <Box fontSize="xs">
            <pre style={ { fontSize: 'xs' } }>
              { JSON.stringify(errors, null, 2) }
            </pre>
          </Box>
        </Stack>
      </HStack>
      <Blinker size="lg" color={ color } />
    </Stack>
  )
}

export const PageOne = () => (
  <SimpleGrid columns={ 2 } gap={ 8 }>
    <PageOneFields />
    <PageOneSubscription />
  </SimpleGrid>
)
