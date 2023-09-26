import { ActionMeta, MultiValue, SingleValue } from 'chakra-react-select'
import { difference, isNil, last, map, prop } from 'ramda'
import { useRef } from 'react'
import { BasicOption, UseSelectCallbacksProps } from './types.ts'

export const useSelectCallbacks = <
  T extends BasicOption,
  K extends boolean = false
>({
    onChange,
    onAdd,
    onRemove,
    isMulti = false,
    value,
  }: UseSelectCallbacksProps<T, K>) => {
  const items = useRef<MultiValue<T> | SingleValue<T>>(value)

  const handleChange = (
    val: K extends true ? MultiValue<T> : SingleValue<T>,
    event: ActionMeta<T>
  ) => {
    onChange(val, event)
    if (!isMulti && !isNil(val)) {
      onAdd((val as T).value)
    } else if (
      !isNil(val) &&
      (val as T[]).length > (items.current as T[]).length
    ) {
      onAdd(last(val as T[])?.value)
    } else {
      const removedItems = map(
        prop('value'),
        difference(items.current as T[], val as T[])
      )
      onRemove(removedItems.length === 1 ? removedItems[0] : removedItems)
    }
    items.current = val
  }
  return handleChange
}
