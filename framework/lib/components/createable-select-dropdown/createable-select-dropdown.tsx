import React, { useMemo, useRef, useState } from 'react'
import { ActionMeta, CreatableSelect } from 'chakra-react-select'
import type { Option, SingleValue } from '@northlight/ui'
import { PlusSolid } from '@northlight/icons'
import { Box, Icon, useOutsideClick } from '@chakra-ui/react'
import { isNil } from 'ramda'
import { customSelectStyles } from '../../theme/components/select/custom-select'
import type { CreatableSelectDropdownProps, CreationOption } from './types'
import { customComponents } from './custom-components'

/**
 * A dropdown component that allows users to select a value from given options
 * or create a new one if it doesn't exist.
 * @see {@link https://northlight.dev/reference/creatable-select-dropdown}
 *
 * @example (Example)
 * (?
 * () => {
 *   const [artist, setArtist] = useState(null);
 *   const [element, setElement] = useState({ label: 'Technique', value: 'technique' })
 *   const someOptions = [
 *     { label: 'Scooter', value: 'scooter' },
 *     { label: 'Snoop Doggy Dogg', value: 'snoop-dogg' },
 *   ];
 *
*   const someOtherOptions = [
 *     { label: 'Vision', value: 'vision' },
 *     { label: 'Technique', value: 'technique' },
 *     { label: 'Expression', value: 'expression' }
 *   ];
 *
 *   return (
 *     <VStack gap={10} alignItems={"flex-start"}>
 *       <Box align="left">
 *         <H1>Basic example</H1>
 *         <H3>Select the best artist</H3>
 *         <CreatableSelectDropdown
 *           standardOptions={someOptions}
 *           onOptionChange={setArtist}
 *           width="300px"
 *         />
 *         {artist && artist.value !== 'Add option...' && (
 *           <H3 py={8}>The best artist is: {artist.label}</H3>
 *         )}
 *       </Box>
 *       <Box align="left">
 *         <H1>Pre-selected option</H1>
 *         <H3>What is the quintessential element of an exceptional artisan?</H3>
 *         <CreatableSelectDropdown
 *           standardOptions={someOtherOptions}
 *           onOptionChange={setElement}
 *           width="300px"
 *           initialValue="technique"
 *         />
 *         {element && element.value !== 'Add option...' && (
 *           <H3 py={8}>
 *             {element.value === 'vision' && (
 *               'The artist\'s vision shapes their creative world.'
 *             )}
 *             {element.value === 'technique' && (
 *               'Technique is the legacy\'s bedrock.'
 *             )}
 *             {element.value === 'expression' && (
 *               'Expression communicates the artist\'s inner voice.'
 *             )}
 *             {element.value !== 'vision' &&
 *                element.value !== 'technique' &&
 *                element.value !== 'expression' && (
 *               'Absent the selection of legitimate alternatives.'
 *              )}
 *           </H3>
 *         )}
 *       </Box>
 *     </VStack>
 *   );
 * }
 * ?)
 */

export const CreatableSelectDropdown = <T extends string = string> ({
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
  initialValue,
}: CreatableSelectDropdownProps<T>) => {
  const initialSelectedOption = useMemo(() => {
    if (isNil(initialValue)) {
      return null
    }
    return standardOptions.find((option) => option.value === initialValue) ?? null
  }, []
  )

  const [ selectedOption, setSelectedOption ] =
    useState<Option | null>(initialSelectedOption)
  const [ newOptionText, setNewOptionText ] = useState('')
  const [ newOptionPlaceholder, setNewOptionPlaceholder ] = useState(initialPlaceholder)
  const [ createdOptions, setCreatedOptions ] = useState<Option[]>([])

  function isCreationOption (option: any): option is CreationOption {
    return option && typeof option.isCreation === 'boolean'
  }

  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick({
    ref,
    handler: () => {
      if (isCreationOption(selectedOption)) {
        setSelectedOption(initialSelectedOption)
        setNewOptionPlaceholder(initialPlaceholder)
      }
    },
  })

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

  const handleChange = (
    newValue: SingleValue<Option>,
    _actionMeta: ActionMeta<Option>) => {
    const option = newValue

    if (option === null) {
      return
    }
    if (isCreationOption(option)) {
      setNewOptionPlaceholder(addOptionPlaceholder)
    } else {
      setNewOptionPlaceholder(initialPlaceholder)
    }
    setSelectedOption(option)
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
    <Box ref={ ref }>
      <CreatableSelect
        chakraStyles={ {
          ...customSelectStyles,
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
        isMulti={ false }
        onInputChange={ handleInputChange }
        onKeyDown={ handleKeyDown }
        onCreateOption={ handleCreateOption }
        placeholder={ newOptionPlaceholder }
        inputValue={ newOptionText }
        useBasicStyles={ true }
        variant={ variant }
      />

    </Box>
  )
}
