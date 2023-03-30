import React, { useState } from 'react'
import { identity } from 'ramda'
import { Field } from '../form'
import { FilePicker } from './file-picker'
import { toBase64 } from './utils'
import { FilePickerFieldProps } from './types'

/**
 * The file picker component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see FilePicker
 * @see Field
 * @see {@link https://northlight.dev/reference/file-picker-field}
 *
 * @example (Example)
 * ## Meant for uploading images in a form
 * Where they handled as base64 string
 * (?
 * <Form initialValues={{image: ''}}>
 * {({watch}) => (
 * <Stack>
 * <FilePickerField name="image" />
 * <Code maxH="xs" overflowY="scroll">{JSON.stringify(watch(), null, 2)}</Code>
 * </Stack>
 * )}
 * </Form>
 *
 * ?)
 *
 */
export const FilePickerField = ({
  name,
  label,
  direction,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  ...rest
}: FilePickerFieldProps) => {
  const [ uploaded, setUploaded ] = useState(0)

  return (
    <Field
      name={ name }
      label={ label }
      direction={ direction }
      isRequired={ isRequired }
      validate={ validate }
    >
      { ({ onChange, value }) => (
        <FilePicker
          onChange={ async (file: File | null) => {
            if (file) {
              const formattedFile = await toBase64(file)
              setUploaded(1)
              onChange(formattedFile)
              onChangeCallback(formattedFile)
            } else {
              setUploaded(0)
              onChange(null)
              onChangeCallback(null)
            }
          } }
          value={ value }
          uploaded={ value ? 1 : uploaded }
          loadWithSpinner={ true }
          acceptFormat="image/*"
          { ...rest }
        />
      ) }
    </Field>
  )
}
