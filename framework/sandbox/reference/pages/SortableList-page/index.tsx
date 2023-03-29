import React from 'react'
import ReferencePage from '../../reference-page'

const SortableListPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/drag-and-drop/sortable-list.tsx',
    description: '',
    displayName: 'SortableList',
    methods: [],
    props: {
      items: {
        defaultValue: null,
        description: '',
        name: 'items',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: true,
        type: {
          name: 'T[]',
        },
      },
      collisionDetection: {
        defaultValue: null,
        description: '',
        name: 'collisionDetection',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: 'CollisionDetection',
        },
      },
      strategy: {
        defaultValue: null,
        description: '',
        name: 'strategy',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: 'SortingStrategy',
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
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: '(items: T[]) => void',
        },
      },
      createKey: {
        defaultValue: {
          value: 'identity as (t: T) => UniqueIdentifier',
        },
        description: '',
        name: 'createKey',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: '(item: T) => UniqueIdentifier',
        },
      },
      displayOverlay: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'displayOverlay',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      sensors: {
        defaultValue: null,
        description: '',
        name: 'sensors',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: 'SensorDescriptor<SensorOptions>[]',
        },
      },
      dblClickThreshold: {
        defaultValue: {
          value: '300',
        },
        description: '',
        name: 'dblClickThreshold',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      disableDrag: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'disableDrag',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      onMovedItem: {
        defaultValue: null,
        description: '',
        name: 'onMovedItem',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableListProps',
          },
        ],
        required: false,
        type: {
          name: '({ item, oldIndex, newIndex }: MovedItemType<T>) => void',
        },
      },
    },
  } }
  />
)

export default SortableListPage