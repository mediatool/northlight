import React from 'react'
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'
import { render, screen } from '@testing-library/react'
import { Avatar } from '../../../../lib/components'

export interface User {
  name: string
  country: string
  image: string
  preferences: {
    locale: string
    currency: string
    firstDayOfWeek: 'monday' | 'sunday'
  }
}

const users: Record<string, User> = {
  'obi-wan': {
    name: 'Obi-Wan Kenobi',
    country: 'Germany',
    image: `
      https://www.gamereactor.se/media/08/redaxresonerar_3470803.jpg
    `,
    preferences: {
      locale: 'de-DE',
      currency: 'EUR',
      firstDayOfWeek: 'monday',
    },
  },
  anakin: {
    name: 'Anakin Skywalker',
    country: 'US',
    image: `
      https://thenerdstash.com/wp-content/uploads/2021/10/Hayden-Christensen-Anakin-Skywalker.jpg
    `,
    preferences: {
      locale: 'en-US',
      currency: 'USD',
      firstDayOfWeek: 'sunday',
    },
  },
  han: {
    name: 'Han Solo',
    country: 'Sweden',
    image: `
      https://fictionhorizon.com/wp-content/uploads/2021/09/Han-Solo.jpg
    `,
    preferences: {
      locale: 'sv-SE',
      currency: 'SEK',
      firstDayOfWeek: 'sunday',
    },
  },
  yoda: {
    name: 'Yoda',
    country: 'England',
    image: `
      https://markerasomolast.files.wordpress.com/2013/08/yoda.jpg
    `,
    preferences: {
      locale: 'en-GB',
      currency: 'GBP',
      firstDayOfWeek: 'monday',
    },
  },
}

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
