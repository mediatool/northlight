import React, { ReactNode } from 'react'
import { TextProps } from '@chakra-ui/react'
import { Text } from '../text'

export interface CardDescriptionProps extends TextProps {
  children: ReactNode
}

export const CardDescription = ({ children, ...rest }: CardDescriptionProps) => (
  <Text
    fontSize="sm"
    color="gray.500"
    lineHeight={ 5 }
    { ...rest }
  >
    { children }
  </Text>
)
