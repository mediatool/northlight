import React from 'react'
import { Breadcrumb, BreadcrumbLink, Breadcrumbs } from '~lib/components'
import { PageLayout } from '../../components'

const SettingsPage = () => (
  <PageLayout
    title="Personal account"
  >
    <Breadcrumbs>
      <Breadcrumb>
        <BreadcrumbLink>
          EL
        </BreadcrumbLink>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbLink>
          Sweden
        </BreadcrumbLink>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbLink>
          BrandEL-1
        </BreadcrumbLink>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbLink>
          Plan008
        </BreadcrumbLink>
      </Breadcrumb>
    </Breadcrumbs>
  </PageLayout>
)

export default SettingsPage
