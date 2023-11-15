import React from 'react'
import {
  Code,
  DateRangePickerField,
  Divider,
  Form,
  HStack,
  P,
  Stack,
  Text,
} from '@northlight/ui'
import { Page } from '../../components'

const DateRangePickerPage = () => (
  <Page
    title="Date range picker"
    subtitle="Date Range picker is based on react aria date range picker"
  >
    <Stack spacing={ { base: 2, md: 4 } }>
      <Form initialValues={ { date: null } } onSubmit={ () => {} }>
        { ({ watch }) => (
          <Stack spacing={ { base: 2, md: 4 } }>
            <P>Mediatool uses 2 date range pickers</P>
            <Stack spacing={ { base: 2, md: 4 } } direction={ { base: 'column', md: 'row' } }>
              <Stack spacing="4">
                <DateRangePickerField name="date" label="Advanced" mode="advanced" />
                <Code>
                  { '<DateRangePickerField name="date" label="Advanced" mode="advanced"/>' }
                </Code>
              </Stack>
              <Stack spacing="4">
                <DateRangePickerField name="date-simple" label="Simple" mode="simple" />
                <Code>
                  { '<DateRangePickerField name="date-simple" label="Simple" mode="simple"/>' }
                </Code>
              </Stack>
            </Stack>
            <P>The default is advanced</P>
            <Divider />
            <P>
              You can pass on custom formatting to date-picker via{ ' ' }
              <Text as="b">dateFormat</Text>
            </P>
            <DateRangePickerField
              name="formattedDate"
              label="Formatted date"
              dateFormat="dd.yyyy|mm"
            />
            <Code w="max-content">
              {
                  '<DateRangePickerField dateFormat="dd-yyyy|mm" name="formattedDate" label="Formatted date"/>'
                }
            </Code>
            <Divider />
            <P>
              You can restrain the available date range with min and max value
              prop
            </P>
            <DateRangePickerField
              name="restrained-date"
              label="With min and max"
              minValue="2022-12-01"
              maxValue="2023-01-23"
            />
            <P>
              Notice how the some menu options are hidden to
              prevent the user from going out the range
            </P>
            <Code w="max-content">
              {
                  '<DateRangePickerField name="restrained-date" label="With min and max" minValue="2022-12-01" maxValue="2023-01-23" />'
                }
            </Code>
            <Divider />
            <P>The date range picker comes in two variants</P>
            <HStack spacing={ { base: 2, md: 4 } } direction={ { base: 'column', md: 'row' } }>
              <DateRangePickerField variant="outline" label="outline" name="outline" />
              <DateRangePickerField variant="filled" label="filled" name="filled" />
            </HStack>
            <P>
              You can adjust the custom company fiscal year by setting the { ' ' }
              <Text as="b">fiscalStartMonth</Text> and <Text as="b">fiscalStartDay</Text> to the number of the month and the day counting after January,<br />
              ex: <Code>fiscalStartMonth=2</Code> starts the year at March
            </P>
            <DateRangePickerField
              name="fiscal-date"
              label="Pick a date"
              fiscalStartMonth={ 2 }
              fiscalStartDay={ 18 }
            />
            <P>
              Notice that QN changed to FQN and that two options, "this fiscal
              year" and "last fiscal year" were added
            </P>
            <Code p={ 4 }>{ JSON.stringify(watch(), null, 2) }</Code>
            <P>
              There is also a prop <b>firstDayOfWeek</b>, that adjusts the
              week day labels, can be either monday or sunday
            </P>
            <P>
              <Text as="b">isClearable</Text>
              - A prop that when true shows a cross button
              to the right of the date field
              that resets the date range. It also has a clear button on calendar UI.
            </P>
            <HStack spacing={ { base: 2, md: 4 } } direction={ { base: 'column', md: 'row' } }>
              <DateRangePickerField
                name="date-clearable"
                label="Clearable"
                mode="simple"
              />
              <DateRangePickerField
                name="date-not-clearable"
                label="Not clearable"
                mode="simple"
                isClearable={ false }
              />
            </HStack>
          </Stack>
        ) }
      </Form>
    </Stack>
  </Page>
)

export default DateRangePickerPage
