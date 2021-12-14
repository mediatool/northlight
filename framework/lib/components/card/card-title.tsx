import React from 'react'
import { TextProps } from '@chakra-ui/react'
import { Text } from '../text'

export interface CardTitleProps extends TextProps {
  children: React.ReactNode
}

export const CardTitle = ({ children, ...rest }: CardTitleProps) => (
  <Text
    fontSize="lg"
    fontWeight="medium"
    lineHeight={ 7 }
    { ...rest }
  >
    { children }
  </Text>
)
