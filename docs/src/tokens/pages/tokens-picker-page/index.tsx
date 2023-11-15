import React, { useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import { isNil, keys, pick, reduce } from 'ramda'
import {
  H1,
  Input,
  P,
  Select,
  SimpleGrid,
  SingleValue,
  Stack,
  VStack,
  useTheme,
} from '@northlight/ui'
import debounce from 'lodash.debounce'
import { flattenTokens } from './utils/flatten-tokens'
import { unFlattenTokensTwoLevels } from './utils/un-flatten-tokens-two-levels'
import { TokenCategory } from './components/token-category'

const TokensPickerPage = () => {
  const myTheme = useTheme()
  const categories = pick(
    [
      'colors',
      'radii',
      'borderWidths',
      'sizes',
      'space',
      'borders',
      'opacity',
      'shadows',
      'fontSizes',
      'fontWeights',
      'fonts',
      'letterSpacings',
      'lineHeights',
    ],
    myTheme
  )
  const [ allTokens, setAllTokens ] = useState<Record<string, any>>(categories)
  const [ query, setQuery ] = useState('')
  const flattenedTokens = useMemo(() => flattenTokens(allTokens), [ allTokens ])

  const fuse = useMemo(
    () =>
      new Fuse(keys(flattenedTokens), {
        threshold: 0.3,
        minMatchCharLength: 2,
      }),
    [ flattenedTokens ]
  )

  type CategoryOption = {
    label: keyof typeof categories
    value: keyof typeof categories
  }

  const selectOptions: CategoryOption[] = keys(categories).map((name) => ({
    label: name,
    value: name,
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 1) {
      setQuery(e.target.value)
    }
  }
  const debouncedHandleChange = debounce(handleChange, 100, {})

  const filteredTokens =
    query.length > 1
      ? reduce(
        (acc: Record<string, any>, curr: { item: string }) => {
          acc[curr.item] = flattenedTokens[curr.item]
          return acc
        },
        {},
        fuse.search(query)
      )
      : flattenedTokens

  const formattedTokens = unFlattenTokensTwoLevels(filteredTokens)

  const handleCategoryChange = (val: SingleValue<CategoryOption>) => {
    setAllTokens(
      isNil(val) ? categories : { [val.value]: categories[val.value] }
    )
  }

  return (
    <Stack w={ { base: 'full', md: '3xl' } } spacing="8">
      <Stack>
        <H1>Design tokens picker</H1>
        <P>
          Our design tokens picker streamlines the search and selection process,
          allowing you to quickly filter and find the exact design tokens you need.
          It's a handy tool that enhances efficiency and consistency in your design workflow.
        </P>
      </Stack>
      <SimpleGrid columns={ { base: 1, md: 2 } } gap="5" py="8">
        <Input
          placeholder="Filter design tokens 🌈"
          variant="flushed"
          onChange={ debouncedHandleChange }
        />
        <Select
          placeholder="Tokens category"
          options={ selectOptions }
          onChange={ handleCategoryChange }
          isClearable={ true }
        />
      </SimpleGrid>
      <VStack spacing="12" w="full">
        { keys(formattedTokens).map((category) => (
          <TokenCategory
            tokenCategory={ category }
            tokens={ formattedTokens[category] }
            key={ category }
          />
        )) }
      </VStack>
    </Stack>
  )
}

export default TokensPickerPage
