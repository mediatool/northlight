import React from 'react'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import { Avatar } from '../../../../lib/components'
import { users } from '../../../../sandbox/app/context'

const { isOk } = assert

const getAvatar = (customProps = { }) => {
  const props = {
    ...customProps,
  }
  return (
    <Avatar { ...props } />
  )
}

const getComponent = () => screen.getByTestId('avatar-test-id').children[0]

describe('Avatar', () => {
  it('Renders properly', () => {
    render(getAvatar())
    const avatar = getComponent()
    isOk(avatar)
  })
  it('Renders image', () => {
    render(getAvatar({ image: users.anakin.image, name: 'Anakin Skywalker' }))
    const avatar = getComponent()
    expect(avatar).to.have.property('alt', 'Anakin Skywalker')
    expect(avatar).to.have.property('src', users.anakin.image.trim())
  })
  it('Renders initials if no image', () => {
    render(getAvatar({ name: 'Anakin Skywalker' }))
    const avatar = screen.getByText('AS')
    isOk(avatar)
  })
  it('Renders icon if no image nor name', () => {
    render(getAvatar())
    const avatar = getComponent()
    expect(avatar.getAttribute('aria-label')).to.equal('user-avatar')
  })
})
