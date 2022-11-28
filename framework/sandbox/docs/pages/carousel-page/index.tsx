import React, { useState } from 'react'
import {
  Box,
  Carousel,
  Center,
  Code,
  Divider,
  FlipButton,
  FlipButtonGroup,
  P,
  Stack,
  Text,
  VStack,
} from '../../../../lib/components'
import { Page } from '../../components'

const Item = ({ name, ...rest }: any) => (
  <Center color="white" bg="teal.500" rounded="md" w="full" h="full" { ...rest }>
    { name }
  </Center>
)

const CarouselPage = () => {
  const [ index, setIndex ] = useState(0)

  return (
    <Page
      title="Carousel"
      subtitle="Carousel is a layout UI component to display children into a horizontally scrollable interface"
    >
      <Stack spacing={ 4 }>
        <Stack mb={ 4 } spacing={ 4 } w="60%">
          <Text>Mediatool uses a custom Carousel component</Text>
          <Box h="300px">
            <Carousel>
              <Item name="Item 1" />
              <Item name="Item 2" />
              <Item name="Item 3" />
            </Carousel>
          </Box>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<Box h="300px">
  <Carousel>
    <Item name="Item 1" />
    <Item name="Item 2" />
    <Item name="Item 3" />
  </Carousel>
</Box>` }
          </Code>
          <P>
            The carousel takes up 100% of its parents container widtha and
            height. It then renders all children div into a draggable div using
            framer-motion
          </P>
          <Divider />
          <P>
            Each child is wrapped in a container div, you can adjust the
            dimensions of this div aswell as the spacing between them using{ ' ' }
            <b>itemWidth</b>, <b>itemHeight</b> and <b>spacing</b>
          </P>
          <Box h="300px">
            <Carousel itemWidth={ 150 } itemHeight={ 30 } spacing={ 20 }>
              <Item name="Item 1" />
              <Item name="Item 2" />
              <Item name="Item 3" />
            </Carousel>
          </Box>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<Box h="300px">
  <Carousel itemWidth={ 150 } itemHeight={ 30 } spacing={ 20 }>
    <Item name="Item 1" />
    <Item name="Item 2" />
    <Item name="Item 3" />
  </Carousel>
</Box>` }
          </Code>
          <Divider />
          <P>
            The carousel takes an <b>onChange</b> and{ ' ' }
            <b>value (which is the index of the current active element)</b>,
            meaning it can be controlled. You can also hide the default
            navigational arrows and radio button using <b>showArrows</b> and{ ' ' }
            <b>showRadio</b>
          </P>
          <VStack border="1px solid black" p={ 2 } rounded="md">
            <Box w="full" h="300px">
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
              onChange={ (v) => setIndex(parseInt(v as string, 10)) }
              value={ `${index}` }
            >
              <FlipButton value="0">One</FlipButton>
              <FlipButton value="1">Two</FlipButton>
              <FlipButton value="2">Three</FlipButton>
            </FlipButtonGroup>
          </VStack>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<VStack border="1px solid black" p={ 2 } rounded="md">
  <Box w="full" h="300px">
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
    onChange={ (v) => setIndex(parseInt(v as string, 10)) }
    value={ \`\${index}\` }
  >
    <FlipButton value="0">One</FlipButton>
    <FlipButton value="1">Two</FlipButton>
    <FlipButton value="2">Three</FlipButton>
  </FlipButtonGroup>
</VStack>` }
          </Code>
          <Divider />
        </Stack>
        <P>It takes the following props</P>
        <P>
          <b>itemWidth / itemHeight </b>- the sizing of the container div that
          wraps the children
        </P>
        <P>
          <b>spacing</b> spacing between item containers
        </P>
        <P>
          <b>showArrows</b> and <b>showRadio</b> boolean values that hide/show
          the navigational arrows and radio buttons
        </P>
        <P>
          <b>value</b> a number, representing the index of the number that is
          currently centered/focused in the carousel
        </P>
        <P>
          <b>onChange</b> (v: number) { '=>' } void, a callback function that
          passes the current centered item in the carousel
        </P>
      </Stack>
    </Page>
  )
}

export default CarouselPage
