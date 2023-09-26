import React from 'react'
import { Icon } from '@chakra-ui/react'
import { Tag, TagLabel, TagLeftIcon } from '../tag'
import { blockVariantMap } from './block-variant-map.ts'
import { StatusBlockProps, statusIconMap } from './types.ts'

/**
 * Used as status indicator
 * @see {@link https://northlight.dev/reference/status-block}
 * @example
 * (? <StatusBlock variant="approved" /> ?)
 */
export const StatusBlock = ({ variant }: StatusBlockProps) => {
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
