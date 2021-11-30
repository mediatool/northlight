import React from 'react'
import { Breadcrumb, BreadcrumbLink, Breadcrumbs } from '~lib/components'

const crumbs = [
  'EL',
  'Sweden',
  'BrandEL-1',
  'Plan007',
]

export const SettingsBreadcrumbs = () => (
  <Breadcrumbs>
    { crumbs.map((crumb) => (
      <Breadcrumb key={ crumb }>
        <BreadcrumbLink>{ crumb }</BreadcrumbLink>
      </Breadcrumb>
    )) }
  </Breadcrumbs>
)
