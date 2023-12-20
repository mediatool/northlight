import React from 'react'
import { Menu as ChakraMenu } from '@chakra-ui/react'
import { MenuProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/menu}
 *
 * @example (Example)
 * ##Clean menu with different options
 * The menu can be `relaxed` for primary menus, and `compact` for secodnary menus.
 * <br />
 * (?
 * +
 * const MyMenuComponent = () => {
 * const [selectedLabel, setSelectedLabel] = useState('Compare periods');
 *
 *   const menuOptions = {
 *     '1': 'No Comparison',
 *     '2': 'Report date range',
 *     '3': 'Previous week',
 *     '4': 'Previous quarter',
 *     '5': 'Previous month',
 *     '6': 'Previous year',
 *     '7': 'Previous period',
 *
 *   }
 *
 *   const handleMenuItemClick = (value) => {
 *     setSelectedLabel(menuOptions[value] || 'Compare periods');
 *   }
 *
 *  return (
 * <Menu variant="relaxed" closeOnSelect={false}>
 * <MenuButton
 * as={Button}
 * leftIcon={<VersionsDuo /> }
 * variant="brand"
 * rightIcon={<ChevronDownDuo />}
 * >
 *  { selectedLabel }
 * </MenuButton>
 * <MenuList>
 * <MenuOptionGroup onChange={ handleMenuItemClick } defaultValue="1" type="radio">
  * <MenuItemOption value="1">No Comparison</MenuItemOption>
  * <MenuDivider />
  * <MenuItemOption isDisabled={true} value="2">
  * <Box>
    * <Text>Report date range</Text>
    * <Text fontSize="xs" color="text.subdued">
    * 12-12-2022 01-01-23
    * </Text>
  * </Box>
  * </MenuItemOption>
  * <MenuDivider />
  * <MenuItemOption value="3">Previous week</MenuItemOption>
  * <MenuItemOption value="4">Previous quarter</MenuItemOption>
  * <MenuItemOption value="5">Previous month</MenuItemOption>
  * <MenuItemOption value="6">Previous year</MenuItemOption>
  * <MenuItemOption value="7">Previous period</MenuItemOption>
  * </MenuOptionGroup>
  *<MenuDivider />
  * <MenuItem sx={ { placeContent: 'space-between' } }>
  * Custom Date
  * <Icon as={ ChevronRightDuo } aligh="right" />
  * </MenuItem>
 * </MenuList>
* </Menu>
* )
*
* }
*
* render(<MyMenuComponent/>)
* ?)
*
* @example (Example)
* ##Menu with Group titles
* To group related MenuItems, use the MenuGroup component and pass it a title for the group name
* <br />
* (?
 * <Menu closeOnSelect={false}>
 * <MenuButton as={Button} rightIcon={<ChevronDownDuo />}>
  * Actions
 * </MenuButton>
 * <MenuList minWidth='240px'>
    * <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
    * <MenuItemOption value='asc'>Ascending</MenuItemOption>
    * <MenuItemOption value='desc'>Descending</MenuItemOption>
  * </MenuOptionGroup>
  * <MenuDivider />
  * <MenuOptionGroup title='Country' type='checkbox'>
    * <MenuItemOption value='email'>Email</MenuItemOption>
    * <MenuItemOption value='phone'>Phone</MenuItemOption>
    * <MenuItemOption value='country'>Country</MenuItemOption>
  * </MenuOptionGroup>
 * </MenuList>
* </Menu>
* ?)
*
*/

export const Menu = ({ variant = 'relaxed', ...props }: MenuProps) => (
  <ChakraMenu variant={ variant } { ...props } />
)
