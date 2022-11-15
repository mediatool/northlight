import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'

export const Spinner: ComponentSingleStyleConfig = {
  baseStyle: ({ theme: { colors: color, borders: borderWidth } }) => ({
    borderWidth: borderWidth.spinner.default,
    color: color.background.spinner.thumb,
    borderBottomColor: color.background.spinner.track,
    borderLeftColor: color.background.spinner.track,
  }),
}
