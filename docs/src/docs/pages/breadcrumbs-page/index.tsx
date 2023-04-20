import React from 'react'
import {
  Breadcrumb,
  BreadcrumbLink,
  Breadcrumbs,
  Text,
} from '@northlight/ui'
import { DefaultPageSubtitle, Page } from '../../components'

const crumbs = [
  'EL',
  'Sweden',
  'BrandEL-1',
  'Plan008',
]

const BreadcrumbsPage = () => (
  <Page
    title="Breadcrumbs"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/breadcrumb"
        linkText="Chakra breadcrumbs"
      />
    ) }
  >
    <Text>
      <strong>Breadcrumb and BreadcrumbItem</strong>&nbsp;
      are re-exported under <strong>Breadcrumbs and Breadcrumb</strong>
    </Text>
    <Breadcrumbs>
      { crumbs.map((crumb) => (
        <Breadcrumb key={ crumb }>
          <BreadcrumbLink>{ crumb }</BreadcrumbLink>
        </Breadcrumb>
      )) }
    </Breadcrumbs>
  </Page>
)

export default BreadcrumbsPage
