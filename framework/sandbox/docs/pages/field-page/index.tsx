import React from 'react'
import { Code, Link, Stack, Text } from '../../../../lib/components'
import { Page } from '../../components'

const FieldPage = () => (
  <Page title="Field" subtitle="Field is a generic field component">
    <Stack spacing={ 4 } w="40%">
      <Text>
        Mediatool uses 1 generic <strong>{ '<Field>' }</strong> component
      </Text>
      <Code w="max-content" display="block" whiteSpace="pre">
        { `
<Field
  name={ NAME }
  label={ LABEL }
  validate={ VALIDATION }
  direction={ DIRECTION }
  isRequired={ IS_REQUIRED }
 >
  {(field) => (
    CUSTOM_COMPONENT
  )}
</Field>

` }
      </Code>
      <Text>
        The field compenent is a wrapper that hooks up a component to react hook
        form and chakra ui form control
      </Text>
      <Text>
        It then passes down the <strong>field</strong> state, that contains
        methods such as <strong>field.onChange </strong>
        and <strong>field.value</strong>
      </Text>
      <Text>
        All our form fields are built using { ' Field ' }, you can use it to hook
        up a custom component to be used in forms
      </Text>
      <Text>It takes the following props</Text>
      <Text>
        <strong>name </strong>- name is the name of the field, used to link the
        formState value to the right field
      </Text>
      <Text>
        <strong>label </strong>- descriptive text that appears next to, or on
        top of the field, required for accessibility
      </Text>
      <Text>
        <strong>validate</strong>- Custom validation specific to field, check
        out react hook form docs for specific field validation:
        <Link
          href="https://react-hook-form.com/api/useform/register"
          color="blue.600"
          _hover={ { textDecoration: 'underline' } }
          isExternal={ true }
        >
          { ' ' }
          React Hook Form Register(validation) docs
        </Link>

      </Text>
      <Text>
        <strong>direction </strong>- This is if the formlabel should be to the
        left ("row"), or on top of the field ("column")
      </Text>
      <Text>
        <strong>isRequired </strong>- If the field is required
      </Text>
      <Text><strong>Example</strong></Text>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<TextField
 name="validaton"
 label="validation"
 direction="row"
 isRequired={ true }
 validate={{maxLength: { value: 2, message: "Max length 2!"}}}
/>` }
      </Code>

    </Stack>
  </Page>
)

export default FieldPage
