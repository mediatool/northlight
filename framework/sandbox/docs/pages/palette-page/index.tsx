import React from 'react'
import { palette } from '@mediatool/tokens'
import {
  Box,
  Code,
  HStack,
  Heading,
  Text,
  VStack,
} from '../../../../lib/components'
import { Color, ColorGrade } from '../../../../lib/types'
import { getContrastColor } from '../../../../lib/utils'
import { Page } from '../../components'

const PalettePage = () => {
  const {
    mono: {
      black,
      white,
      transparent,
    },
    ...rest
  } = palette
  return (
    <Page
      title="Palette"
      subtitle={ (
        <Text>
          The mediatool color palette. Use palette by specifying a
          color key and shade value together like <Code>blue.200</Code>.<br />
          Special case with black and white which are used with only the key.
        </Text>
      ) }
    >
      <VStack spacing={ 4 } mt={ 4 } alignItems="start">
        <Heading as="h4" size="md" textTransform="capitalize">Black</Heading>
        <Heading as="h5" size="xs">(key: black)</Heading>
        <HStack>
          <Box bg={ black } borderRadius="lg" p={ 4 }>
            <Text color={ getContrastColor(black) } fontFamily="mono" textAlign="center">black</Text>
            <Text color={ getContrastColor(black) } fontFamily="mono" textAlign="center">{ black }</Text>
          </Box>
        </HStack>
      </VStack>

      <VStack spacing={ 4 } mt={ 4 } alignItems="start">
        <Heading as="h4" size="md" textTransform="capitalize">White</Heading>
        <Heading as="h5" size="xs">(key: white)</Heading>
        <HStack>
          <Box bg={ white } borderRadius="lg" p={ 4 }>
            <Text color={ getContrastColor(white) } fontFamily="mono" textAlign="center">white</Text>
            <Text color={ getContrastColor(white) } fontFamily="mono" textAlign="center">{ white }</Text>
          </Box>
        </HStack>
      </VStack>

      <VStack spacing={ 4 } mt={ 4 } alignItems="start">
        <Heading as="h4" size="md" textTransform="capitalize">Transparent</Heading>
        <Heading as="h5" size="xs">(key: transparent)</Heading>
        <HStack>
          <Box bg={ transparent } borderRadius="lg" p={ 4 }>
            <Text color={ getContrastColor(white) } fontFamily="mono" textAlign="center">transparent</Text>
            <Text color={ getContrastColor(white) } fontFamily="mono" textAlign="center">{ transparent }</Text>
          </Box>
        </HStack>
      </VStack>

      { Object.keys(rest).map((colorKey) => (
        <VStack spacing={ 4 } mt={ 4 } alignItems="start" key={ colorKey }>
          <Heading as="h4" size="md" textTransform="capitalize">{ colorKey }</Heading>
          <Heading as="h5" size="xs">(key: { colorKey })</Heading>
          <HStack>
            { Object.keys(rest[colorKey as Color]).map((shade) => {
              const color = rest[colorKey as Color]
              const hexValue = color[shade as unknown as ColorGrade]
              return (
                <Box bg={ hexValue } borderRadius="lg" p={ 4 } key={ hexValue }>
                  <Text color={ getContrastColor(hexValue) } fontFamily="mono" textAlign="center">{ shade }</Text>
                  <Text color={ getContrastColor(hexValue) } fontFamily="mono" textAlign="center">{ hexValue }</Text>
                </Box>
              )
            }) }
          </HStack>
        </VStack>
      )) }
    </Page>
  )
}

export default PalettePage
