import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  H3,
  HStack,
  Image,
  P,
  Stack,
} from '@northlight/ui'
import { DefaultPageSubtitle, Page } from '../../components'
import { darthVader } from '../../../assets/png/index'

const CardPage = () => (
  <Page
    title="Card"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/card"
        linkText="Chakra Card"
      />
    ) }
  >
    <HStack spacing={ 4 } mt={ 10 }>
      <Card maxW="sm" bgColor="transparent">
        <CardBody>
          <Image
            borderRadius="6"
            src={ darthVader }
            alt="Darth Vader"
          />
          <Stack mt={ 6 } spacing={ 4 }>
            <H3>Join your side</H3>
            <P variant="14">
              Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin
              Skywalker had the potential to become one of the most powerful Jedi ever, and was
              believed by some to be the prophesied Chosen One who would bring balance to the Force.
            </P>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="space-around" bgColor="transparent">
          <Button variant="ghost">
            Light Side
          </Button>
          <Button>
            Dark Side
          </Button>
        </CardFooter>
      </Card>
    </HStack>
  </Page>
)

export default CardPage
