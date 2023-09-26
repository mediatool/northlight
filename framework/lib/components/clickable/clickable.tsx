import React from 'react'
import { Link, chakra } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { useClickable } from '@chakra-ui/clickable'
import { isNil } from 'ramda'
import { ClickableProps } from './types.ts'
import { ring } from '../../utils'

/**
 * Wrapper component to make children interactive
 * by taking care of focus/accessibility, will render
 * either a link or button depending on if passing
 * an href
 * @see {@link https://northlight.dev/reference/clickable}
 * @example (Example)
 * ### Click to send notification
 * (?
 * () => {
 * const [ count, setCount ] = useState(0)
 * return (
 *             <Clickable onClick={ () => setCount((prev) => prev + 1) }>
              <Avatar name="anakin skywalker" variant="rounded" notificationCount={count}/>
            </Clickable>
 * )
 * }
 * ?)
 * @example (Example)
 * ### Rendering a link if passing href
 * (?
          <Clickable href="/reference/select">
            <Center boxSize="3xs" bgColor="gray.50">
              Link
            </Center>
          </Clickable>
 * ?)
 *
 */
export const Clickable = ({ href, linkProps, ...rest }: ClickableProps) => {
  const clickable = useClickable(rest)

  return (
    <>
      { !isNil(href) && (
        <Link
          as={ ReactRouterLink }
          _focusVisible={ ring }
          to={ href }
          _hover={ { textDecoration: 'none' } }
          { ...linkProps }
          { ...clickable }
        />
      ) }
      { isNil(href) && <chakra.button _focusVisible={ ring } { ...clickable } /> }
    </>
  )
}
