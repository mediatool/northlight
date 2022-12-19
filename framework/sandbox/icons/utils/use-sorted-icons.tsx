import { ChangeEvent, useState } from 'react'
import Fuse from 'fuse.js'
import { map, prop } from 'ramda'
import debounce from 'lodash.debounce'
import { useIcons } from './use-icons'

export const useSortedIcons = (iconVariant: 'duo' | 'solid') => {
  const icons = useIcons(iconVariant)
  const [ query, setQuery ] = useState('')

  const fuse = new Fuse(icons, {
    threshold: 0.2,
    keys: [ 'label' ],
  })

  const sortedIcons = query.length > 1
    ? map(prop('item'), fuse.search(query))
    : icons

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 1) {
      setQuery(e.target.value)
    }
  }

  const debouncedHandleChange = debounce(handleChange, 200, {})
  return { sortedIcons, debouncedHandleChange }
}
