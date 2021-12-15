import { useI18n } from '@shopify/react-i18n'
import { TextInputFormatter } from '~lib/components/textfield'

export const useLocalizedNumberFormatter = () => {
  const [ i18n ] = useI18n()

  const numberFormatter: TextInputFormatter = {
    format: (value) => i18n.formatNumber(parseFloat(value)),
    unFormat: (formattedValue) => i18n.unformatNumber(formattedValue),
  }

  return numberFormatter
}
