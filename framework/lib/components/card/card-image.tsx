import React from 'react'
import { Image } from '../image'

export interface CardImageProps {
  src: string
}

export const CardImage = ({ src }: CardImageProps) => (
  <Image
    src={ src }
    width="100%"
    borderTopRightRadius={ 2 }
    borderTopLeftRadius={ 2 }
  />
)
