import React from 'react'
import { Link, chakra } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { useClickable } from '@chakra-ui/clickable'
import { isNil } from 'ramda'
import { ClickableProps } from './types'
import { ring } from '../../utils'

export const Clickable = ({ href, linkProps, ...rest }: ClickableProps) => {
  const clickable = useClickable(rest)

  return (
    <>
      { !isNil(href) && (
        <Link
          as={ ReactRouterLink }
          _focusVisible={ ring }
          to={ href }
          { ...linkProps }
          { ...clickable }
        />
      ) }
      { isNil(href) && <chakra.button _focusVisible={ ring } { ...clickable } /> }
    </>
  )
}
