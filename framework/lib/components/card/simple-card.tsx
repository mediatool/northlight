import React, { ReactNode } from 'react'
import { Card } from './card'
import { CardActions } from './card-actions'
import { CardContent } from './card-content'
import { CardDescription } from './card-description'
import { CardImage } from './card-image'
import { CardTitle } from './card-title'
import { CardSize } from '../../types'

export interface SimpleCardProps {
  title: string
  description: string
  image?: string
  actions?: ReactNode
  size?: CardSize
}

export const SimpleCard = ({
  image,
  title,
  description,
  actions,
  size,
}: SimpleCardProps) => (
  <Card size={ size }>
    { image && (
      <CardImage src={ image } />
    ) }
    <CardContent>
      <CardTitle mb={ 2 }>
        { title }
      </CardTitle>
      <CardDescription>
        { description }
      </CardDescription>
      { actions && (
        <CardActions>
          { actions }
        </CardActions>
      ) }
    </CardContent>
  </Card>
)
