import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ActionMeta,
  MultiValue,
  OnChangeValue,
} from 'chakra-react-select'
import { DndContext, DragEndEvent, DragOverEvent, closestCenter } from '@dnd-kit/core'
import { restrictToParentElement } from '@dnd-kit/modifiers'
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'
import { Select } from './select'
import { Option, SelectProps } from './types'
import { SortableMultiValue, SortableMultiValueRemove } from './sortable-select-values'

export interface SortableSelectProps<T extends Option>
  extends Omit<SelectProps<T, true>, 'isMulti'> {
  /** The currently selected options */
  value?: T[] | string[]
  /** Callback when the order or selection changes */
  onChange?: (selected: MultiValue<T>, event: ActionMeta<T>) => void
}

const isOptionArray = <T extends Option>(value: unknown): value is T[] =>
  Array.isArray(value) &&
  value.length > 0 &&
  typeof value[0] === 'object' &&
  value[0] !== null &&
  'value' in value[0]

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) &&
  value.length > 0 &&
  typeof value[0] === 'string'

/**
 * SortableSelect component that provides drag-and-drop reordering for multi-select options.
 * It is built on top of the Select component with @dnd-kit integration.
 *
 * Drag-and-drop reordering.
 * Supports both string arrays and option objects as values.
 * Preserves order from value prop (not options order).
 * Works seamlessly with react-hook-form.
 * All Select component props and styling supported.
 *
 * @see Select
 * @see MultiSort
 * @see Draggable
 * @see {@link https://northlight.dev/reference/sortable-select}
 *
 * @example (Example)
 * ## Basic Usage with String Array
 * (?
 * +
 * const MyComponent = () => {
 *   const [selected, setSelected] = useState(['USD', 'EUR', 'GBP'])
 *
 *   const currencyOptions = [
 *     { label: 'US Dollar', value: 'USD' },
 *     { label: 'Euro', value: 'EUR' },
 *     { label: 'British Pound', value: 'GBP' },
 *     { label: 'Japanese Yen', value: 'JPY' },
 *   ]
 *
 *   return (
 *     <SortableSelect
 *       options={currencyOptions}
 *       value={selected}
 *       onChange={(value) => setSelected((value || []).map(v => v.value))}
 *       placeholder="Select currencies"
 *     />
 *   )
 * }
 *
 * render(<MyComponent />)
 * ?)
 *
 * @example (Example)
 * ## Usage with Option Objects
 * (?
 * +
 * const MyComponent = () => {
 *   const [selected, setSelected] = useState([
 *     { label: 'Apple', value: 'apple' },
 *     { label: 'Banana', value: 'banana' }
 *   ])
 *
 *   const fruitOptions = [
 *     { label: 'Apple', value: 'apple' },
 *     { label: 'Banana', value: 'banana' },
 *     { label: 'Cherry', value: 'cherry' },
 *     { label: 'Date', value: 'date' },
 *   ]
 *
 *   return (
 *     <SortableSelect
 *       options={fruitOptions}
 *       value={selected}
 *       onChange={(value) => setSelected(value || [])}
 *     />
 *   )
 * }
 *
 * render(<MyComponent />)
 * ?)
 *
 * @example (Example)
 * ## React Hook Form Integration
 * _Use with react-hook-form for controlled form state with reordering_
 * (?
 * +
 * const tagOptions = [
 *   { label: 'React', value: 'react' },
 *   { label: 'TypeScript', value: 'typescript' },
 *   { label: 'JavaScript', value: 'javascript' },
 *   { label: 'Node.js', value: 'nodejs' },
 * ]
 *
 * const MyFormFields = () => {
 *   const { setValue } = useFormContext()
 *   const selectedTags = useWatch({ name: 'tags' })
 *
 *   const handleChange = (value, actionMeta) => {
 *     const tags = (value || []).map(v => v.value)
 *     setValue('tags', tags, {
 *       shouldDirty: true,
 *       shouldValidate: true,
 *     })
 *   }
 *
 *   return (
 *     <SortableSelect
 *       name="tags"
 *       options={tagOptions}
 *       value={selectedTags}
 *       onChange={handleChange}
 *     />
 *   )
 * }
 *
 * const MyForm = () => (
 *   <Form
 *     initialValues={{ tags: ['react'] }}
 *     onSubmit={(values) => console.log(values)}
 *   >
 *     {() => <MyFormFields />}
 *   </Form>
 * )
 *
 * render(<MyForm />)
 * ?)
 *
 * @example (Example)
 * ## Handling Different Actions
 * (?
 * +
 * const MyComponent = () => {
 *   const [selected, setSelected] = useState(['red'])
 *
 *   const options = [
 *     { label: 'Red', value: 'red' },
 *     { label: 'Green', value: 'green' },
 *     { label: 'Blue', value: 'blue' },
 *   ]
 *
 *   const handleChange = (value, actionMeta) => {
 *     const { action, removedValue, option } = actionMeta
 *
 *     switch (action) {
 *       case 'select-option':
 *         console.log('Added:', option)
 *         break
 *       case 'remove-value':
 *         console.log('Removed:', removedValue)
 *         break
 *       case 'clear':
 *         console.log('Reordered:', value?.map(v => v.value))
 *         break
 *     }
 *
 *     setSelected((value || []).map(v => v.value))
 *   }
 *
 *   return (
 *     <SortableSelect
 *       options={options}
 *       value={selected}
 *       onChange={handleChange}
 *     />
 *   )
 * }
 *
 * render(<MyComponent />)
 * ?)
 *
 * @example (Example)
 * ## Customizing Selected Options
 * _Customize the appearance of selected option pills while keeping drag functionality_
 * (?
 * +
 * const MyComponent = () => {
 *   const [selected, setSelected] = useState(['js', 'ts'])
 *
 *   const options = [
 *     { label: 'JavaScript', value: 'js' },
 *     { label: 'TypeScript', value: 'ts' },
 *     { label: 'Python', value: 'py' },
 *     { label: 'Rust', value: 'rust' },
 *   ]
 *
 *   return (
 *     <SortableSelect
 *       options={options}
 *       value={selected}
 *       onChange={(value) => setSelected((value || []).map(v => v.value))}
 *       components={{
 *         MultiValueLabel: (props) => (
 *           <HStack spacing={1} px={2}>
 *             <Icon as={Code} />
 *             <Text>{props.children}</Text>
 *           </HStack>
 *         )
 *       }}
 *       chakraStyles={{
 *         multiValue: (styles) => ({
 *           ...styles,
 *           backgroundColor: 'purple.100',
 *           borderRadius: 'full',
 *         }),
 *       }}
 *     />
 *   )
 * }
 *
 * render(<MyComponent />)
 * ?)
 *
 * @example (Example)
 * ## With Custom Tag Component
 * _Use customTag prop for simpler customization_
 * (?
 * +
 * const customTag = ({ label }) => (
 *   <HStack spacing={1} px={2} py={1} bg="blue.50" borderRadius="md">
 *     <Badge colorScheme="blue" variant="solid" fontSize="xs">NEW</Badge>
 *     <Text fontSize="sm" fontWeight="medium">{label}</Text>
 *   </HStack>
 * )
 *
 * const MyComponent = () => {
 *   const [selected, setSelected] = useState(['react'])
 *
 *   return (
 *     <SortableSelect
 *       options={[
 *         { label: 'React', value: 'react' },
 *         { label: 'Vue', value: 'vue' },
 *         { label: 'Angular', value: 'angular' },
 *       ]}
 *       value={selected}
 *       onChange={(value) => setSelected((value || []).map(v => v.value))}
 *       customTag={customTag}
 *     />
 *   )
 * }
 *
 * render(<MyComponent />)
 * ?)
 *
 * @example (Example)
 * ## Disabled State
 * (?
 * <SortableSelect
 *   options={[
 *     { label: 'Admin', value: 'admin' },
 *     { label: 'Editor', value: 'editor' },
 *     { label: 'Viewer', value: 'viewer' },
 *   ]}
 *   value={['viewer']}
 *   onChange={(value) => console.log('Changed:', value)}
 *   isDisabled={true}
 *   placeholder="Select items (disabled)"
 * />
 * ?)
 *
 * @example (Example)
 * ## With Styling
 * (?
 * <SortableSelect
 *   options={[
 *     { label: 'Apple', value: 'apple' },
 *     { label: 'Banana', value: 'banana' },
 *     { label: 'Orange', value: 'orange' },
 *     { label: 'Pear', value: 'pear' },
 *   ]}
 *   value={['apple', 'banana']}
 *   onChange={(value) => console.log('Changed:', value)}
 *   colorScheme="blue"
 *   chakraStyles={{
 *     multiValue: (styles) => ({
 *       ...styles,
 *       backgroundColor: 'red.100',
 *     }),
 *   }}
 * />
 * ?)
 */
export const SortableSelect = <T extends Option>({
  value,
  onChange,
  components: customComponents,
  options,
  ...rest
}: SortableSelectProps<T>) => {
  const matchedValue = useMemo(() => {
    if (!value || !Array.isArray(value) || value.length === 0) return []

    const optionsArray = Array.isArray(options) ? options : []

    if (isOptionArray<T>(value)) {
      return value.filter((item) => item != null)
    }

    if (isStringArray(value)) {
      return value.reduce<T[]>((acc, val) => {
        const found = optionsArray.find((opt) => opt.value === val)
        if (found !== undefined) {
          acc.push(found)
        }
        return acc
      }, [])
    }

    return []
  }, [ value, options ])

  const [ activeItems, setActiveItems ] = useState<T[]>(matchedValue)
  const activeItemsRef = useRef<T[]>(activeItems)

  useEffect(() => {
    setActiveItems(matchedValue)
    activeItemsRef.current = matchedValue
  }, [ matchedValue ])

  useEffect(() => {
    activeItemsRef.current = activeItems
  }, [ activeItems ])

  const handleChange = (selectedOptions: OnChangeValue<T, true>, actionMeta: ActionMeta<T>) => {
    if (onChange) {
      onChange(selectedOptions, actionMeta)
    }
  }

  const handleDragOver = useCallback(
    (event: DragOverEvent) => {
      const { active, over } = event

      if (!active || !over || active.id === over.id) return

      setActiveItems((items) => {
        const oldIndex = items.findIndex((item) => item.value === active.id)
        const newIndex = items.findIndex((item) => item.value === over.id)

        if (oldIndex !== -1 && newIndex !== -1) {
          return arrayMove(items, oldIndex, newIndex)
        }
        return items
      })
    },
    []
  )

  const handleDragEnd = useCallback(
    (_event: DragEndEvent) => {
      if (!onChange) return

      const finalOrder = activeItemsRef.current
      if (finalOrder.length === 0) return

      const orderChanged = !matchedValue.every((item, index) =>
        item.value === finalOrder[index]?.value
      )

      if (orderChanged) {
        onChange(finalOrder as MultiValue<T>, {
          action: 'clear',
          name: rest.name,
        } as ActionMeta<T>)
      }
    },
    [ matchedValue, onChange, rest.name ]
  )

  const mergedComponents = {
    ...customComponents,
    MultiValue: SortableMultiValue,
    MultiValueRemove: SortableMultiValueRemove,
  }

  const sortableItems = activeItems.map((item) => item.value)

  return (
    <DndContext
      modifiers={ [ restrictToParentElement ] }
      onDragOver={ handleDragOver }
      onDragEnd={ handleDragEnd }
      collisionDetection={ closestCenter }
    >
      <SortableContext
        items={ sortableItems }
        strategy={ horizontalListSortingStrategy }
      >
        <Select
          isMulti={ true }
          options={ options }
          value={ activeItems }
          onChange={ handleChange }
          components={ mergedComponents }
          closeMenuOnSelect={ false }
          { ...rest }
        />
      </SortableContext>
    </DndContext>
  )
}
