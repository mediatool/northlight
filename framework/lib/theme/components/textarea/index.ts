import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Textarea: ComponentSingleStyleConfig = {
  sizes: {
    lg: {
      borderRadius: 'md',
    },
    sm: {
      borderRadius: 'md',
    },
  },
  variants: {
    outline: {
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
    filled: {
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
    flushed: {
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
}
