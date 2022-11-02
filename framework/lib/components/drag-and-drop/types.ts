import {
  CollisionDetection,
  SensorDescriptor,
  SensorOptions,
  UniqueIdentifier,
  UseDraggableArguments,
  UseDroppableArguments,
} from '@dnd-kit/core'
import { SortingStrategy, UseSortableArguments } from '@dnd-kit/sortable'
import { SystemStyleObject, TagProps } from '@chakra-ui/react'

type ChildrenType<PropType=any> =
  | ((props: PropType, secondProp?: any) => JSX.Element | JSX.Element[])
  | (JSX.Element | JSX.Element[])

export type MultiItemType<itemKeys extends string | number | symbol> = Record<itemKeys, string[]>
export interface DroppableProps extends UseDroppableArguments {
  children?: ChildrenType
}
export interface DraggableProps extends UseDraggableArguments {
  itemLabel?: string
  children?: ChildrenType
}

export interface SortableItemProps extends UseSortableArguments {
  children?: ChildrenType
  itemLabel?: UniqueIdentifier
}

export interface SortableListProps<T> {
  children?: ChildrenType<T>
  items: T[]
  collisionDetection?: CollisionDetection
  strategy?: SortingStrategy
  onChange?: (items: T[]) => void
  createKey?: (item: T) => UniqueIdentifier
  displayOverlay?: boolean
  sensors?: SensorDescriptor<SensorOptions>[]
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
