type CurrencySymbolPosition = 'prefix' | 'suffix'
type ResolvedNumberParts = {
  currencySymbol: string
  currencySymbolPosition: CurrencySymbolPosition
  decimal: string
  group: string
}

type LocalizedNumberOptions = Intl.ResolvedNumberFormatOptions & ResolvedNumberParts

export function getLocalizedNumberOptions (
  locales?: string | string[],
  options?: Intl.NumberFormatOptions
): LocalizedNumberOptions {
  const format = new Intl.NumberFormat(locales, options)
  const templateInput = 10000.45
  const numberParts = format.formatToParts(templateInput)
  const resolvedOptions = format.resolvedOptions()

  const parts = numberParts.reduce((acc, part, index) => {
    if (part.type === 'currency') {
      acc.currencySymbol = part.value
      acc.currencySymbolPosition = index === 0
        ? 'prefix'
        : 'suffix'
      return acc
    }
    if (part.type === 'decimal') {
      acc.decimal = part.value
      return acc
    }
    if (part.type === 'group') {
      acc.group = part.value
      return acc
    }

    return acc
  }, {
    currencySymbol: '', decimal: '', group: '', currencySymbolPosition: 'prefix',
  } as ResolvedNumberParts)

  return { ...resolvedOptions, ...parts }
}
