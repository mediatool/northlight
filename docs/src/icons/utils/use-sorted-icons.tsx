import { ChangeEvent, useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import { map, prop } from 'ramda'
import debounce from 'lodash.debounce'
import { useIcons } from './use-icons.tsx'
import { IconVariantType } from './types.ts'

export const useSortedIcons = (iconVariant: IconVariantType) => {
  const icons = useIcons(iconVariant)
  const [ query, setQuery ] = useState('')

  const fuse = useMemo(() => new Fuse(icons, {
    threshold: 0.2,
    keys: [ 'label' ],
  }), [ icons ])

  const sortedIcons = query.length > 1
    ? map(prop('item'), fuse.search(query))
    : icons

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 1) {
      setQuery(e.target.value)
    }
  }

  const debouncedHandleChange = debounce(handleChange, 100, {})
  return { sortedIcons, debouncedHandleChange }
}
