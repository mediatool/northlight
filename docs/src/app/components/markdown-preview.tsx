import React from 'react'
import Markdown from 'markdown-to-jsx'
import {
  Blockquote,
  Box,
  Button,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Image,
  Input,
  Kbd,
  Label,
  Link,
  ListItem,
  OrderedList,
  P,
  Small,
  Table,
  Tbody,
  Td,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from '@northlight/ui/ts'

export const MarkdownPreview: typeof Markdown = (props) => (
  <Markdown
    options={ {
      overrides: {
        p: {
          component: P,
        },
        h1: {
          component: H1,
        },
        h2: {
          component: H2,
        },
        h3: {
          component: H3,
        },
        h4: {
          component: H4,
        },
        h5: {
          component: H5,
        },
        h6: {
          component: H6,
        },
        a: {
          component: Link,
        },
        blockquote: {
          component: Blockquote,
        },
        small: {
          component: Small,
        },
        code: {
          component: Code,
        },
        button: {
          component: Button,
        },
        div: {
          component: Box,
        },
        img: {
          component: Image,
        },
        input: {
          component: Input,
        },
        textarea: {
          component: Textarea,
        },
        kbd: {
          component: Kbd,
        },
        label: {
          component: Label,
        },
        table: {
          component: Table,
        },
        thead: {
          component: Thead,
        },
        tbody: {
          component: Tbody,
        },
        tfoot: {
          component: Tfoot,
        },
        td: {
          component: Td,
        },
        th: {
          component: Th,
        },
        tr: {
          component: Tr,
        },
        li: {
          component: ListItem,
        },
        ol: {
          component: OrderedList,
        },
        ul: {
          component: UnorderedList,
        },
      },
    } }
    { ...props }
  />
)
