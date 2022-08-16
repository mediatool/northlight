import React from 'react'
import {
  Button,
  HStack,
  SimpleCard,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'
import { darthVader } from '../../../assets/png'

const desc = `Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin 
Skywalker had the potential to become one of the most powerful Jedi ever, and was
believed by some to be the prophesied Chosen One who would bring balance to the Force.`

const CardPage = () => (
  <Page
    title="Card"
    subtitle="What you'd expect from a simple card component"
  >
    <Text>
      Card in itself is just a simple div with a lg shadow on it.
      <br />
      We export all the bits and pieces you need to compose your own card component.
      For simpler use-cases we have a SimpleCard component which you can use.
      <br />
      Below is a SimpleCard example, which has a title, description, image and actions
      passed to it as props.
    </Text>
    <HStack spacing={ 4 } mt={ 10 }>
      <SimpleCard
        title="Darth Vader"
        description={ desc }
        image={ darthVader }
        actions={ (
          <HStack spacing={ 4 } justify="flex-end">
            <Button
              w="100%"
              variant="ghost"
            >
              Light Side
            </Button>
            <Button w="100%">Dark Side</Button>
          </HStack>
        ) }
      />
    </HStack>
  </Page>
)

export default CardPage
