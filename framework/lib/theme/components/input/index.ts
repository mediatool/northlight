import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Input: ComponentMultiStyleConfig = {
  parts: [ 'element', 'field', 'addon' ],
  baseStyle: {
    addon: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
  },
  sizes: {
    lg: {
      field: {
        borderRadius: 'md',
      },
    },
    sm: {
      field: {
        borderRadius: 'md',
      },
    },
  },
  variants: {
    outline: {
      field: {
        border: '2px solid',
        borderColor: 'gray.200',
        outline: 'none',
        _hover: {
          borderColor: 'mediatoolBlue.500',
          color: 'mediatoolBlue.500',
        },
        _groupHover: {
          borderColor: 'mediatoolBlue.500',
          color: 'mediatoolBlue.500',
        },
        _focus: {
          borderColor: 'mediatoolBlue.500',
          color: 'mediatoolBlue.500',
          boxShadow: 'none',
          fontWeight: 'semibold',
        },
        _invalid: {
          bg: 'red.50',
          color: 'red.500',
          fontWeight: 'semibold',
          boxShadow: 'none',
        },
        _readOnly: {
          _hover: {
            borderColor: 'gray.200',
          },
          _focus: {
            borderColor: 'gray.200',
            fontWeight: 'normal',
            color: 'gray.700',
          },
        },
        _disabled: {
          _hover: {
            borderColor: 'gray.100',
          },
        },
      },
      addon: {
        bg: 'gray.50',
        borderWidth: '2px',
        _groupHover: {
          bg: 'blue.50',
          borderColor: 'mediatoolBlue.500',
        },
      },
    },
    filled: {
      field: {
        bg: 'gray.50',
        outline: 'none',
        _hover: {
          bg: 'mediatoolBlue.50',
          color: 'mediatoolBlue.500',
        },
        _focus: {
          borderColor: 'mediatoolBlue.500',
          color: 'mediatoolBlue.500',
          bg: 'white',
          boxShadow: 'none',
          fontWeight: 'semibold',
        },
        _invalid: {
          bg: 'red.50',
          color: 'red.500',
          fontWeight: 'semibold',
        },
        _disabled: {
          _hover: {
            bg: 'gray.50',
          },
        },
        _readOnly: {
          _hover: {
            bg: 'gray.50',
          },
          _focus: {
            bg: 'gray.50',
            fontWeight: 'normal',
            color: 'gray.700',
          },
        },
      },
    },
    flushed: {
      field: {
        borderBottom: '2px solid',
        borderColor: 'gray.200',
        _hover: {
          color: 'mediatoolBlue.500',
        },
        _focus: {
          boxShadow: 'none',
          borderColor: 'mediatoolBlue.500',
          color: 'mediatoolBlue.500',
          fontWeight: 'semibold',
        },
        _invalid: {
          bg: 'red.50',
          color: 'red.500',
          fontWeight: 'semibold',
        },
        _disabled: {
          borderBottomColor: 'gray.50',
          _hover: {
            cursor: 'not-allowed',
          },
        },
        _readOnly: {
          _hover: {
            bg: 'gray.50',
          },
          _focus: {
            bg: 'gray.50',
            fontWeight: 'normal',
            color: 'gray.700',
          },
        },
      },
    },
  },
}
