import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ActionMeta, CreatableSelect, SingleValue } from 'chakra-react-select'
import { PlusSolid } from '@northlight/icons'
import { Box, Icon } from '@chakra-ui/react'
import { any, isEmpty, toLower, trim } from 'ramda'
import { customSelectStyles } from '../../theme/components/select/custom-select'
import type { CreatableSelectDropdownProps, CreationOption } from './types'
import { customComponents } from './custom-components'
import { EditableText } from '../editable-text'
import type { Option } from '../select/types'

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
 *           value={artist ? artist.value : undefined}
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
 *           value={element ? element.value : undefined}
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

const CREATION_OPTION_VALUE = 'add_field'

export const CreatableSelectDropdown = <T extends string = string>({
  standardOptions,
  initialPlaceholder = 'Select or create...',
  addOptionPlaceholder = 'Select or create...',
  creationOption = {
    label: 'Add field',
    value: CREATION_OPTION_VALUE,
    isCreation: true,
  },
  onOptionChange,
  variant = 'outline',
  defaultValue,
  value,
  menuPlacement = 'bottom',
  ...restProps
}: CreatableSelectDropdownProps<T>) => {
  const [ selectedOption, setSelectedOption ] = useState<Option | null>(() => {
    const targetValue = value ?? defaultValue ?? null
    return targetValue
      ? standardOptions.find((option) => option.value === targetValue) ?? null
      : null
  })

  const [ newOptionPlaceholder, setNewOptionPlaceholder ] =
    useState(initialPlaceholder)
  const [ createdOptions, setCreatedOptions ] = useState<Option[]>([])
  const [ createNewOption, setCreateNewOption ] = useState<boolean>(false)
  const [ addFieldInputValue, setAddFieldInputValue ] = useState<string>('')

  function isCreationOption (option: any): option is CreationOption {
    return option && typeof option.isCreation === 'boolean'
  }

  const ref = useRef<HTMLDivElement>(null)

  const checkIfNewOptionTextExistsInOptions = (
    string: string,
    options: Option[]
  ) => any((option) => toLower(option.value) === string, options)

  const handleCreateOption = (newOptionTextString: string) => {
    setCreateNewOption(true)

    if (isEmpty(trim(newOptionTextString))) {
      return
    }

    const newOptionTextLower = toLower(newOptionTextString)

    const newOptionExistsInStandardOptions =
      checkIfNewOptionTextExistsInOptions(newOptionTextLower, standardOptions)

    const newOptionExistsInCreatedOptions = checkIfNewOptionTextExistsInOptions(
      newOptionTextLower,
      createdOptions
    )

    if (!newOptionExistsInCreatedOptions && !newOptionExistsInStandardOptions) {
      const newOption = {
        label: newOptionTextString,
        value: newOptionTextString,
      }
      setCreatedOptions((currentCreatedOptions) => [
        ...currentCreatedOptions,
        newOption,
      ])
      setSelectedOption(newOption)
      onOptionChange(newOption)
    }
    setNewOptionPlaceholder(initialPlaceholder)
  }

  const handleChange = (
    newValue: SingleValue<Option>,
    _actionMeta: ActionMeta<Option>
  ) => {
    const option = newValue

    if (newValue?.isCreation) {
      setCreateNewOption(true)
    }

    if (option == null) {
      return
    }

    if (isCreationOption(option)) {
      setNewOptionPlaceholder(addOptionPlaceholder)
    } else {
      setNewOptionPlaceholder(initialPlaceholder)
    }
    if (option.value !== CREATION_OPTION_VALUE) {
      setSelectedOption(option)
    }
    onOptionChange(option)
  }

  const combinedOptions = useMemo(
    () => [ ...standardOptions, ...createdOptions ],
    [ standardOptions, createdOptions ]
  )

  const customOptions = [
    {
      ...creationOption,
      icon: <Icon as={ PlusSolid } color="brand" />,
    },
    ...combinedOptions,
  ]

  useEffect(() => {
    const newSelectedOption =
      combinedOptions.find((option) => option.value === value) ?? null

    if (selectedOption?.value !== newSelectedOption?.value) {
      setSelectedOption(newSelectedOption)
    }
  }, [ value, combinedOptions ])

  return (
    <Box ref={ ref } w="sm" maxW="full">
      { createNewOption && (
        <EditableText
          value={ addFieldInputValue }
          startWithEditView={ true }
          onChange={ (v) => {
            setAddFieldInputValue(v)
          } }
          submitOnBlur={ false }
          onCancel={ () => {
            setAddFieldInputValue('')
            setCreateNewOption(false)
          } }
          onSubmit={ (v) => {
            handleCreateOption(v)
            setCreateNewOption(false)
          } }
          variant="brand"
          sx={ {
            minWidth: '100%',
            width: '100%',
          } }
        />
      ) }
      { !createNewOption && (
        <CreatableSelect
          menuPlacement={ menuPlacement }
          chakraStyles={ {
            ...customSelectStyles,
            container: (provided) => ({
              ...provided,
              width: '100%',
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
          onCreateOption={ (v) => {
            setCreateNewOption(true)
            setAddFieldInputValue(v)
          } }
          placeholder={ newOptionPlaceholder }
          useBasicStyles={ true }
          variant={ variant }
          isDisabled={ restProps.isDisabled }
        />
      ) }
    </Box>
  )
}
