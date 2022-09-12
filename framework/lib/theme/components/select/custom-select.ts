import { ChakraStylesConfig } from 'chakra-react-select'
import { color, spacing } from '@mediatool/tokens'
import { getContrastColor } from '../../../utilities'

export const customSelectStyles: ChakraStylesConfig<any> = {
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
  placeholder: (provided) => ({
    ...provided,
    color: color.text.select.placeholder,
  }),
  multiValue: (provided, state) => {
    const background = state.data.isFixed
      ? color.background.select['option-disabled']
      : state.data.color ?? provided.bgColor
    return ({
      ...provided,
      bgColor: background,
      color: getContrastColor(background),
    })
  },
}
