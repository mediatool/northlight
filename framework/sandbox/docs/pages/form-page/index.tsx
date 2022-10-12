import React from 'react'
import {
  Box,
  Button,
  Code,
  Form,
  HStack,
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
        <strong>validate </strong>- This should be a function that
        returns an object with the form errors, look at form demo example 2
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
        <strong>enableReInitialize </strong>
        Just as in formik, this uses a useEffect hook to
        reinitalize the form every time the initialValues change using a deep compare
      </Text>
      <Text>
        <strong>methods </strong>
        - In the edge case that you need to initialize the form with the useForm
        hook outside of the Form component, <br />
        you can initalize the form as usual and pass down your custom methods as
        a prop.
      </Text>

      <HStack spacing={ 8 } alignItems="start">
        <Stack>
          <Text>
            <strong>Example 1</strong>
          </Text>
          <Text>This is recommended</Text>
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

        </Stack>
        <Stack>
          <Text>
            <strong>Example 2</strong>
          </Text>
          <Text>This accomplishes the same thing but with methods prop</Text>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `import { createValidator, convertValidation, useForm } from '@mediatool/ui'

const validation = [{
  prop: 'firstName',
  predicate: (value) => value === 'admin',
  error: 'Nice try'
}]

const methods = useForm({
  defaultValues: {firstName: ''},
  mode: 'onSubmit',
  resolver: (values) => {
    values,
    errors: convertValidation(createValidator(validation))
  }
})

<Form
  onSubmit={ (values) => { console.log(values) } }
  methods={ methods }
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

        </Stack>

      </HStack>
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
      <Box maxW="50%">
        <Text lineHeight="1.6">
          Both example 1 and example 2 yield the same above field, but the difference being in the scope of the state, in example 2 the form state can be accessed throughtout the entire component, and not just as a child within the { '<Form> tag' }. <br /> <br />Example 1 is still recommended however because it abstracts more away which makes it easier for future changes, example 2 should be used just when needed.
        </Text>
      </Box>
    </Stack>
  </Page>
)

export default FormPage
