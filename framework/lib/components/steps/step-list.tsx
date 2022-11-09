import React, { Children } from 'react'
import { TabList as ChakraStepList, TabListProps, useStyleConfig } from '@chakra-ui/react'

export const StepList = ({ children, ...rest }: TabListProps) => {
  const tabs = Children.count(children)
  const styles = useStyleConfig('StepList', { tabs })
  return (
    <ChakraStepList { ...rest } sx={ styles }>
      { children }
    </ChakraStepList>
  )
}
