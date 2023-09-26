import React, { ReactNode } from 'react'
import { Heading } from '@northlight/ui/ts'
import { ChakraDocsLink } from '../chakra-docs-link'

interface Props {
  slug: string
  linkText: ReactNode
}

export const DefaultPageSubtitle = ({
  slug,
  linkText,
}: Props) => (
  <Heading as="h2" size="sm">
    Based on&nbsp;
    <ChakraDocsLink slug={ slug }>
      { linkText }
    </ChakraDocsLink>
  </Heading>
)
