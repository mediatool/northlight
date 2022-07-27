import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '../../../types'

type Props = ChakraIconProps & IconProps

export const InfoFilled = (props: Props) => (
  <Icon viewBox="0 0 32 32" { ...props }>
    <g
      fill="currentColor"
      stroke="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 2 }
    >
      <path fill="currentColor" d="M16 0C7.178 0 0 7.178 0 16s7.178 16 16 16 16-7.178 16-16S24.822 0 16 0Zm2 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 18 7Zm1.763 17.046c-1.819.716-2.35.954-3.518.954-.954 0-1.696-.233-2.225-.698-1.045-.92-.869-2.248-.542-3.608l.984-3.483c.19-.717.575-2.182.036-2.696-.539-.514-1.794-.189-2.524.083l.263-1.073c1.054-.429 2.386-.954 3.523-.954 1.71 0 2.961.855 2.961 2.469 0 .151-.018.417-.053.799-.066.701-.086.655-1.178 4.521-.122.425-.311 1.328-.311 1.765 0 1.683 1.957 1.267 2.847.847l-.263 1.074Z" />
    </g>
  </Icon>
)
