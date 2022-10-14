import React from 'react'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AvatarButton } from '../../../../lib/components'
import { users } from '../../../../sandbox/docs/context'

const { isOk } = assert

const getAvatar = (customProps = { }) => {
  const props = {
    ...customProps,
  }
  return (
    <AvatarButton { ...props } />
  )
}

const getComponent = () => screen.getByTestId('avatar-button-test-id').children[0]

describe('AvatarButton', () => {
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
  it('Renders a notification button', () => {
    render(getAvatar({ notificationCount: 5 }))
    const notification = screen.getByText('5')
    isOk(notification)
  })
  it('Does not render negative notification counts', () => {
    render(getAvatar({ notificationCount: -5 }))
    const notification = screen.queryByText('-5')
    isOk(!notification)
  })
  it('Can focus', async () => {
    render(getAvatar())
    const avatar = screen.getByTestId('avatar-button-test-id')
    const user = userEvent.setup()
    await user.tab()
    expect(avatar).to.deep.equal(document.activeElement)
  })
})
