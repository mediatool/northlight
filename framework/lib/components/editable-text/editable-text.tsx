import React, { useEffect, useState } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '../input'
import { EditableInput as ChakraEditableInput, Editable, EditablePreview } from '../editable'
import { EditableProps } from './types'
import { EditableControls } from './editable-controls'

/**
 * Used to safely modify text with default or previousely set value
 * @see {@link https://northlight.dev/reference/editable-text}
 *
 * @example (Example)
 * ##Edit password
 * (?
 * () => {
 * const [v, setV] = useState('123456789')
 * return (
 * <Box p="2">
 * <EditableText value={v} onSubmit={setV} />
 * </Box>
 *
 * )
 * }
 * ?)
 *
 *
 */
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
