import React from 'react'
import { Collapse as ChakraCollapse } from '@chakra-ui/react'
import { identity } from 'ramda'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
import { CollapseProps } from './types'

/**
 * Simple transition to hide/show content
 * @see Fade
 * @see ScaleFade
 * @see SlideFade
 * @see {@link https://northlight.dev/reference/collapse}
 *
 * @example (Example)
 * ##View other options
 * (?
 *
() => {
  const [ show, setShow ] = useState(false)
  const toggle = () => {
    setShow((prev) => !prev)

  }
  return (
    <>
       <Button onClick={toggle}>Click Me</Button>
  <Box borderRadius="st.border.radius.sm"
  borderWidth="st.border.width.sm" borderColor="border.default">
            <Collapse in={ show}>
  <HStack p="10" bg="bg.filled" rounded="md" >
  <P>
  Enable advanced mode
  </P>

  <Switch />
  </HStack>
            </Collapse>
  </Box>
    </>

  )

}

 * ?)

 *
 */

export const Collapse = ({
  children,
  enterDuration = null,
  exitDuration = null,
  duration = null,
  in: show = false,
  disableFocus = true,
  hideDisplay = false,
  enterDelay = 0,
  exitDelay = 0,
  onTransitionComplete = identity,
  ...rest
}: CollapseProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration, onTransitionComplete)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <ChakraCollapse
      in={ showWithDelay }
      transition={ transition }
      unmountOnExit={ hideDisplay }
      { ...rest }
    >
      { childrenWithProps }
    </ChakraCollapse>
  )
}
