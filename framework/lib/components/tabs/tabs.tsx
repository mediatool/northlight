import React from 'react'
import { Tabs as ChakraTabs, TabsProps } from '@chakra-ui/react'

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
