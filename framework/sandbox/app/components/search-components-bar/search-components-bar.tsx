import React, { KeyboardEvent, useEffect, useMemo, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Fuse from 'fuse.js'
import { chain, defaultTo, map, prop } from 'ramda'
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { searchComponentsBarStyles } from './styles'
import { Card, SearchBar, Stack, useDisclosure } from '../../../../lib'
import { RouteOption, SearchBarComponentsBarProps } from '../../types'
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

  const options = chain(
    (route) =>
      defaultTo([], route.subItems).map((subRoute) => ({
        value: `${route.path}${subRoute.path}`,
        label: `${route.title} ${subRoute.title}`,
      })),
    routes
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
        <SearchBar placeholder="Search" onMenuOpen={ onOpen } variant="filled" />
      </Card>
      <Modal
        isOpen={ isOpen }
        onClose={ onClose }
        size="4xl"
        autoFocus={ true }
        initialFocusRef={ ref }
      >
        <ModalOverlay />
        <ModalContent>
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
            placeholder="Search for components, icons, styles...⊂(▀¯▀⊂ )"
          />
        </ModalContent>
      </Modal>
    </Stack>
  )
}
