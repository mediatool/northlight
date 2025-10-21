import React, { MouseEventHandler } from 'react'
import {
  MultiValueProps,
  MultiValueRemoveProps,
  chakraComponents,
} from 'chakra-react-select'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Box } from '@chakra-ui/react'
import { Option } from './types'

export const SortableMultiValue = <T extends Option>(props: MultiValueProps<T, true>) => {
  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const innerProps = { ...props.innerProps, onMouseDown }
  const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
          id: props.data.value,
        })

  return (
    <Box
      ref={ setNodeRef }
      transform={ CSS.Translate.toString(transform) }
      transition={ transition }
      cursor="grab"
      _hover={ { opacity: 0.8 } }
      _active={ { cursor: 'grabbing' } }
      { ...attributes }
      { ...listeners }
    >
      <chakraComponents.MultiValue { ...props } innerProps={ innerProps } />
    </Box>
  )
}

export const SortableMultiValueRemove = <T extends Option>(
  { innerProps, ...props }: MultiValueRemoveProps<T, true>
) => (
  <chakraComponents.MultiValueRemove
    { ...props }
    innerProps={ {
      onPointerDown: (e) => e.stopPropagation(),
      ...innerProps,
    } }
  />
  )
