import React from 'react'
import { describe, it } from 'mocha'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { OrganizationLogo } from '../../../../lib/components'

const { isOk } = assert

const getOrganizationLogo = (customProps = { }) => {
  const props = {
    name: 'Anakin Skywalker',
    ...customProps,
  }
  return (
    <OrganizationLogo { ...props } />
  )
}

const getComponent = () => screen.getByTestId('organization-logo-test-id').children[0]

describe('OrganizationLogo', () => {
  it('Renders properly', () => {
    render(getOrganizationLogo())
    const organizationLogo = getComponent()
    isOk(organizationLogo)
  })

  it('Display Acronym if no image', () => {
    render(getOrganizationLogo())
    const organizationLogo = screen.getByText('A')
    isOk(organizationLogo)
  })

  it('Capitalize the first letter', () => {
    render(getOrganizationLogo({ name: 'mediatool' }))
    const organizationLogo = screen.getByText('M')
    isOk(organizationLogo)
  })
})
