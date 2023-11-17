import React from 'react'
import { Code, Divider, Link, P, Stack, Text } from '@northlight/ui'
import { Page } from '../../components'

const FieldPage = () => (
  <Page title="Field" subtitle="Field is a generic field component">
    <Stack spacing={ 4 } maxW="container.md">
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
        top of the field, for accessibility.
        If no visible label is defined then an <b>aria-label</b> should be specified
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
        <strong>direction </strong>- This follows the chakra ui:s StackDirection type,
        "row", "row-reverse", "column", "column-reverse",
        changes the alignment between the field and the label
      </Text>
      <Text>
        <strong>isRequired </strong>- If the field is required
      </Text>
      <Text>
        <strong>Example</strong>
      </Text>
      <Code w="max-content" display="block" whiteSpace="pre">
        { `<TextField
 name="validaton"
 label="validation"
 direction="row"
 isRequired={ true }
 validate={{maxLength: { value: 2, message: "Max length 2!"}}}
/>` }
      </Code>
      <P>
        TextField, NumberInputField, Date Picker Field, Search bar field and Select field also take custom props{ ' ' }
        <b>inputLeftElement and inputRightElement</b>, which gives the
        possibility to add addons in an InputGroup
      </P>
      <Code w="max-content" display="block" whiteSpace="pre">
        { `<TextField
 name="validaton"
 label="validation"
 inputRightElement={<InputRightAddon bgColor="blue.50" children="/100" />}
/>` }
      </Code>
      <Divider />
      <b>
        All field components will take up the full width of their container,
        except: switch,
        checkbox and radio-group if they are rendered without a label
        since they have an intrinstic size.
      </b>
    </Stack>
  </Page>
)

export default FieldPage
