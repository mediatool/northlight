import React, { useState } from 'react'
import { HStack } from '../stack'
import { AvatarGroupProps } from './types'
import { Small } from '../typography'
import { OverflowGroup } from '../overflow-group'

/**
 * Used to display a group of users
 * @see Avatar
 * @see {@link https://northlight.dev/reference/avatar-group}
 *
 * @example (Example)
 * Example:
 * (?
 * <AvatarGroup max={ 3 }>
  {[1, 2, 3, 4, 5].map((i) => (
    <Avatar
      name="Anakin Skywalker"
      image="https://thenerdstash.com/wp-content/uploads/2021/10/Hayden-Christensen-Anakin-Skywalker.jpg"
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
