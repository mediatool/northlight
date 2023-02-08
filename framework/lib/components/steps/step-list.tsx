import React, { Children } from 'react'
import { TabList as ChakraStepList, useStyleConfig } from '@chakra-ui/react'
import { StepListProps } from './types'

export const StepList = ({ children, ...rest }: StepListProps) => {
  const tabs = Children.count(children)
  const styles = useStyleConfig('StepList', { tabs })
  return (
    <ChakraStepList { ...rest } sx={ styles }>
      { children }
    </ChakraStepList>
  )
}
