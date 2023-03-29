import React from 'react'
import ReferencePage from '../../reference-page'

const DraggablePage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/drag-and-drop/draggable.tsx',
    description: '',
    displayName: 'Draggable',
    methods: [],
    props: {
      itemLabel: {
        defaultValue: null,
        description: '',
        name: 'itemLabel',
        parent: {
          fileName: 'framework/lib/components/drag-and-drop/types.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
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
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/drag-and-drop/types.ts',
            name: 'DraggableProps',
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
      disabled: {
        defaultValue: null,
        description: '',
        name: 'disabled',
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
    },
  } }
  />
)

export default DraggablePage
