import React, { Suspense, lazy } from 'react'
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react'
import { IconProps } from '~lib/types'

type Props = ChakraIconProps & IconProps

export const Icon = ({
  type, boxSize, size = 6, ...rest
}: Props) => {
  if (!type) {
    return <ChakraIcon title={ `No such icon ${type}` } />
  }

  const Component = lazy(() => import(`../icons/${type}`))

  return (
    <Suspense fallback={ null }>
      <Component
        boxSize={ size }
        { ...rest }
      />
    </Suspense>
  )
}
