import { ComponentType } from 'react'
import {
  CollisionDetection,
  Modifiers,
  SensorDescriptor,
  SensorOptions,
  UniqueIdentifier,
  UseDraggableArguments,
  UseDroppableArguments,
} from '@dnd-kit/core'
import { SortingStrategy, UseSortableArguments } from '@dnd-kit/sortable'
import { IconProps, SystemStyleObject, TagProps } from '@chakra-ui/react'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'

export type ListenersType = SyntheticListenerMap

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
  children?: ChildrenType<ListenersType>
  disableDrag?: boolean
}

export interface SortableItemProps extends UseSortableArguments {
  children?: ChildrenType<ListenersType>
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
  children?: ChildrenType<T, ListenersType>
  items: T[]
  /** Play around with this in case the sortable items don't land where
   *  supposed to. See: https://docs.dndkit.com/api-documentation/context-provider/collision-detection-algorithms */
  collisionDetection?: CollisionDetection
  /** Used to optimize rendering, see: https://docs.dndkit.com/presets/sortable#sorting-strategies  */
  strategy?: SortingStrategy
  onChange?: (items: T[]) => void
  createKey?: (item: T) => UniqueIdentifier
  /** You can add an overlay, which can make it more accessible in use
   *  cases where it can be hard to see for the user where their item will land on drop */

  displayOverlay?: boolean
  /** In case you want to adjust the input methods, see: https://docs.dndkit.com/api-documentation/sensors */
  sensors?: SensorDescriptor<SensorOptions>[]
  dblClickThreshold?: number
  disableDrag?: boolean
  /** callback, passes the dragged item and it's old / new index after a drag, */
  onMovedItem?: ({ item, oldIndex, newIndex }: MovedItemType<T>) => void
  /** Read: https://docs.dndkit.com/api-documentation/modifiers#restricting-motion-to-an-axis */
  modifiers?: Modifiers
}

export interface MultiSortProps<itemKeys extends string | number | symbol> {
  children?: ChildrenType
  items: MultiItemType<itemKeys>
  /** https://docs.dndkit.com/api-documentation/context-provider/collision-detection-algorithms */
  collisionDetection?: CollisionDetection
  onChange?: (items: MultiItemType<itemKeys>) => void
  /** https://docs.dndkit.com/api-documentation/sensors */
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
