import React, { useEffect, useState } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '../input'
import { EditableInput as ChakraEditableInput, Editable, EditablePreview } from '../editable'
import { EditableProps } from './types'
import { EditableControls } from './editable-controls'

export const EditableText = ({
  size = 'md',
  value: inputValue,
  onSubmit,
  leftItem,
  ...rest
}: EditableProps) => {
  const [ value, setValue ] = useState(inputValue)
  const { input, preview } = useMultiStyleConfig('EditableText', { size })

  useEffect(() => {
    setValue(inputValue)
  }, [ inputValue ])

  return (
    <Editable
      isPreviewFocusable={ true }
      selectAllOnFocus={ false }
      value={ value }
      onChange={ (newValue) => setValue(newValue) }
      onSubmit={ onSubmit }
      { ...rest }
    >
      <InputGroup size={ size }>
        { leftItem && (
          <InputLeftElement>
            { leftItem }
          </InputLeftElement>
        ) }
        <Input
          as={ EditablePreview }
          sx={ preview }
        />
        <Input
          as={ ChakraEditableInput }
          size={ size }
          sx={ input }
        />
        <InputRightElement sx={ { width: 'min-content' } }>
          <EditableControls size={ size } />
        </InputRightElement>
      </InputGroup>
    </Editable>
  )
}
