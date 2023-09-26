import React from 'react'
import { concat, findIndex, identity, isEmpty, map, remove } from 'ramda'
import { Field } from '../form'
import { MultiFilePicker } from './multi-file-picker.tsx'
import { createFileObjectFromSrc, isFile, toBase64 } from './utils.ts'
import { FileFormat, MultiFilePickerFieldProps } from './types.ts'

/**
 * The multi file picker component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see MultiFilePicker
 * @see Field
 * @see {@link https://northlight.dev/reference/multi-file-picker-field}
 *
 * @example (Example)
 * ## Meant for uploading images in a form
 * Where they handled as base64 strings
 * (?
 * <Form initialValues={{images: []}}>
 * {({watch}) => (
 * <Stack>
 * <MultiFilePickerField name="images" />
 * <Code maxH="xs" overflowY="scroll">{JSON.stringify(watch(), null, 2)}</Code>
 * </Stack>
 * )}
 * </Form>
 *
 * ?)
 *
 */
export const MultiFilePickerField = ({
  name,
  label,
  direction,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  ...rest
}: MultiFilePickerFieldProps) => {
  const getFiles = (sources: string[]) => {
    const buffer = map((source) => ({
      type: 'jpg',
      src: source,
      name: '',
    }), sources)
    const formattedFiles = map((file) => (isFile(file)
      ? file : createFileObjectFromSrc(file)), buffer)
    return formattedFiles as FileFormat[]
  }

  return (
    <Field
      name={ name }
      label={ label }
      direction={ direction }
      isRequired={ isRequired }
      validate={ validate }
    >
      { ({ onChange, value }) => {
        const handleDelete = (file: FileFormat) => {
          const removedIndex = findIndex((src) => src === file.src, value)
          const newValues = remove(removedIndex, 1, value)
          onChange(newValues)
        }

        return (
          <MultiFilePicker
            onChange={ async (files: File[] | null) => {
              if (!isEmpty(files)) {
                const newFiles = files?.map(async (file) => toBase64(file))
                if (newFiles) {
                  Promise.all(newFiles).then((values) => {
                    onChange(concat(value, values))
                    onChangeCallback(values)
                  })
                }
              } else {
                onChange([])
                onChangeCallback([])
              }
            } }
            enablePreLoad={ false }
            enableSmartLoad={ false }
            deleteFile={ handleDelete }
            acceptFormat="image/*"
            editFileOptions={ { canEdit: true, canEditImage: true, canEditName: false } }
            confirmDelete={ false }
            files={ getFiles(value) }
            { ...rest }
          />
        )
      } }
    </Field>
  )
}
