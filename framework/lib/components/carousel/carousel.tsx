import React, { Children, useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import { identity } from 'ramda'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Box } from '../box'
import { HStack } from '../stack'
import { Radio, RadioGroup } from '../radio'
import { CarouselItem } from './carousel-item'
import { CarouselArrow } from './carousel-arrow'
import { carouselItemSpacing, carouselItemWidth } from './constants'
import { CarouselProps } from './types'

/**
 * Easiely one of the fanciest components, horizontal carousel wrapper for anything
 *
 * @see {@link https://northlight.dev/reference/carousel}
 *
 * @example (Example)
 * The carousel takes up 100% of its parents container width and height.
 *  It then renders all children div into a draggable div using framer-motion

 * (?
 * +
 *const Item = ({ name, ...rest }) => (
  <Center color="white" bg="teal.500" rounded="md" w="full" h="full" { ...rest }>
    { name }
  </Center>
)

const MyCarousel = () => (
<Box h="300px">
  <Carousel>
    <Item name="Item 1" />
    <Item name="Item 2" />
    <Item name="Item 3" />
  </Carousel>
</Box>

)

render(<MyCarousel />)
 *
 * ?)
 *
 * @example (Example)
 * ##Controling the carousel state
 * The carousel takes an **onChange** and value
 * (which is the index of the current active element), meaning it can be controlled.
 *
 * (?
 * +
 * const Item = ({ name, ...rest }) => (
  <Center color="white" bg="teal.500" rounded="md" w="full" h="full" { ...rest }>
    { name }
  </Center>
)

const MyCarousel = () => {
  const [index, setIndex ] = useState(0)
  return (

    <VStack
    borderColor="border.default"
    borderWidth="sm" borderStyle="solid" p="2" borderRadius="lg">
      <Box w="full" h="sm">
        <Carousel
          showArrows={ false }
          showRadio={ false }
          value={ index }
          onChange={ (v) => setIndex(v) }
        >
          <Item name="Item 1" />
          <Item name="Item 2" />
          <Item name="Item 3" />
        </Carousel>
      </Box>
      <FlipButtonGroup
        onChange={ (v) => setIndex(parseInt(v, 10)) }
        value={ `${index}` }
        variant="brand"
      >
        <FlipButton value="0">One</FlipButton>
        <FlipButton value="1">Two</FlipButton>
        <FlipButton value="2">Three</FlipButton>
      </FlipButtonGroup>
    </VStack>
  )
}
*
render(<MyCarousel/>)
 * ?)
 *(You can also hide the default
            navigational arrows and radio button using <b>showArrows</b> and
            <b>showRadio</b> as in example)
 */
export const Carousel = ({
  children,
  showArrows = true,
  showRadio = true,
  value: controlledIndex = 0,
  onChange = identity,
  itemWidth = carouselItemWidth,
  itemHeight = carouselItemWidth,
  spacing = carouselItemSpacing,
  carouselStyles = {},
  ...rest
}: CarouselProps) => {
  const [ dragging, setDragging ] = useState(false)
  const [ containerWidth, setContainerWidth ] = useState(0)
  const [ activeIndex, setActiveIndex ] = useState(0)
  const x = useMotionValue(0)
  const { radio, container } = useMultiStyleConfig('Carousel', {})

  const childrenAsArray = Children.toArray(children) as JSX.Element[]
  const numberOfChildren = Children.count(children)
  const carouselTotalWidth = itemWidth + spacing
  const totalWidth = carouselTotalWidth * numberOfChildren

  const containerRef = useRef<any>(null)

  useEffect(() => {
    setContainerWidth(containerRef.current.clientWidth)
  }, [])

  const getNewX = () => -(activeIndex * carouselTotalWidth)

  const updateActiveIndex = () => {
    setActiveIndex(Math.abs(Math.round(x.get() / carouselTotalWidth)))
  }

  useEffect(() => {
    animate(x, getNewX())
    onChange(activeIndex)
  }, [ activeIndex ])

  useEffect(() => {
    setActiveIndex(controlledIndex)
  }, [ controlledIndex ])

  const handleRightArrowClick = () => {
    setActiveIndex((prev) =>
      (activeIndex === numberOfChildren - 1 ? 0 : prev + 1)
    )
  }

  const handleLeftArrowClick = () => {
    setActiveIndex((prev) =>
      (activeIndex === 0 ? numberOfChildren - 1 : prev - 1)
    )
  }

  return (
    <Box
      cursor={ dragging ? 'grabbing' : 'grab' }
      onMouseDown={ () => setDragging(true) }
      onMouseUp={ () => setDragging(false) }
      ref={ containerRef }
      pl={ `${(containerWidth - itemWidth) / 2}px` }
      sx={ container }
      { ...rest }
    >
      <motion.div
        drag="x"
        style={ {
          width: `${totalWidth}px`,
          height: '100%',
          x,
        } }
        dragConstraints={ { right: 0, left: -(totalWidth - itemWidth) } }
        onDragEnd={ updateActiveIndex }
      >
        <HStack
          spacing={ `${spacing}px` }
          width={ `${totalWidth}px` }
          h="full"
          { ...carouselStyles }
        >
          { childrenAsArray.map((child, index) => (
            <CarouselItem
              isActive={ index === activeIndex }
              itemWidth={ itemWidth }
              itemHeight={ itemHeight }
              key={ `carousel-item-${index as number}` }
            >
              { child }
            </CarouselItem>
          )) }
        </HStack>
      </motion.div>
      { showRadio && (
        <RadioGroup
          onChange={ (val) => setActiveIndex(parseInt(val, 10)) }
          value={ `${activeIndex}` }
          sx={ radio }
        >
          <HStack>
            { childrenAsArray.map((_child, i) => (
              <Radio
                value={ `${i}` }
                size="lg"
                key={ `carousel-radio-${i as number}` }
              />
            )) }
          </HStack>
        </RadioGroup>
      ) }
      { showArrows && (
        <>
          <CarouselArrow
            direction="left"
            onClick={ handleLeftArrowClick }
            left="2"
          />
          <CarouselArrow
            direction="right"
            onClick={ handleRightArrowClick }
            right="2"
          />
        </>
      ) }
    </Box>
  )
}
