import React from 'react'
import { Breadcrumb, BreadcrumbLink, Breadcrumbs } from '../../../../../lib/components'

const crumbs = [
  'Mediatool',
  'Sweden',
  'Settings',
]

export const BreadcrumbsDemo = () => (
  <Breadcrumbs flex={ 2 }>
    { crumbs.map((crumb) => (
      <Breadcrumb key={ crumb }>
        <BreadcrumbLink>{ crumb }</BreadcrumbLink>
      </Breadcrumb>
    )) }
  </Breadcrumbs>
)
