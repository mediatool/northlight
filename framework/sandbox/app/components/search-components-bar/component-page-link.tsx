import React from 'react'
import { ArrowCircleRightDuo } from '@mediatool/icons'
import {
  HStack,
  Icon,
  Text,
} from '../../../../lib'
import { RouteOption } from '../../types'

export const ComponentPageLink = ({ label }: RouteOption) => (
  <HStack justifyContent="space-between" w="full">
    <Text>{ label }</Text>
    <Icon as={ ArrowCircleRightDuo } size="lg" />
  </HStack>
)
