import React, { useState } from 'react'
import { HStack } from '../stack'
import { AvatarGroupProps } from './types'
import { Small } from '../typography'
import { OverflowGroup } from '../overflow-group'
import { getChildrenWithProps } from '../../utils'

/**
 * Used to display a group of users
 * @see Avatar
 * @see {@link https://northlight.dev/reference/avatar-group}
 *
 * @example (Example)
 * (?
 * <AvatarGroup max={ 3 }>
  {[1, 2, 3, 4, 5].map((i) => (
    <Avatar
      name="Darth Vader"
      image="/vader.png"
      size="sm"
      variant="rounded"
      key={ i }
    />
  )) }
</AvatarGroup>
 * ?)
 *
 */
export const AvatarGroup = ({
  children,
  max = Infinity,
  spacing = '-4',
  ...rest
}: AvatarGroupProps) => {
  const [ nbrRemainingAvatars, setNbrRemainingAvatars ] = useState(0)
  const childrenWithMargin = getChildrenWithProps(
    children,
    { ml: spacing },
    (_child, idx) => idx > 0
  )

  return (
    <HStack bgColor="background.default" { ...rest }>
      <HStack spacing={ 0 }>
        <OverflowGroup max={ max } onChange={ setNbrRemainingAvatars }>
          { childrenWithMargin }
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
