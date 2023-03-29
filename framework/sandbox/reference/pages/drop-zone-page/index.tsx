import React from 'react'
import ReferencePage from '../../reference-page'

const DropZonePage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/drag-and-drop/drop-zone.tsx',
    description: '',
    displayName: 'DropZone',
    methods: [],
    props: {
      sx: {
        defaultValue: {
          value: '{}',
        },
        description: '',
        name: 'sx',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'DropZoneProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'DropZoneProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'SystemStyleObject',
          value: [
            {
              value: 'CSSWithMultiValues',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'CSSWithMultiValues & RecursivePseudo<CSSWithMultiValues>',
            },
            {
              value: 'CSSWithMultiValues & RecursiveCSSSelector<CSSWithMultiValues>',
            },
          ],
        },
      },
      name: {
        defaultValue: null,
        description: '',
        name: 'name',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'DropZoneProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'DropZoneProps',
          },
        ],
        required: true,
        type: {
          name: 'enum',
          raw: 'UniqueIdentifier',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
          ],
        },
      },
    },
  } }
  />
)

export default DropZonePage
