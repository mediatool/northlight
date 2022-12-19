import React, { KeyboardEvent, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Fuse from 'fuse.js'
import { map, prop } from 'ramda'
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { searchComponentsBarStyles } from './styles'
import { Card, SearchBar, Stack, useDisclosure } from '../../../../lib'
import { RouteOption, SearchBarComponentsBarProps } from '../../types'
import { ComponentPageLink } from './component-page-link'

export const SearchComponentsBar = ({
  routes,
}: SearchBarComponentsBarProps) => {
  const location = useLocation()
  if (location.pathname.split('/')[1] !== 'components') return null
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      onOpen()
    }
  })

  const handleChange = ({ value }: RouteOption) => {
    history.push(`/components${value}`)
    onClose()
  }

  const ref = useRef(null)
  const options = map(
    (route) => ({
      value: route.path,
      label: route.title,
    }),
    routes
  )

  const fuse = new Fuse(options, {
    threshold: 0.2,
    keys: [ 'label' ],
  })

  const loadOptions = async (query: string) =>
    map(prop('item'), fuse.search(query))

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <Stack p="4">
      <Card w="lg">
        <SearchBar placeholder="Ctrl + k..." onMenuOpen={ onOpen } />
      </Card>
      <Modal
        isOpen={ isOpen }
        onClose={ onClose }
        size="3xl"
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
          />
        </ModalContent>
      </Modal>
    </Stack>
  )
}
