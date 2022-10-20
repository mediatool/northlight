import React from 'react'
import { Link, chakra } from '@chakra-ui/react'
import { useClickable } from '@chakra-ui/clickable'
import { ClickableProps } from './types'
import { ring } from '../../utils'

export const Clickable = (props: ClickableProps) => {
  const clickable = useClickable(props)
  return props.href
    ? <Link { ...clickable } _focusVisible={ ring } href={ props.href } />
    : <chakra.button { ...clickable } _focusVisible={ ring } />
}
