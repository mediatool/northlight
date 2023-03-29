import React from 'react'
import ReferencePage from '../../reference-page'

const SortableItemPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/drag-and-drop/sortable-item.tsx',
    description: '',
    displayName: 'SortableItem',
    methods: [],
    props: {
      itemLabel: {
        defaultValue: {
          value: 'Drag me',
        },
        description: '',
        name: 'itemLabel',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableItemProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableItemProps',
          },
        ],
        required: false,
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
      dblClickThreshold: {
        defaultValue: {
          value: '300',
        },
        description: '',
        name: 'dblClickThreshold',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'SortableItemProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableItemProps',
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
          name: 'SortableItemProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'SortableItemProps',
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
      animateLayoutChanges: {
        defaultValue: null,
        description: '',
        name: 'animateLayoutChanges',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
          name: 'Arguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
            name: 'Arguments',
          },
        ],
        required: false,
        type: {
          name: 'AnimateLayoutChanges',
        },
      },
      disabled: {
        defaultValue: null,
        description: '',
        name: 'disabled',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
          name: 'Arguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
            name: 'Arguments',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean | Disabled',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'Disabled',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      getNewIndex: {
        defaultValue: null,
        description: '',
        name: 'getNewIndex',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
          name: 'Arguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
            name: 'Arguments',
          },
        ],
        required: false,
        type: {
          name: 'NewIndexGetter',
        },
      },
      strategy: {
        defaultValue: null,
        description: '',
        name: 'strategy',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
          name: 'Arguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
            name: 'Arguments',
          },
        ],
        required: false,
        type: {
          name: 'SortingStrategy',
        },
      },
      transition: {
        defaultValue: null,
        description: '',
        name: 'transition',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
          name: 'Arguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/sortable/dist/hooks/useSortable.d.ts',
            name: 'Arguments',
          },
        ],
        required: false,
        type: {
          name: 'SortableTransition',
        },
      },
      data: {
        defaultValue: null,
        description: '',
        name: 'data',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/hooks/useDraggable.d.ts',
          name: 'UseDraggableArguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/hooks/useDraggable.d.ts',
            name: 'UseDraggableArguments',
          },
        ],
        required: false,
        type: {
          name: 'AnyData',
        },
      },
      id: {
        defaultValue: null,
        description: '',
        name: 'id',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/hooks/useDraggable.d.ts',
          name: 'UseDraggableArguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/hooks/useDraggable.d.ts',
            name: 'UseDraggableArguments',
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
      attributes: {
        defaultValue: null,
        description: '',
        name: 'attributes',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/hooks/useDraggable.d.ts',
          name: 'UseDraggableArguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/hooks/useDraggable.d.ts',
            name: 'UseDraggableArguments',
          },
        ],
        required: false,
        type: {
          name: '{ role?: string; roleDescription?: string; tabIndex?: number; }',
        },
      },
      resizeObserverConfig: {
        defaultValue: null,
        description: '',
        name: 'resizeObserverConfig',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/hooks/useDroppable.d.ts',
          name: 'UseDroppableArguments',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/hooks/useDroppable.d.ts',
            name: 'UseDroppableArguments',
          },
        ],
        required: false,
        type: {
          name: 'ResizeObserverConfig',
        },
      },
    },
  } }
  />
)

export default SortableItemPage
