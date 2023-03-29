import React, { useState } from 'react'
import {
  Badge,
  Code,
  HStack,
  Label,
  NumberInput,
  OverflowGroup,
  P,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Tag,
  Wrap,
  useOverflowGroup,
} from '../../../../lib/components'
import { Page } from '../../components'
import { arrayWithLength } from '../../utils'

const CustomSlider = ({ onChange }: any) => (
  <Slider min={ 100 } max={ 500 } step={ 1 } onChange={ onChange }>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
)

const AsyncErrorPage = () => {
  const [ n, setN ] = useState(5)
  const [ max, setMax ] = useState(10)
  const [ width, setWidth ] = useState(200)
  const [ height, setHeight ] = useState(200)
  const { containerRef, rect } = useOverflowGroup()
  const [ nbrRemainingItems, setNbrRemainingItems ] = useState(0)

  return (
    <Page
      title="Overflow Group"
      subtitle="Util wrapper for lists by only rendering as many items as fit per the specification"
    >
      <Stack spacing={ 4 }>
        <Stack mb={ 4 } spacing={ 4 } w="40%">
          <Stack h="500px">
            <Wrap
              w={ width }
              h={ height }
              ref={ containerRef }
              borderWidth="2px"
              borderColor="border.default"
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
          <Stack bgColor="bg.layer" p="2" borderRadius="md">
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
          <Code w="max-content" display="block" whiteSpace="pre">
            { `const [ n, setN ] = useState(5)
const [ max, setMax ] = useState(10)
const [ width, setWidth ] = useState(200)
const [ height, setHeight ] = useState(200)
const { containerRef, rect } = useOverflowGroup()
const [ nbrRemainingItems, setNbrRemainingItems ] = useState(0)

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
  <OverflowGroup max={ max } rect={ rect } onChange={ setNbrRemainingItems }>
    { arrayWithLength(n).map((i) => (
      <Badge key={ i } h="max-content">Item { i }</Badge>
    )) }
  </OverflowGroup>
  { nbrRemainingItems > 0 && (
    <Tag w="fit-content">+{ notShown }</Tag>
  ) }
</Wrap>` }
          </Code>
          <P>
            The overflow group requires either a max prop for a set limit, or a
            rect prop, for a dynamic, responsive layouts. The rect prop can be received
            via the useOverflowGroup hook, along with a containerRef that needs to be set
            on the wrapper around the overflow group.
          </P>
          <P>
            The overflow group is ambiguous in the styling of the children and
            does not pose any premade layout; instead the wrapper parent container
            determines the layout. One could for example use a { '<Stack />' } { '<HStack />' } or { '<Grid>' }
            { ' ' }and all would work. The overflow group only checks if the children
            don't fit within the height/width of it's container via the containerRef.
          </P>
        </Stack>
      </Stack>
    </Page>
  )
}

export default AsyncErrorPage
