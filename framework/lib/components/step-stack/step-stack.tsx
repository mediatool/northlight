import React from 'react'
import { useToken } from '@chakra-ui/system'
import { StepStackProps } from './types'
import { getChildrenWithProps } from '../../utils'
import { HStack, Stack } from '../stack'
import { Center } from '../center'
import { Divider } from '../divider'
import { Label } from '../typography'
/**
 * Util wraper for creating ordered vertical layouts by stack
 * @see {@link https://northlight.dev/reference/step-stack}
 * @example
 * (?
 * <StepStack maxW="sm" spacing="4" rowHeight="10">
    { Array.from({length: 5}, (_, i) => i).map((i) => <Input key={ i } />) }
</StepStack>
 * ?)
 *
 */
export const StepStack = ({
  children,
  spacing = '4',
  rowHeight = '10',
  ...rest
}: StepStackProps) => {
  const rows = getChildrenWithProps(children, {})
  const parsedRowHeight = useToken('sizes', rowHeight)

  return (
    <Stack spacing={ spacing } position="relative" { ...rest }>
      { rows.map(
        (row, i) => (
          <HStack key={ `row-${i as number}` }>
            <>
              <Center
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
              </Center>
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
