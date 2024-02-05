import React, { useState } from 'react'
import { CreatableSelect } from 'chakra-react-select'
import type { Option } from '@northlight/ui'
import { PlusSolid } from '@northlight/icons'
import { Icon } from '@chakra-ui/react'
import type { CreatableSelectDropdownProps, CreationOption } from './types'
import { customComponents } from './custom-components'

/**
 * A dropdown component that allows users to select a value from given options
 * or create a new one if it doesn't exist.
 * @see {@link https://northlight.dev/reference/creatable-select-dropdown}
 *
 * @example (Example)
 * ##Select the best artist
 * (?
 * () => {
 *   const [artist, setArtist] = useState(null);
 *   const options = [
 *     { label: 'Scooter', value: 'scooter' },
 *     { label: 'Snoop Doggy Dogg', value: 'snoop-dogg' },
 *   ];
 *
 *   const handleOptionChange = (newOption) => {
 *     setArtist(newOption);
 *     // Perform additional actions with the selected or created option
 *   };
 *
 *   return (
 *     <Box align="left">
 *       <CreatableSelectDropdown
 *         standardOptions={options}
 *         onOptionChange={handleOptionChange}
 *         width="300px"
 *       />
 *       { artist && artist.value !== 'Add option...' && (
 *          <H3 py={8}>The best artist is: { artist.label }</H3>
 *        ) }
 *     </Box>
 *   );
 * }
 * ?)
 */

export const CreatableSelectDropdown = ({
  standardOptions,
  initialPlaceholder = 'Select or create...',
  addOptionPlaceholder = 'Enter text...',
  creationOption = {
    label: 'Add option...',
    value: 'Add option...',
    isCreation: true,
  },
  onOptionChange,
  width = '100%',
  variant = 'outline',
}: CreatableSelectDropdownProps) => {
  const [ selectedOption, setSelectedOption ] = useState<Option | null>(null)
  const [ newOptionText, setNewOptionText ] = useState('')
  const [ newOptionPlaceholder, setNewOptionPlaceholder ] = useState(initialPlaceholder)
  const [ createdOptions, setCreatedOptions ] = useState<Option[]>([])

  const handleInputChange = (newValue: string) => {
    setNewOptionText(newValue)
  }

  const handleCreateOption = () => {
    const newOptionTextLower = newOptionText.toLowerCase()
    const newOptionExists = standardOptions.some((option) =>
      option.value.toLowerCase() === newOptionTextLower)

    if (!newOptionExists) {
      const newOption = { label: newOptionText, value: newOptionText }
      setCreatedOptions((currentCreatedOptions) => [ ...currentCreatedOptions, newOption ])
      setSelectedOption(newOption)
      onOptionChange(newOption)
    }

    setNewOptionText('')
    setNewOptionPlaceholder(initialPlaceholder)
  }

  function isCreationOption (option: any): option is CreationOption {
    return option && typeof option.isCreation === 'string'
  }

  const handleChange = (option: Option | CreationOption | null) => {
    if (option === null) {
      return
    }
    if (isCreationOption(option)) {
      setNewOptionPlaceholder(addOptionPlaceholder)
      setSelectedOption(null)
    } else {
      setNewOptionPlaceholder(initialPlaceholder)
      setSelectedOption(option)
    }
    onOptionChange(option)
  }

  const handleKeyDown = (event: { key: string, preventDefault: () => void }) => {
    if (event.key === 'Enter' && newOptionText) {
      handleCreateOption()
      event.preventDefault()
    }
  }

  const combinedOptions = [ ...standardOptions, ...createdOptions ]

  const customOptions = [
    {
      ...creationOption,
      icon: <Icon as={ PlusSolid } color="brand" />,
    },
    ...combinedOptions,
  ]

  return (
    <CreatableSelect
      chakraStyles={ {
        container: (provided) => ({
          ...provided,
          width,
        }),
        option: (provided, { isSelected }) => ({
          ...provided,
          ...(isSelected && {
            color: 'black',
          }),
        }),
      } }
      components={ customComponents }
      options={ customOptions }
      value={ selectedOption }
      onChange={ handleChange }
      onInputChange={ handleInputChange }
      onKeyDown={ handleKeyDown }
      onCreateOption={ handleCreateOption }
      placeholder={ newOptionPlaceholder }
      inputValue={ newOptionText }
      useBasicStyles={ true }
      variant={ variant }
    />
  )
}
