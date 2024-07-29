import React from 'react'
import { useMultiStyleConfig } from '@chakra-ui/system'
import { Flex } from '../flex'
import { ToolboxContentProps } from './types'

/**
 * Main content of toolbox drawer
 * @see Toolbox
 * @see {@link https://northlight.dev/reference/toolbox-content}
 */
export const ToolboxContent = ({ sx = {}, children, ...rest }: ToolboxContentProps) => {
  const { body } = useMultiStyleConfig('Toolbox', { sx })

  return (
    <Flex
      sx={ body }
      { ...rest }
    >
      { children }
    </Flex>
  )
}
