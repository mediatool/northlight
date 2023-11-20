import React, { KeyboardEvent, useEffect, useMemo, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Fuse from 'fuse.js'
import { chain, concat, defaultTo, map, prop } from 'ramda'
import { Card, Modal, SearchBar, Stack, useDisclosure } from '@northlight/ui'

import { RouteOption, SearchBarComponentsBarProps } from '../../types'

import { searchComponentsBarStyles } from './styles'
import { ComponentPageLink } from './component-page-link'

export const SearchComponentsBar = ({
  routes,
}: SearchBarComponentsBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()
  const ref = useRef(null)

  const handleKeyboardShortcut = (e: globalThis.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      onOpen()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardShortcut)
    return () => {
      window.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  const options = concat(
    chain(
      (route) =>
        defaultTo([], route.subItems).map((subRoute) => ({
          value: `${route.path}${subRoute.path}`,
          label: `${route.title} – ${subRoute.title}`,
        })),
      routes
    ),
    routes.map((route) => ({
      value: `${route.path}`,
      label: `${route.title}`,
    }))
  )

  const fuse = useMemo(
    () =>
      new Fuse(options, {
        threshold: 0.2,
        keys: [ 'label' ],
      }),
    [ options ]
  )

  const handleChange = ({ value }: RouteOption) => {
    history.push(`${value}`)
    onClose()
  }

  const loadOptions = async (query: string) =>
    map(prop('item'), fuse.search(query))

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <Stack w="full">
      <Card w="full">
        <SearchBar
          placeholder="Search Northlight 💫"
          onMenuOpen={ onOpen }
          variant="filled"
        />
      </Card>
      <Modal
        isOpen={ isOpen }
        onClose={ onClose }
        size={ { base: 'sm', md: '4xl' } }
        autoFocus={ true }
        isCentered={ false }
        initialFocusRef={ ref }
      >
        <SearchBar
          loadOptions={ loadOptions }
          debouncedWaitTime={ 0 }
          closeMenuOnSelect={ true }
          onChange={ handleChange }
          ref={ ref }
          sx={ searchComponentsBarStyles }
          customOption={ ComponentPageLink }
          noOptionsMessage={ () => null }
          loadingMessage={ () => null }
          onKeyDown={ handleKeyDown }
          placeholder="Search Northlight 💫"
        />
      </Modal>
    </Stack>
  )
}
