import React, { ReactNode } from 'react'
import { isEmpty, isNil } from 'ramda'
import { LinkDuo } from '@northlight/icons'
import { NavLink } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  P,
  Stack,
  VStack,
} from '@northlight/ui'

interface Props {
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
  source?: string
  references?: string[]
}

export const Page = ({
  title,
  subtitle = null,
  children,
  source,
  references,
}: Props) => (
  <Stack
    h="100%"
    overflowY="auto"
    overscrollBehavior="contain"
    bgColor="background.default"
    color="text.default"
    pb="10rem"
    pt="4"
    w="full"
  >
    <VStack w="100%">
      <Stack spacing={ 2 } w={ { base: 'full', md: '50vw' } }>
        <Heading as="h1" size="lg">
          { title }
        </Heading>
        { typeof subtitle === 'string' ? (
          <Heading as="h2" size="sm">
            { subtitle }
          </Heading>
        ) : (
          subtitle
        ) }
        <HStack w="full" overflowX="auto">
          { !isNil(source) && !isEmpty(source) && (
          <Box w="fit-content">
            <Link href={ source } isExternal={ true }>
              <Button size="sm" variant="ghost">
                <Flex gap="2" alignItems="center">
                  <P variant="14">Source</P>
                  <Icon as={ LinkDuo } size="sm" />
                </Flex>
              </Button>
            </Link>
          </Box>
          ) }
          { !isEmpty(references) && !isNil(references) && (
          <>
            <P whiteSpace="nowrap">See also: </P>
            { references?.map((reference) => (
              <Link to={ `/reference/${reference}` } as={ NavLink }>
                <Badge>{ reference }</Badge>
              </Link>
            )) }
          </>
          ) }
        </HStack>
      </Stack>

    </VStack>
    <VStack width="100%" mt={ 10 } overflowY="scroll">
      { children }
    </VStack>
  </Stack>
)
