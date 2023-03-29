import React from 'react'
import ReferencePage from '../../reference-page'

const MultiSortPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/drag-and-drop/multi-sort.tsx',
    description: '',
    displayName: 'MultiSort',
    methods: [],
    props: {
      items: {
        defaultValue: null,
        description: '',
        name: 'items',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'MultiSortProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'MultiSortProps',
          },
        ],
        required: true,
        type: {
          name: 'MultiItemType<itemKeys>',
        },
      },
      collisionDetection: {
        defaultValue: null,
        description: '',
        name: 'collisionDetection',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'MultiSortProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'MultiSortProps',
          },
        ],
        required: false,
        type: {
          name: 'CollisionDetection',
        },
      },
      onChange: {
        defaultValue: {
          value: '() => {}',
        },
        description: '',
        name: 'onChange',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'MultiSortProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'MultiSortProps',
          },
        ],
        required: false,
        type: {
          name: '(items: MultiItemType<itemKeys>) => void',
        },
      },
      sensors: {
        defaultValue: null,
        description: '',
        name: 'sensors',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'MultiSortProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'MultiSortProps',
          },
        ],
        required: false,
        type: {
          name: 'SensorDescriptor<SensorOptions>[]',
        },
      },
    },
  } }
  />
)

export default MultiSortPage
