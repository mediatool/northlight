import {
  ComponentSingleStyleConfig,
} from '@chakra-ui/react'
import { borderWidth, color } from '@mediatool/tokens'

export const Spinner: ComponentSingleStyleConfig = {
  baseStyle: () => ({
    borderWidth: borderWidth.spinner.default,
    color: color.background.spinner.thumb,
    borderBottomColor: color.background.spinner.track,
    borderLeftColor: color.background.spinner.track,
  }),
}
