import React, { Children, useEffect, useRef, useState } from 'react'
import { always, dec, defaultTo, gt, identity, ifElse, inc, isNil, take } from 'ramda'
import { OverflowGroupProps } from './types'
import { getChildrenWithProps } from '../../utils'

const positiveOrZero = ifElse(gt(0), always(0), identity)
const EMPTY_RECT = {
  clientWidht: 0,
  clientHeight: 0,
}
const EMPTY_WINDOW = {
  innerWidth: 0,
  innerHeight: 0,
}

/**
 * Util wrapper for lists by only rendering as many items as fit per the specification
 * @see {@link https://northlight.dev/reference/overflow-group}
 * @example
 * (?
 * +
 *
const CustomSlider = ({ onChange }) => (
  <Slider min={ 100 } max={ 300 } step={ 1 } onChange={ onChange }>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
)
 *

const arrayWithLength = (n) => {
  let buffer = []
  for(let i = 0; i < n; i++) {
    buffer.push(i)
  }
  return buffer
}
 * const MyComponent =  () => {
 *   const [ n, setN ] = useState(5)
  const [ max, setMax ] = useState(10)
  const [ width, setWidth ] = useState(200)
  const [ height, setHeight ] = useState(200)
  const { containerRef, rect } = useOverflowGroup()
  const [ nbrRemainingItems, setNbrRemainingItems ] = useState(0)
 * return (
 *   <Stack mb={ 4 } spacing={ 4 } w="40%">
          <Stack h="300px">
            <Wrap
              w={ width }
              h={ height }
              ref={ containerRef }
              borderWidth="2px"
              borderColor="gray.200"
              borderStyle="solid"
              p="2"
              borderRadius="md"
            >
              <OverflowGroup
                max={ max }
                rect={ rect }
                onChange={ setNbrRemainingItems }
              >
                { arrayWithLength(n).map((i) => (
                  <Badge key={ i } h="max-content">
                    Item { i }
                  </Badge>
                )) }
              </OverflowGroup>
              { nbrRemainingItems > 0 && (
                <Tag w="fit-content">+{ nbrRemainingItems }</Tag>
              ) }
            </Wrap>
          </Stack>
          <Stack bgColor="gray.50" p="2" borderRadius="md">
            <HStack>
              <Label>Height</Label>
              <CustomSlider onChange={ setHeight } />
            </HStack>
            <HStack>
              <Label>Width</Label>
              <CustomSlider onChange={ setWidth } />
            </HStack>
            <HStack>
              <Label>Number of items </Label>
              <NumberInput onChange={ (v) => setN(Number(v)) } value={ n } />
            </HStack>
            <HStack>
              <Label>Render max </Label>
              <NumberInput onChange={ (v) => setMax(Number(v)) } value={ max } />
            </HStack>
          </Stack>
        </Stack>
 * )}
render(<MyComponent/>)
 * ?)
<br />
The overflow group requires either a max prop for a set limit, or a rect prop,
 for a dynamic, responsive layouts. The rect prop can be received via the useOverflowGroup hook,
  along with a containerRef that needs to be set on the wrapper around the overflow group.
<br />
<br />
The overflow group is ambiguous in the styling of the children and does not pose any premade layout;
 instead the wrapper parent container determines the layout.
 One could for example use a <Stack /> <HStack /> or <Grid> and all would work.
  The overflow group only checks if the children don't fit within the height/width
   of it's container via the containerRef.

 *
 */
export const OverflowGroup = ({
  children,
  max: initMax = 0,
  childrenProps,
  onChange = identity,
  rect,
}: OverflowGroupProps) => {
  const [ max, setMax ] = useState(isNil(rect) ? initMax : 0)
  const [ windowState, setWindowState ] = useState(EMPTY_WINDOW)
  const isLocked = useRef(false)
  const nbrChildren = Children.count(children)

  const updateMax = () => {
    if (!rect) return

    if (
      rect.scrollHeight <= rect.clientHeight &&
      rect.scrollWidth <= rect.clientWidth &&
      max < nbrChildren &&
      !isLocked.current &&
      max < initMax
    ) {
      setMax(inc)
    }

    if (
      rect.scrollHeight > rect.clientHeight ||
      rect.scrollWidth > rect.clientWidth
    ) {
      setMax(dec)
      isLocked.current = true
    }
  }

  const rectDependency = defaultTo(EMPTY_RECT, rect) as HTMLElement
  useEffect(updateMax, [
    rectDependency.clientWidth,
    rectDependency.clientHeight,
    nbrChildren,
    max,
    windowState.innerHeight,
    windowState.innerHeight,
    initMax,
  ])

  useEffect(() => {
    isLocked.current = false
  }, [ rectDependency.clientHeight, rectDependency.clientWidth ])

  const handleResize = () => {
    setTimeout(() => {
      isLocked.current = false
      setWindowState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      })
    }, 200)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const nbrRemainingChildren = positiveOrZero(nbrChildren - max)
    onChange(nbrRemainingChildren)
  }, [ max, nbrChildren ])

  const shownChildren = take(
    max,
    getChildrenWithProps(children, defaultTo({}, childrenProps))
  )

  return <>{ shownChildren }</>
}
