import { ChakraStylesConfig } from 'chakra-react-select'
import { color, spacing } from '~/tokens'

export const customSelectStyles:ChakraStylesConfig = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    color: color.text.default,
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused && color.background.select['option-focus'],
    _active: {
      background: color.background.select['option-active'],
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingInlineStart: spacing['padding-inline'].select.default,
  }),
  downChevron: (provided) => ({
    ...provided,
    color: color.icon.select.default,
  }),
}
