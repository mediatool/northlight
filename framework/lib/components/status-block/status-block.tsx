import React from 'react'
import { Tag, TagLabel, TagLeftIcon } from '../Tag'
import { blockVariantMap } from './block-variant-map'
import { BlockVariant } from './types'
import { iconMap } from '../icon/icon-map'

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
      <TagLeftIcon as={ iconMap[variant] } />
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
