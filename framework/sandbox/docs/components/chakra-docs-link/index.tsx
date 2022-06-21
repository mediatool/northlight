import React from 'react'
import { Link } from '~lib/components'
import { LinkProps } from '@chakra-ui/react'

type Props = {
  slug: string
} & LinkProps

export const ChakraDocsLink = ({ slug, ...rest }: Props) => (
  <Link
    { ...rest }
    target="_blank"
    color="blue.500"
    href={ `https://chakra-ui.com/docs/components${slug}/props` }
  />
)
