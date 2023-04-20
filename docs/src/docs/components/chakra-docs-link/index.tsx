import React from 'react'
import { LinkProps } from '@chakra-ui/react'
import { Link } from '@northlight/ui'

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
