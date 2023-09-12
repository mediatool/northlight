import React from 'react'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormLabel } from '../form-control'
import { Stack } from '../stack'
import { FieldProps } from './types'
import { useFormContext } from '../../hooks'
import { getFieldError } from '../../utils'

/**
 * Wraps children under form context
 * @see TextField
 * @see Form
 * @see {@link https://northlight.dev/reference/field}
 *
 * @example (Example)
 * ## Input example
 * (?
 * <Form initialValues={{name: ''}}>
 * <Box p="2">
 * <Field name="name" label="Input name">
 * {({value, onChange}) => (
 * <Input value={value} onChange={onChange} />
 * )}
 * </Field>
 * </Box>
 *
 * </Form>
 * ?)
 * <br />
 * As you can see the field component acts as a middleman to connect
 * any component to the form context, via a controlled value and onChange prop.
 *  Most of the common use cases for field,
 *  such as text input have been abstracted into their own components, for example _TextField_
 *
 * @example (Example)
 * ## Example with validation and form submition
 * (?
 * () => {
 * const toast = useToast()
 * const handleSubmit =(v) => {
 *  toast({title: 'Sent Message', description: `"${v.message}"`})
 * }
 * return (
 * <Form initialValues={{message: ''}} onSubmit={handleSubmit}>
 * <Stack p="2">
 * <Field
 * name="message"
 * label="Write email"
 * isRequired={true}
 * validate={{maxLength: {message: 'Message must be under 30 characters', value: 30}}}
 * >
 * {({value, onChange}) => (
 * <Textarea value={value} onChange={onChange} />
 * )}
 * </Field>
 * <Button type="submit" variant="brand">Send Message</Button>
 * </Stack>
 *
 * </Form>
 * )
 * }
 * ?)
 *
 * @example (Example)
 * ## Type-safety
 * There are multiple ways to provide types for
 * the field callback values. To ensure that each
 * component within the field receives the correct
 * value, it's essential to make the field aware
 * of the form state values. When the Field component
 * does not receive any types, the "value" callback
 * argument will have the type of "any".
 * <br /><br />
 * ### Passing down the control prop (Recommended)
 * (?
 * <Form initialValues={{username: 'Alex'}}>
 * {
 * ({ control }) => {
 * <Box p="2">
 * <Field name="username" label="Input name" control={ control }>
 * {({value, onChange}) => ( // "value" has type of "string"
 * <Input value={value} onChange={onChange} />
 * )}
 * </Field>
 * </Box>
 * }
 * }
 * </Form>
 * ?)
 * <br /><br />
 * ### Specifying generic arguments
 * You can also specify generic arguments on the Field
 * component to ensure that "value" has a valid type.
 * The passed generic type combined with the valid
 * "name" property ensures that "value" has the expected
 * type received from the generic type:
 * `<Field<MyFormBody> name="username">...</Field>`
 */

export function Field<
  FormValues extends FieldValues = FieldValues,
  FieldName extends FieldPath<FormValues> = FieldPath<FormValues>
> ({
  name,
  label,
  children,
  direction = 'column',
  isRequired = false,
  noLabelConnection = false,
  validate,
  control: passedControl,
  ...rest
}: FieldProps<FormValues, FieldName>) {
  const methods = useFormContext<FormValues>()
  const { formState: { errors } } = methods
  const control = passedControl ?? methods.control

  const fieldError = getFieldError<FormValues>(name, errors)

  return (
    <FormControl isInvalid={ !!fieldError } isRequired={ isRequired }>
      <Stack
        spacing="auto"
        direction={ direction }
        alignItems={ direction === 'column' ? 'stretch' : 'center' }
        { ...rest }
      >
        { label && (
          <FormLabel htmlFor={ noLabelConnection ? undefined : name } mb={ 1 }>
            { label }
          </FormLabel>
        ) }
        <Controller
          name={ name }
          control={ control }
          rules={ validate }
          render={ ({ field }) => children(field, methods) }
        />
      </Stack>
      <FormErrorMessage>
        { fieldError && (fieldError?.message as string) }
      </FormErrorMessage>
    </FormControl>
  )
}
