import React from 'react'
import { Code, DateRangePickerField, Divider, Form, HStack, P, Stack } from '@northlight/ui'
import { Page } from '../../components'

const DateRangePickerPage = () => (
  <Page
    title="Date range picker"
    subtitle="Date Range picker is based on react aria date range picker"
  >
    <Stack w="lg">
      <Form initialValues={ { date: null } } onSubmit={ () => {} }>
        { ({ watch }) => (
          <Stack spacing={ 4 }>
            <P>Mediatool uses 2 date range pickers</P>
            <HStack spacing="4">
              <Stack spacing="4">
                <DateRangePickerField name="date" label="Advanced" mode="advanced" />
                <Code w="max-content">
                  { '<DateRangePickerField name="date" label="Advanced" mode="advanced"/>' }
                </Code>
              </Stack>
              <Stack spacing="4">
                <DateRangePickerField name="date-simple" label="Simple" mode="simple" />
                <Code w="max-content">
                  { '<DateRangePickerField name="date-simple" label="Simple" mode="simple"/>' }
                </Code>
              </Stack>
            </HStack>
            <P>The default isadvanced</P>
            <Divider />
            <P>
              You can pass on custom formatting to date-picker via{ ' ' }
              <b>dateFormat</b>
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
            <HStack>
              <DateRangePickerField variant="outline" label="outline" name="outline" />
              <DateRangePickerField variant="filled" label="filled" name="filled" />
            </HStack>
            <P>
              You can adjust the custom company fiscal year by setting the { ' ' }
              <b>fiscalStartMonth</b> to the number of the month, counting
              after January,
              ex fiscalStartMonth=2 starts the year at March
            </P>
            <DateRangePickerField
              name="fiscal-date"
              label="Pick a date"
              fiscalStartMonth={ 4 }
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
              <b>isClearable</b>
              - A prop that when true shows a cross button
              to the right of the date field
              that resets the date range
            </P>
          </Stack>
        ) }
      </Form>
    </Stack>
  </Page>
)

export default DateRangePickerPage
