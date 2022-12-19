import React, { KeyboardEvent, useRef } from 'react'
import { ChakraStylesConfig } from 'chakra-react-select'
import { palette } from '@mediatool/tokens'
import { useHistory, useLocation } from 'react-router-dom'
import Fuse from 'fuse.js'
import { map, prop } from 'ramda'
import { ArrowCircleRightDuo } from '@mediatool/icons'
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import {
  Card,
  HStack,
  Icon,
  SearchBar,
  Stack,
  Text,
  useDisclosure,
} from '../../../lib'
import { RouteOption, SearchBarComponentsBarProps } from '../types'

const customStyles: ChakraStylesConfig = {
  loadingIndicator: () => ({ display: 'none' }),
  control: (styles, { menuIsOpen, options }) => ({
    ...styles,
    _focusVisible: {},
    border: 'none',
    p: '4',
    width: '95%',
    mx: 'auto',
    borderBottom:
      menuIsOpen && options.length > 0
        ? `2px dashed ${palette.gray['100']}`
        : '2px dashed transparent',
    zIndex: 'maxnus',
  }),
  menu: (styles) => ({
    ...styles,
    mb: '0',
    mt: '-1',
  }),
  menuList: (styles) => ({
    ...styles,
    pt: '2',
    pb: '16',
    height: 'auto',
    maxHeight: '3xl',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: 'md',
    borderBottomRightRadius: 'md',
    border: 'none',
    bgColor: 'text.inverted',
  }),
  option: (styles, { isFocused }) => {
    const focusRing = isFocused
      ? {
        outline: 'none',
        ring: '2px',
        ringColor: 'border.wcag',
        ringOffset: '1px',
      }
      : {}

    return {
      ...styles,
      mt: '4',
      p: '4',
      borderRadius: 'md',
      w: '90%',
      mx: 'auto',
      transition: 'none',
      bgColor: isFocused ? 'blue.500' : 'gray.50',
      color: isFocused ? 'text.inverted' : 'text.default',
      fontWeight: 'semibold',
      ...focusRing,
    }
  },
}

const customOption = ({ label }: RouteOption) => (
  <HStack justifyContent="space-between" w="full">
    <Text>{ label }</Text>
    <Icon as={ ArrowCircleRightDuo } size="lg" />
  </HStack>
)

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
  const options = map((route) => ({
    value: route.path,
    label: route.title,
  }), routes)

  const fuse = new Fuse(options, {
    threshold: 0.2,
    keys: [ 'label' ],
  })

  const loadOptions = async (query: string) => map(prop('item'), fuse.search(query))

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
            sx={ customStyles }
            customOption={ customOption }
            noOptionsMessage={ () => null }
            loadingMessage={ () => null }
            onKeyDown={ handleKeyDown }
          />
        </ModalContent>
      </Modal>
    </Stack>
  )
}
