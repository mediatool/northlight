import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import {
  DeepPartial,
  FieldValues,
  FormProvider,
  Resolver,
  UseFormReturn,
  useForm,
} from 'react-hook-form'
import { always, equals } from 'ramda'
import { FormProps } from './types'
import { trimFormValues } from './trim-form-values'

/**
 * The context provider for handling state of components wrapped in field
 * @see Field
 * @see {@link https://northlight.dev/reference/form}
 *
 * @example (Example)
 * ## Basic
 * (?
 * <Form initialValues={{name: ''}} onSubmit={console.log}>
 * <TextField name="name" label="What is your name" />
 * </Form>
 * ?)
 *
 * @example (Example)
 * ## With form methods
 * The form context provider passes down a lot of methods for handling state
 * (?
 * <Form initialValues={{name: ''}}>
 * {({watch, reset }) => (
 * <Stack>
 * <TextField name="name" label="What is your name?"/>
 * <Button variant="danger" onClick={() => reset({})}>Reset</Button>
 * <Code>{JSON.stringify(watch(), null, 2)}</Code>
 * </Stack>
 * )}
 *
 * </Form>
 * ?)
 * You can view more form methods on the **<a href="https://react-hook-form.com/api/useform/" target="_blank">react hook form docs</a>**
 *  (everything that the useForm hooks returns)
 *
 * @example (Example)
 * ## Moving the form state outside of Form
 * (?
 * +

//This code could live in the backend
const submitValuesToBackend = (values) => {
  console.log({values})
  if(values.firstName !== 'Steve') {
    throw Error('We only allow people named Steve \;\)')
  }
}
const MyForm = () => (
<Form
  initialValues={ { firstName: '' } }
  onSubmit={ async (values, methods) => {
      try {
        await submitValuesToBackend(values)
      }
      catch (err) {
        methods.setError('firstName', { message: err.message })
      }
  } }
>
  <HStack alignItems="end" p="3">
    <TextField
      name="firstName"
      label="First Name"
      isRequired={ true }
    />
    <Button type="submit" variant="success">Validate</Button>
  </HStack>
</Form>

  )

render(<MyForm />)

 * ?)

@example (Example)
## Using a ref
You can move up the form state using a ref as well
(?
() => {
  const methods = useRef(null)

  return (
    <Stack>
    <Form
    ref={methods}
    initialValues={{name: ''}}
    >
    <TextField name="name" label="What is your name?" />
    </Form>
  <Button onClick={() => methods.current.reset({name: (Math.round(Math.random() * 100))})}>
  Get random number
  </Button>
    </Stack>

  )

}
?)

 */
export const Form = forwardRef(<FormValues extends FieldValues>({
  initialValues,
  onSubmit,
  children,
  validate,
  formSettings = { mode: 'onChange' },
  methods = undefined,
  enableReinitialize = false,
  shouldTrim = true,
  ...rest
}: FormProps<FormValues>, ref: React.Ref<UseFormReturn<FormValues>>) => {
  const customResolver: Resolver<FormValues, any> = (
    values,
    _context,
    _options
  ) => ({
    values,
    errors: validate(values),
  })

  const newMethods =
    methods ||
    useForm<FormValues>({
      defaultValues: initialValues as DeepPartial<FormValues>,
      resolver: validate ? customResolver : undefined,
      ...formSettings,
    })

  useImperativeHandle(ref, always(newMethods), [])

  if (enableReinitialize) {
    const initalValuesImage = useRef({})
    useEffect(() => {
      if (!equals(initalValuesImage.current, initialValues)) {
        newMethods?.reset(initialValues)
        initalValuesImage.current = initialValues
      }
    }, [ initialValues ])
  }

  const formatValues = (values: FormValues) => {
    if (!shouldTrim) {
      return values
    }

    return trimFormValues<FormValues>(values)
  }

  const handleSubmit = newMethods.formState.isValid
    ? newMethods.handleSubmit((values) =>
      onSubmit(formatValues(values), newMethods)
    )
    : (e: React.FormEvent<HTMLFormElement>) => {
      newMethods.trigger()
      e.preventDefault()
    }

  return (
    <FormProvider { ...newMethods } { ...rest }>
      <form style={ { width: '100%' } } onSubmit={ handleSubmit }>
        { typeof children === 'function' ? children(newMethods) : children }
      </form>
    </FormProvider>
  )
})
