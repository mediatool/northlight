import React, { useState } from 'react'
import { HStack } from '../stack'
import { AvatarGroupProps } from './types'
import { Small } from '../typography'
import { OverflowGroup } from '../overflow-group'

export const AvatarGroup = ({
  children,
  max = Infinity,
  spacing = '-4',
  ...rest
}: AvatarGroupProps) => {
  const [ nbrRemainingAvatars, setNbrRemainingAvatars ] = useState(0)

  return (
    <HStack bgColor="background.default" { ...rest }>
      <HStack spacing={ spacing }>
        <OverflowGroup max={ max } onChange={ setNbrRemainingAvatars }>
          { children }
        </OverflowGroup>
      </HStack>
      { nbrRemainingAvatars > 0 && (
        <Small sx={ { color: 'blue.500' } }>
          +{ nbrRemainingAvatars }
        </Small>
      ) }
    </HStack>
  )
}
