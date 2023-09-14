import { ChakraStylesConfig } from 'chakra-react-select'
import { customSelectStyles } from '../../theme/components/select/custom-select'

export const tagsInputStyles = (
  isFocused: boolean,
  borderColor: string
): ChakraStylesConfig<any> => ({
  ...customSelectStyles,
  container: (provided) => ({
    ...provided,
    w: 'full',
    height: '100%',
    resize: 'vertical',
    overflow: 'auto',
    minHeight: '20',
    borderColor: 'select.default',
    borderRadius: 'select.default',
    transitionDuration: 'normal',
    transitionProperty: 'box-shadow',
    color: 'text.default',
    boxShadow: isFocused ? `0 0 0 1px ${borderColor}` : 'none',
  }),
  control: (provided) => ({
    ...provided,
    minHeight: '20',
    height: '100%',
    alignItems: 'start',
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingInlineStart: 'padding-inline.select.default',
    overflowY: 'auto',
    maxH: '100%',
  }),
})
