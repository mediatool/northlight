import { UseClickableProps } from '@chakra-ui/clickable'
import { LinkProps } from '@chakra-ui/react'

export interface ClickableProps extends UseClickableProps {
  href?: string
  linkProps?: LinkProps
}
