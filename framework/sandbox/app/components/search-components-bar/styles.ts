import { ChakraStylesConfig } from 'chakra-react-select'
import { palette } from '@mediatool/tokens'

export const searchComponentsBarStyles: ChakraStylesConfig = {
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
