import React, { useState } from 'react'
import { palette } from '@northlight/tokens'
import {
  Box,
  Button,
  Code,
  Collapse,
  Divider,
  Fade,
  Flex,
  Link,
  P,
  ResizeHandle,
  ScaleFade,
  Slide,
  SlideFade,
  Stack,
  Text,
  useResizeWidth,
} from '@northlight/ui'
import { DefaultPageSubtitle, Page } from '../../components'

const FadeInBox = ({ name, ...rest }: any) => {
  const { adjustableWidth, resizeProps } = useResizeWidth({ defaultWidthPx: 200 })

  return (
    <Flex>
      <Box
        p="10"
        color="white"
        bg="teal.500"
        w={ adjustableWidth }
        overflow="hidden"
        { ...rest }
      >
        { name }
      </Box>
      <ResizeHandle { ...resizeProps } color="teal.500" />
    </Flex>
  )
}

const Wrapper = ({ children }: { children: JSX.Element }) => (
  <Box rounded="md" borderWidth="1px" borderColor={ palette.gray['500'] }>
    { children }
  </Box>
)

const TransitionsPage = () => {
  const [ fadeSection, setFadesection ] = useState(-1)
  const toggleFade = (section: number) => () =>
    setFadesection((prev: number) => (prev === section ? -1 : section))
  const isFade = (currentSection: number) => fadeSection === currentSection

  return (
    <Page
      title="Transitions"
      subtitle={ (
        <DefaultPageSubtitle
          slug="/transitions"
          linkText="Chakra UI Transitions"
        />
      ) }
    >
      <Stack spacing={ 4 }>
        <Text>Mediatool uses custom wrappers for simple animations</Text>
        <Stack mb={ 4 } spacing={ 4 } maxW="container.md">
          <Button onClick={ toggleFade(0) }>Click Me</Button>
          <Wrapper>
            <Fade in={ isFade(0) }>
              <FadeInBox name="Fade" />
            </Fade>
          </Wrapper>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<Fade in={ fadeInCondition }>
    // your code
</Fade>` }
          </Code>
          <Button onClick={ toggleFade(1) }>Click Me</Button>
          <Wrapper>
            <ScaleFade in={ isFade(1) }>
              <FadeInBox name="ScaleFade" />
            </ScaleFade>
          </Wrapper>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<ScaleFade in={ fadeInCondition }>
    // your code
</ScaleFade>` }
          </Code>
          <Button onClick={ toggleFade(2) }>Click Me</Button>
          <Slide in={ isFade(2) }>
            <FadeInBox name="Slide" />
          </Slide>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<Slide in={ fadeInCondition }>
    // your code
</Slide>` }
          </Code>
          <Button onClick={ toggleFade(3) }>Click me</Button>
          <Wrapper>
            <SlideFade in={ isFade(3) }>
              <FadeInBox name="SlideFade" />
            </SlideFade>
          </Wrapper>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<SlideFade in={ fadeInCondition }>
    // your code
</SlideFade>` }
          </Code>
          <Button onClick={ toggleFade(4) }>Click Me</Button>
          <Wrapper>
            <Collapse in={ isFade(4) }>
              <FadeInBox name="Collapse" />
            </Collapse>
          </Wrapper>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<Collapse in={ fadeInCondition }>
    // your code
</Collapse>` }
          </Code>
          <Divider />
          <P>All animations take the following props</P>
          <P>
            <strong>disableFocus </strong>- by default disableFocus={ '{true}' },
            which means that the children will not be focusable if they are
            hidden by the transition, this is great because it prevents the user
            from focusing on elements not visible in the viewport
          </P>
          <P>
            <strong>duration </strong>- how long time in milliseconds the
            animation will last, can adjust entrance and exit animation timing
            with enterDuration and exitDuration
          </P>
          <P>
            <strong>enterDelay and exitDelay </strong>- declare a delay in
            milliseconds on how long time it will take before the animation
            starts
          </P>
          <P>
            <strong>hideDisplay </strong>- Even though the animation will hide
            it's children from the viewport, it will still be a part of the DOM,
            which can block the layout of other elements, set hideDisplay to
            true to prevent this, default is false
          </P>
          <P>SlideFade takes an extra prop</P>
          <P>
            <strong>direction </strong>- the direction from which to slide in,
            can be top, bottom, left, and right. Can be combined with offset to
            detemine the distance to slide
          </P>
          <P>
            There are more possible props specific to certain animations. For
            which you can check out in the
            <Link
              href="https://chakra-ui.com/docs/components/transitions/usage"
              color="text.link.default"
              _hover={ { textDecoration: 'underline' } }
              isExternal={ true }
            >
              { ' ' }
              Chakra Transition Docs
            </Link>
          </P>
        </Stack>
      </Stack>
    </Page>
  )
}

export default TransitionsPage
