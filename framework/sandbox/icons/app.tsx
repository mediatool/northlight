import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import { BrightnessDuo, BrightnessSolid, SmileyDuo } from '@northlight/icons'
import { Card, CardBody, CardFooter, CardHeader, Center, Code, Divider, H1, H3, Heading, Icon, Link, P, SimpleGrid, Spacer, Stack, Text } from '../../lib'

const Icons = () => (
  <Stack p={ 4 } spacing={ 4 } bgColor="background.default" height="auto">
    <H1>Icons <Icon as={ SmileyDuo } sx={ { color: 'blue.500' } } /> </H1>
    <P>Northlight provides a set of commonly used interface icons you can use in your project, exported as components from the package{ ' ' }
      <Code>@northlight/icons</Code>
    </P>

    <Center>
      <H3 mt={ 5 } mb={ 5 }>Select Variant</H3>
    </Center>
    <SimpleGrid spacing={ 10 } alignItems="center" minChildWidth="300px" templateColumns="repeat(auto-fit, minmax(200px, 1fr))">

      <Spacer />
      <Link as={ NavLink } sx={ { borderRadius: 'lg', _hover: { textDecoration: 'none', bgColor: 'blue.500', color: 'gray.50' } } } to="/icons/duo">
        <Card align="center" variant="outline" sx={ { _hover: { color: 'mono.white', borderColor: 'blue.500' } } }>
          <CardHeader>
            <Heading size="md"> Duo </Heading>
          </CardHeader>
          <CardBody>
            <Icon as={ BrightnessDuo } boxSize={ 50 } />
          </CardBody>
          <CardFooter />
        </Card>
      </Link>

      <Link as={ NavLink } sx={ { borderRadius: 'lg', _hover: { textDecoration: 'none', bgColor: 'blue.500', color: 'gray.50' } } } to="/icons/solid">
        <Card align="center" variant="outline" sx={ { _hover: { color: 'mono.white', borderColor: 'blue.500' } } }>
          <CardHeader>
            <Heading size="md"> Solid </Heading>
          </CardHeader>
          <CardBody>
            <Icon as={ BrightnessSolid } boxSize={ 50 } />
          </CardBody>
          <CardFooter />
        </Card>
      </Link>
      <Spacer />

    </SimpleGrid>

    <Stack pt={ 10 }>
      <P>Northlight uses 2 variants of icons: { ' ' }
        <Link as={ NavLink } color="blue.500" fontWeight="bold" to="/icons/solid">solid</Link> and { ' ' }
        <Link as={ NavLink } color="blue.500" fontWeight="bold" to="/icons/duo">duo</Link>.
        Every icon is exported in both variants.
      </P>
    </Stack>

    <Divider />

    <Stack>
      <Text>To use an icon, you need to pass it to the icon component:</Text>
      <Code w="max-content">{ '<Icon as={ IconFromTheLibrary } />' }</Code>
    </Stack>

  </Stack>

)

export default Icons
