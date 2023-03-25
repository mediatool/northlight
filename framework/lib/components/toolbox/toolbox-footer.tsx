import { useMultiStyleConfig } from '@chakra-ui/system'
import React from 'react'
import { Flex } from '../flex'
import { ToolboxFooterProps } from './types'

/**
 * @see Toolbox
 * @see {@link https://northlight.dev/reference/toolbox-footer}
 */
export const ToolboxFooter = ({ children, ...rest }: ToolboxFooterProps) => {
  const { footer } = useMultiStyleConfig('Toolbox', {})

  return (
    <Flex sx={ footer } { ...rest }>
      { children }
    </Flex>
  )
}
