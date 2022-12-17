import { ActionMeta, MultiValue, SingleValue } from 'chakra-react-select'
import { difference, last } from 'ramda'
import { useRef } from 'react'
import { UseSelectCallbacksProps } from './types'

interface BasicOption {
  label: string
  value: unknown
}

export const useSelectCallbacks = <T extends BasicOption>({
  onChange,
  onAdd,
  onRemove,
  isMulti,
}: UseSelectCallbacksProps<T>) => {
  const items = useRef<MultiValue<T> | SingleValue<T>>([])

  const handleChange = (val: MultiValue<T> | SingleValue<T>, event: ActionMeta<T>) => {
    onChange(val, event)
    if (!isMulti) {
      onAdd((val as T).value)
    } else if ((val as T[]).length > (items.current as T[]).length) {
      onAdd(last(val as T[])?.value)
    } else {
      const removedItem = difference((items.current as T[]), val as T[])[0].value
      onRemove(removedItem)
    }
    items.current = val
  }
  return handleChange
}
