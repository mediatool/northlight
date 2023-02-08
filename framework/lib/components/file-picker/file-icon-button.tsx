import React from 'react'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { FileIconButtonProps } from './types'

export const FileIconButton = ({
  icon,
  color = 'unset',
  ...rest
}: FileIconButtonProps) => (
  <IconButton variant="ghost" size="sm" { ...rest }>
    <Icon as={ icon } boxSize="24px" color={ color } />
  </IconButton>
)
