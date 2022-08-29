import React from 'react'
import { Icon } from '@chakra-ui/react'
import { Tag, TagLabel, TagLeftIcon } from '../tag'
import { blockVariantMap } from './block-variant-map'
import { BlockVariant, statusIconMap } from './types'

interface Props {
  variant: BlockVariant
}

export const StatusBlock = ({ variant }: Props) => {
  const [ bgColor, contentColor ] = blockVariantMap[variant]

  return (
    <Tag
      w={ 28 }
      h={ 8 }
      justifyContent="center"
      bgColor={ bgColor }
      color={ contentColor }
      borderRadius={ 4 }
    >
      <TagLeftIcon>
        <Icon as={ statusIconMap[variant] } />
      </TagLeftIcon>
      <TagLabel
        lineHeight={ 5 }
        fontWeight="semibold"
        textTransform="capitalize"
      >
        { variant }
      </TagLabel>
    </Tag>
  )
}
