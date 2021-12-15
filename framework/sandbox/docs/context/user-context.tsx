import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react'

export interface User {
  name: string
  country: string
  image: string
  preferences: {
    locale: string
    currency: string
  }
}

export const users: Record<string, User> = {
  'obi-wan': {
    name: 'Obi-Wan Kenobi',
    country: 'Germany',
    image: `
      https://www.gamereactor.se/media/08/redaxresonerar_3470803.jpg
    `,
    preferences: {
      locale: 'de-DE',
      currency: 'EUR',
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
    },
  },
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IUserContext {
  user: User
  setUser: (user: User) => void
}

interface UserProviderProps {
  children: ReactNode
}

const UserContext = createContext<IUserContext | null>(null)
export const UserProvider = ({ children }: UserProviderProps) => {
  const [ user, setUser ] = useState<User>(users['obi-wan'])

  const contextValue = useMemo<IUserContext>(() => ({
    user,
    setUser,
  }), [ user ])

  return (
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('Cannot find <UserProvider> anywhere in your React tree')
  }

  return context
}
