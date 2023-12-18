import React from 'react'
import { Menu as ChakraMenu, MenuProps } from '@chakra-ui/react'

/**
 * @see {@link https://northlight.dev/reference/menu}
 *
 * @example
 * (?
 *<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownDuo />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
 * ?)
 *
 */
export const Menu = (props: MenuProps) => <ChakraMenu { ...props } />
