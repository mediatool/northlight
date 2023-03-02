import React from 'react'
import { times } from 'ramda'
import {
  Code,
  Input,
  P,
  Stack,
  StepStack,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const StepStackPage = () => (
  <Page
    title="Step Stack"
    subtitle="Step stack is a util wraper for creating ordered vertical layouts"
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 } maxW="lg">
        <Text>
          Mediatool uses util <b>{ '<StepStack />' }</b>
        </Text>
        <StepStack maxW="sm" spacing="4">
          { times((i) => (
            <Input key={ i } />
          ), 5) }
        </StepStack>
        <Code w="max-content" display="block" whiteSpace="pre">
          { `<StepStack maxW="sm" spacing="4" rowHeight="10">
    { arrayWithLength(5).map((i) => <Input key={ i } />) }
</StepStack>` }
        </Code>
        <P>
          It takes all the props that a normal stack takes, with the addition of
          a <b>rowHeight</b> prop, which is needed to get the
          correct height for the grey line that goes between the steps. Any
          valid css height unit, px, rem, %, and tokens xs, sm are valid input for rowHeight.
          <br /> (ex: rowHeight="3rem")
        </P>
      </Stack>
    </Stack>
  </Page>
)

export default StepStackPage
