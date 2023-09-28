import React from 'react'
import { useToken } from '@chakra-ui/system'
import { StepStackProps } from './types'
import { getChildrenWithProps } from '../../utils'
import { HStack, Stack } from '../stack'
import { Divider } from '../divider'
import { Label } from '../typography'
import { Box } from '../box'
/**
  Util wrapper for creating ordered vertical layouts by stack
  @see {@link https://northlight.dev/reference/step-stack}
  @example
  You can adjust the vertical positioning of the step
  circles using the <Code>stepCircleAlignment</Code> prop.
  This prop accept any values that can be used with the alignItems CSS property.
  If no <Code>stepCircleAlignment</Code> value
  is passed then the default value of <Code>center</Code> will be used
  for the <Code>stepCircleAlignment</Code> prop.
  <br /><br />
  The component takes all the props that a normal stack takes, with the addition of a
  rowHeight prop, which is needed to get the correct height for the grey
  line that goes between the steps. Any valid css height unit, px, rem, %,
  and tokens xs, sm are valid input for the <Code>rowHeight</Code> prop,
  for example, <Code>rowHeight="3rem"</Code>.
  <br /><br />
  ## Simple step stack
  (?
    <StepStack maxW="sm" spacing="4" rowHeight="10">
      { Array.from({length: 5}, (_, i) => i).map((i) => <Input key={ i } />) }
    </StepStack>
  ?)
  <br />
  ## Example with flex-start stepCircleAlignment prop
  (?
    <StepStack maxW="sm" spacing="4" rowHeight="10" stepCircleAlignment="flex-start">
      { Array.from({ length: 5 }, (_, i) => i).map((i) => (
        <Center
          key={ i }
          width={ 400 }
          height={ 100 }
          borderRadius={ 10 }
          backgroundColor="blue.500"
          color="white"
        >
          <Text>Step { i + 1 }</Text>
        </Center>
      )) }
    </StepStack>
  ?)
*/
export const StepStack = ({
  children,
  spacing = '4',
  rowHeight = '10',
  stepCircleAlignment = 'center',
  ...rest
}: StepStackProps) => {
  const rows = getChildrenWithProps(children, {})
  const parsedRowHeight = useToken('sizes', rowHeight)

  return (
    <Stack spacing={ spacing } position="relative" { ...rest }>
      { rows.map(
        (row, i) => (
          <HStack key={ `row-${i as number}` } alignItems={ stepCircleAlignment }>
            <>
              <Box
                borderRadius="full"
                bgColor="blue.500"
                boxSize="6"
                minW="6"
                minH="6"
                zIndex="docked"
              >
                <Label
                  size="sm"
                  sx={ { color: 'text.inverted' } }
                  w="max-content"
                  textAlign="center"
                >
                  { i + 1 }
                </Label>
              </Box>
              { row }
            </>
          </HStack>
        )
      ) }
      <Divider
        orientation="vertical"
        left="3"
        bottom={ `calc(${parsedRowHeight} / 2)` }
        h={ `calc(100% - ${parsedRowHeight})` }
        position="absolute"
      />
    </Stack>
  )
}
