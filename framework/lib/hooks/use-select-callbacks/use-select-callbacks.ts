import { ActionMeta, MultiValue, SingleValue } from 'chakra-react-select'
import { difference, last, map, prop } from 'ramda'
import { useRef } from 'react'
import { BasicOption, UseSelectCallbacksProps } from './types'

export const useSelectCallbacks = <T extends BasicOption>({
  onChange,
  onAdd,
  onRemove,
  isMulti,
  value,
}: UseSelectCallbacksProps<T>) => {
  const items = useRef<MultiValue<T> | SingleValue<T>>(value)

  const handleChange = (val: MultiValue<T> | SingleValue<T>, event: ActionMeta<T>) => {
    onChange(val, event)
    if (!isMulti) {
      onAdd((val as T).value)
    } else if ((val as T[]).length > (items.current as T[]).length) {
      onAdd(last(val as T[])?.value)
    } else {
      const removedItems = map(
        prop('value'),
        difference((items.current as T[]), val as T[])
      )
      onRemove(removedItems.length === 1 ? removedItems[0] : removedItems)
    }
    items.current = val
  }
  return handleChange
}
