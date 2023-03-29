import React from 'react'
import ReferencePage from '../../reference-page'

const TinyPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/typography/stylized/tiny.tsx',
    description: '',
    displayName: 'Tiny',
    methods: [],
    props: {
      align: {
        defaultValue: null,
        description: 'The CSS `text-align` property',
        name: 'align',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/text.d.ts',
          name: 'TextProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/text.d.ts',
            name: 'TextProps',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["textAlign"]',
        },
      },
      decoration: {
        defaultValue: null,
        description: 'The CSS `text-decoration` property',
        name: 'decoration',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/text.d.ts',
          name: 'TextProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/text.d.ts',
            name: 'TextProps',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["textDecoration"]',
        },
      },
      casing: {
        defaultValue: null,
        description: 'The CSS `text-transform` property',
        name: 'casing',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/text.d.ts',
          name: 'TextProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/text.d.ts',
            name: 'TextProps',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["textTransform"]',
        },
      },
    },
  } }
  />
)

export default TinyPage
