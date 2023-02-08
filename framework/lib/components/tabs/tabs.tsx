import React from 'react'
import { Tabs as ChakraTabs } from '@chakra-ui/react'
import { TabsProps } from './types'

export const Tabs = (({
  children,
  variant = 'soft-rounded',
  isManual = true,
  ...rest
}: TabsProps) => (
  <ChakraTabs
    isManual={ isManual }
    variant={ variant }
    { ...rest }
  >
    { children }
  </ChakraTabs>
))
