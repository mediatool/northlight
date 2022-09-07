import React from 'react'
import { assert } from 'chai'
import { render, screen } from '@testing-library/react'
import { OrgLogo } from '../../../../lib/components'

const { isOk } = assert

const getOrgLogo = (customProps = { }) => {
  const props = {
    name: 'Anakin Skywalker',
    ...customProps,
  }
  return (
    <OrgLogo { ...props } />
  )
}

const getComponent = () => screen.getByTestId('orglogo-test-id').children[0]

describe('OrgLogo', () => {
  it('Renders properly', () => {
    render(getOrgLogo())
    const orgLogo = getComponent()
    isOk(orgLogo)
  })

  it('Display Acronym if no image', () => {
    render(getOrgLogo())
    const orgLogo = screen.getByText('A')
    isOk(orgLogo)
  })

  it('Capitalize the first letter', () => {
    render(getOrgLogo({ name: 'mediatool' }))
    const orgLogo = screen.getByText('M')
    isOk(orgLogo)
  })
})
