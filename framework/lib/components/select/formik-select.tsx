import React from 'react'
import { Select } from './select'
import { FormikSelectProps } from '../../types'

export const FormikSelect = ({
  placeholder,
  field,
  form,
  options,
  isMulti = false,
}: FormikSelectProps) => {
  const onChange = (selected: any) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? selected.map((item: any) => item.value)
        : selected?.value || null
    )
  }

  return (
    <Select
      name={ field.name }
      onChange={ onChange }
      placeholder={ placeholder }
      options={ options }
      isMulti={ isMulti }
    />
  )
}
