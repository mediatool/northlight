import React from 'react'
import { useMultiStyleConfig } from '@chakra-ui/system'
import { CloseButton } from '../close-button'
import { Flex } from '../flex'
import { ToolboxHeaderProps } from './types'
import { H4 } from '../typography'

/**
 * @see Toolbox
 * @see {@link https://northlight.dev/reference/toolbox-header}
 *
 */
export const ToolboxHeader = ({
  children,
  onClose,
  ...rest
}: ToolboxHeaderProps) => {
  const { header } = useMultiStyleConfig('Toolbox', {})

  return (
    <Flex sx={ header } { ...rest }>
      { typeof children === 'string' ? <H4>{ children }</H4> : children }
      <CloseButton
        aria-label="Close toolbox"
        position="fixed"
        right={ 4 }
        onClick={ onClose }
      />
    </Flex>
  )
}
