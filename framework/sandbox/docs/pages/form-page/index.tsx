import React from 'react'
import {
  Button,
  Code,
  Form,
  Heading,
  Link,
  Stack,
  Text,
  TextField,
  createValidator,
} from '../../../../lib/components'
import { Page } from '../../components'

const validation = [
  {
    prop: 'firstName',
    predicate: (value: string) => value === 'admin',
    error: 'Nice try',
  },
]

const FormPage = () => (
  <Page
    title="Form"
    subtitle={ (
      <>
        <Heading as="h2" size="sm">
          The Form Component is an abstraction of react-hook-form,
        </Heading>
        <Text fontSize="sm" w="40%" lineHeight="3ch">
          It's main purpose is to initialize a form with the right state, and
          pass down the context to it's children to be used with our field
          components.
        </Text>
      </>
    ) }
  >
    <Stack spacing={ 4 }>
      <Heading size="md">
        Our forms are built on{ ' ' }
        <Link
          color="blue.600"
          _hover={ { textDecoration: 'underline' } }
          href="https://react-hook-form.com/api"
          isExternal={ true }
        >
          React Hook Form
        </Link>
      </Heading>
      <Text>
        Mediatool uses one <strong>{ '<Form />' }</strong> Component{ ' ' }
      </Text>
      <Code w="max-content" display="block" whiteSpace="pre">
        { `<Form
    initialValues={ {} }
    onSubmit={ () => {} }
  >
    {(methods) => {
      //FORM_FIELDS
    }}
</Form>
` }
      </Code>
      <Text>It takes the following props</Text>
      <Text>
        <strong>initialValues </strong>- this should contain an object with the
        name of the fields and their default values.
      </Text>
      <Text>
        <strong>onSubmit </strong>- This is a function on the form ( formValues
        ) { '=>' } void
      </Text>
      <Text>
        <strong>validate </strong>- This should be used together with
        createValidator to pass down validation, look at form demo example 2
        code to see how used
      </Text>
      <Text>
        <strong>formSettings </strong>
        - This can be used to customize the form, look at <br />
        <Link
          href="https://react-hook-form.com/api/useform"
          color="blue.600"
          _hover={ { textDecoration: 'underline' } }
          isExternal={ true }
        >
          React Hook Form useForm Docs
        </Link>
        , all the options you can pass down to useForm, you can pass down to
        formSettings,
      </Text>
      <Text>
        <strong>children </strong>
        - Any valid JSX, can also be types as a function on the form <br />
        (methods) { '=>' } (JSX), where methods contain the form context,
        and is equivalent to the return value of useForm
      </Text>
      <Text>
        <strong>methods </strong>
        - In the edge case that you need to initialize the form with the useForm
        hook outside of the Form component, <br />
        you can initalize the form as usual and pass down your custom methods as
        a prop.
      </Text>
      <Text>
        <strong>Example</strong>
      </Text>
      <Code w="max-content" display="block" whiteSpace="pre">
        { `import { createValidator } from '@mediatool/ui'

const validation = [{
  prop: 'firstName',
  predicate: (value) => value === 'admin',
  error: 'Nice try'
}]

<Form
  initialValues={ { firstName: '' } }
  onSubmit={ (values) => { console.log(values) } }
  formSettings={ {
    mode: 'onSubmit',
  } }
  validate={ createValidator(validation) }
>
  <HStack alignItems="end" w="300px">
    <TextField
      name="firstName"
      label="First Name"
      isRequired={ true }
    />
    <Button type="submit" variant="success">Validate</Button>
  </HStack>
</Form>
` }
      </Code>
      <Form
        initialValues={ { firstName: '' } }
        onSubmit={ () => {} }
        formSettings={ {
          mode: 'onSubmit',
        } }
        validate={ createValidator(validation) }
      >
        <Stack w="300px">
          <TextField name="firstName" label="First Name" isRequired={ true } />
          <Button type="submit" variant="success">
            Validate
          </Button>
        </Stack>
      </Form>
    </Stack>
  </Page>
)

export default FormPage
