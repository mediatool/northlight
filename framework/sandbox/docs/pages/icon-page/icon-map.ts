import { ComponentType } from 'react'
import { IconProps as ChakraIconProps } from '@chakra-ui/react'
import { IconProps, IconType } from '~lib/types'
import {
  HubIcon,
  PlugIcon,
  PlusIcon,
  SearchIcon,
  SwitchesIcon,
} from '~lib/components'

export const iconMap: Record<IconType, ComponentType<ChakraIconProps & IconProps>> = {
  hub: HubIcon,
  plus: PlusIcon,
  plug: PlugIcon,
  search: SearchIcon,
  switches: SwitchesIcon,
}
