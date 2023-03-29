import React from 'react'
import ReferencePage from '../../reference-page'

const DragAndDropPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/drag-and-drop/drag-and-drop.tsx',
    description: '',
    displayName: 'DragAndDrop',
    methods: [],
    props: {
      id: {
        defaultValue: null,
        description: '',
        name: 'id',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      accessibility: {
        defaultValue: null,
        description: '',
        name: 'accessibility',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '{ announcements?: Announcements; container?: Element; restoreFocus?: boolean; screenReaderInstructions?: ScreenReaderInstructions; }',
        },
      },
      autoScroll: {
        defaultValue: null,
        description: '',
        name: 'autoScroll',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean | Options',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'Options',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      cancelDrop: {
        defaultValue: null,
        description: '',
        name: 'cancelDrop',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'CancelDrop',
        },
      },
      collisionDetection: {
        defaultValue: null,
        description: '',
        name: 'collisionDetection',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'CollisionDetection',
        },
      },
      measuring: {
        defaultValue: null,
        description: '',
        name: 'measuring',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'MeasuringConfiguration',
        },
      },
      modifiers: {
        defaultValue: null,
        description: '',
        name: 'modifiers',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'Modifiers',
        },
      },
      sensors: {
        defaultValue: null,
        description: '',
        name: 'sensors',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'SensorDescriptor<any>[]',
        },
      },
      onDragStart: {
        defaultValue: null,
        description: '',
        name: 'onDragStart',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(event: DragStartEvent) => void',
        },
      },
      onDragMove: {
        defaultValue: null,
        description: '',
        name: 'onDragMove',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(event: DragMoveEvent) => void',
        },
      },
      onDragOver: {
        defaultValue: null,
        description: '',
        name: 'onDragOver',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(event: DragOverEvent) => void',
        },
      },
      onDragEnd: {
        defaultValue: null,
        description: '',
        name: 'onDragEnd',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(event: DragEndEvent) => void',
        },
      },
      onDragCancel: {
        defaultValue: null,
        description: '',
        name: 'onDragCancel',
        parent: {
          fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@dnd-kit/core/dist/components/DndContext/DndContext.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(event: DragCancelEvent) => void',
        },
      },
    },
  } }
  />
)

export default DragAndDropPage