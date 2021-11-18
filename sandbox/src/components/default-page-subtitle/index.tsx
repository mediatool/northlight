import React, { ReactNode } from 'react'
import { ChakraDocsLink } from '../chakra-docs-link'

interface Props {
  slug: string
  linkText: ReactNode
}

export const DefaultPageSubtitle = ({
  slug,
  linkText,
}: Props) => (
  <>
    Re-export of&nbsp;
    <ChakraDocsLink slug={ slug }>
      { linkText }
    </ChakraDocsLink>
  </>
)
