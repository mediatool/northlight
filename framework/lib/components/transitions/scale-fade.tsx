import React from 'react'
import { ScaleFade as ChakraScaleFade } from '@chakra-ui/react'
import { identity } from 'ramda'
import { getChildrenWithFocus, getDuration, useDelay, useHiddenDisplay } from './utils'
import { ScaleFadeProps } from './types'

/**
 * Simple transition to hide/show content
 * @see Fade
 * @see SlideFade
 * @see {@link https://northlight.dev/reference/slide-fade}
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
       <Button onClick={toggle}>Render random number</Button>
  <Box borderRadius="st.border.radius.sm"
  borderWidth="st.border.width.sm" borderColor="border.default">
            <SlideFade in={ show} exitDuration={1}>
  <HStack p="10" bg="bg.filled" rounded="md" >
  <H3>
  {Math.round(Math.random() * 100)}
  </H3>
  </HStack>
            </SlideFade>
  </Box>
    </>
  )
}
 * ?)
 *
 */
export const ScaleFade = ({
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
}: ScaleFadeProps) => {
  const transition = getDuration(enterDuration, exitDuration, duration)
  const showWithDelay = useDelay(show, enterDelay, exitDelay)
  const isHidden = useHiddenDisplay(show, exitDelay, exitDuration, duration, onTransitionComplete)
  const childrenWithProps = getChildrenWithFocus(children, disableFocus, isHidden)

  return (
    <ChakraScaleFade
      in={ showWithDelay }
      transition={ transition }
      unmountOnExit={ hideDisplay }
      { ...rest }
    >
      { childrenWithProps }
    </ChakraScaleFade>
  )
}
