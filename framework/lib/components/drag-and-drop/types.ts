import { ComponentType } from 'react'
import {
  CollisionDetection,
  SensorDescriptor,
  SensorOptions,
  UniqueIdentifier,
  UseDraggableArguments,
  UseDroppableArguments,
} from '@dnd-kit/core'
import { SortingStrategy, UseSortableArguments } from '@dnd-kit/sortable'
import { IconProps, SystemStyleObject, TagProps } from '@chakra-ui/react'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'

type ChildrenType<PropType=any, PropTypeTwo=any> =
  | ((
    props: PropType,
    secondProp: PropTypeTwo,
    thirdProp?: any
  ) => JSX.Element | JSX.Element[] | undefined)
  | (JSX.Element | JSX.Element[])

export type MultiItemType<itemKeys extends string | number | symbol> = Record<itemKeys, string[]>
export interface DroppableProps extends UseDroppableArguments {
  children?: ((props: any) => JSX.Element | JSX.Element[]) | (JSX.Element | JSX.Element[])
}
export interface DraggableProps extends UseDraggableArguments {
  itemLabel?: string
  children?: ChildrenType<SyntheticListenerMap>
  disableDrag?: boolean
}

export interface SortableItemProps extends UseSortableArguments {
  children?: ChildrenType<SyntheticListenerMap>
  itemLabel?: UniqueIdentifier
  dblClickThreshold?: number
  disableDrag?: boolean
}

type MovedItemType<T> = {
  item: T
  oldIndex: number
  newIndex: number
}
export interface SortableListProps<T> {
  children?: ChildrenType<T, SyntheticListenerMap>
  items: T[]
  collisionDetection?: CollisionDetection
  strategy?: SortingStrategy
  onChange?: (items: T[]) => void
  createKey?: (item: T) => UniqueIdentifier
  displayOverlay?: boolean
  sensors?: SensorDescriptor<SensorOptions>[]
  dblClickThreshold?: number
  disableDrag?: boolean
  onMovedItem?: ({ item, oldIndex, newIndex }: MovedItemType<T>) => void
}

export interface MultiSortProps<itemKeys extends string | number | symbol> {
  children?: ChildrenType
  items: MultiItemType<itemKeys>
  collisionDetection?: CollisionDetection
  onChange?: (items: MultiItemType<itemKeys>) => void
  sensors?: SensorDescriptor<SensorOptions>[]
}

export interface DragItemProps extends Omit<TagProps, 'variant'> {
  isDragging?: boolean
  itemLabel?: UniqueIdentifier
  bgColor?: string
}

export interface DragHandleProps extends IconProps {
  isDragging?: boolean
  icon?: ComponentType<any>
}

export interface DropZoneProps {
  sx?: SystemStyleObject
  name: UniqueIdentifier
  children?: JSX.Element
}
export interface SortableContainerProps {
  items: UniqueIdentifier[]
  strategy?: SortingStrategy
  children?: (id: UniqueIdentifier) => JSX.Element
}
