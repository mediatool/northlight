import { ChakraStylesConfig } from 'chakra-react-select'
import { getContrastColor } from '../../../utils'

export const customSelectStyles: ChakraStylesConfig<any> = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    color: 'text.default',
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused && 'background.select.option-focus',
    _active: {
      background: 'background.select.option-active',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingInlineStart: 'padding-inline.select.default',
  }),
  downChevron: (provided) => ({
    ...provided,
    color: 'icon.select.default',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'text.select.placeholder',
  }),
  multiValue: (provided, state) => {
    const background = state.data.isFixed
      ? 'background.select.option-disabled'
      : state.data.color ?? provided.bgColor
    return ({
      ...provided,
      bgColor: background,
      color: getContrastColor(background),
    })
  },
}
