import React from 'react'
import { useMultiStyleConfig } from '@chakra-ui/system'
import { CloseButton } from '../close-button'
import { Flex } from '../flex'
import { ToolboxHeaderProps } from './types'
import { H3 } from '../typography'

export const ToolboxHeader = ({
  children,
  onClose,
  ...rest
}: ToolboxHeaderProps) => {
  const { header } = useMultiStyleConfig('Toolbox', {})

  return (
    <Flex sx={ header } { ...rest }>
      { typeof children === 'string' ? <H3>{ children }</H3> : children }
      <CloseButton
        aria-label="Close toolbox"
        position="fixed"
        right={ 4 }
        onClick={ onClose }
      />
    </Flex>
  )
}
