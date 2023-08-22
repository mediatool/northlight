import React, { FunctionComponent, useMemo, useRef } from 'react'
import {
  Select as ChakraReactSelect,
  GroupBase,
  OptionsOrGroups,
} from 'chakra-react-select'
import { Box } from '@chakra-ui/react'
import { equals, identity, is } from 'ramda'
import { Option, SelectProps } from './types'
import { customSelectStyles } from '../../theme/components/select/custom-select'
import { useSelectCallbacks } from '../../hooks'
import { getComponents } from '../search-bar/get-components'

/**
 * Select component that provides a customizable and accessible select input.
 * It is built on top of Chakra UI and Chakra React Select components.
 *
 * @see SearchBar
 * @see {@link https://northlight.dev/reference/select}
 *
 * @example (Example)
 * ## Single Select
 * (?
 * <Select
 *   options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]}
 *   onChange={(value, action) => console.log('Selected:', value)}
 * />
 * ?)
 *
 * @example (Example)
 * ## Clearable Select
 * (?
 * <Select
 *   options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]}
 *   onChange={(value, action) => console.log('Selected:', value)}
 *   isClearable={ true }
 * />
 * ?)
 *
 * @example (Example)
 * ## Multi select
 * (?
 * <Select
 *   options={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]}
 *   onChange={(value, action) => console.log('Selected:', value)}
 *   isMulti
 * />
 * ?)
 *
 * @example (Example)
 * ## Event meta
 * _There is a second argument passed to the handlechange that can be useful
 * for knowing which elements where adding/removed_
 * (?
 * () => {
 *   const handleChange = (val, e) => {
    switch (e.action) {
      case 'select-option':
        //on add value
        console.log(e.option)
        break
      case 'pop-value':
        //on remove value
        console.log(e.removedValue.categoryKey)
        break
      default:
        break
    }
  }
 *  return <Select onChange={handleChange} options={[{label: '1', value: '1'}]} isMulti={true}/>
 *
 * }
 * ?)
 *
 * @example (Example)
 * ##Customizing
 * There are two special props for easy customization
 * * customOption
 * * customTag
 *
 * This are themselves react components
 * (?
+const customOption = ({ label }) => (
  <HStack>
    <Avatar name={label} />
    <P>{label}</P>
  </HStack>
);

const customTag = ({ label }) => {
  const [ isIncluded, setIsIncluded ] = useState(true)
  const toggle = () => setIsIncluded((prev) => !prev)

  return (
    <Flex>
      <Button
        size="xs"
        onClick={ toggle }
        onMouseDown={ (e) => e.stopPropagation() }
      >
        { isIncluded ? 'Include' : 'Exclude' }
      </Button>
      <Tag>{ label }</Tag>
    </Flex>
  )
}

const CustomSelect = () => (
  <Select
  customOption={customOption}
          customTag={ customTag }
          isMulti={true}
    options={[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ]}

  />
);

render(<CustomSelect />);
 *
 * ?)
  *
 *
 * @example (Example)
 * ## Testing
 * You can grab the test id for the select by
 * **screen.getByTestId('custom-testid)
 * .children[0].children[2].children[0].children[1].children[0]**
 * (?
 * <Select
  * data-testid="custom-test-id"
 * />
 * ?)
*/
export function Select<T extends Option> ({
  options,
  isMulti = false,
  onChange = identity,
  onAdd = identity,
  onRemove = identity,
  isLoading,
  loadingList = () => null,
  'data-testid': testId,
  customOption = null,
  customTag = null,
  value,
  icon,
  ...rest
}: SelectProps<T>) {
  const CustomSelect = ChakraReactSelect as FunctionComponent<SelectProps<T>>
  const handleChange = useSelectCallbacks<T>({
    onChange,
    onAdd,
    onRemove,
    isMulti,
    value: is(Array, value) ? (value as T[]) : [],
  })

  const customComponents = getComponents<T>()

  const prevOptions = useRef<OptionsOrGroups<T, GroupBase<T>> | undefined>(
    options
  )
  const renderedOptions = useMemo(() => {
    if (!equals(prevOptions.current, options)) {
      prevOptions.current = options
    }
    return prevOptions.current
  }, [ options ])

  return (
    <Box w="full" data-testid={ testId }>
      <CustomSelect
        isMulti={ isMulti }
        options={ renderedOptions }
        useBasicStyles={ true }
        closeMenuOnSelect={ !isMulti }
        hideSelectedOptions={ false }
        isClearable={ false }
        onChange={ handleChange }
        selectedOptionStyle="check"
        chakraStyles={ customSelectStyles }
        isLoading={ isLoading }
        { ...(isLoading && { components: { MenuList: loadingList } }) }
        value={ value }
        customOption={ customOption }
        customTag={ customTag }
        icon={ icon }
        components={ customComponents }
        { ...rest }
      />
    </Box>
  )
}
