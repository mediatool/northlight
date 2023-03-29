import React from 'react'
import ReferencePage from '../../reference-page'

const FastGridPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/fast-grid/fast-grid.tsx',
    description: '',
    displayName: 'FastGrid',
    methods: [],
    props: {
      columnSize: {
        defaultValue: null,
        description: '',
        name: 'columnSize',
        parent: {
          fileName: 'framework/lib/components/fast-grid/types.ts',
          name: 'FastGridProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-grid/types.ts',
            name: 'FastGridProps',
          },
        ],
        required: true,
        type: {
          name: 'enum',
          raw: 'number | ((index: number) => number)',
          value: [
            {
              value: 'number',
            },
            {
              value: '(index: number) => number',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      rowSize: {
        defaultValue: null,
        description: '',
        name: 'rowSize',
        parent: {
          fileName: 'framework/lib/components/fast-grid/types.ts',
          name: 'FastGridProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-grid/types.ts',
            name: 'FastGridProps',
          },
        ],
        required: true,
        type: {
          name: 'enum',
          raw: 'number | ((index: number) => number)',
          value: [
            {
              value: 'number',
            },
            {
              value: '(index: number) => number',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      columns: {
        defaultValue: null,
        description: '',
        name: 'columns',
        parent: {
          fileName: 'framework/lib/components/fast-grid/types.ts',
          name: 'FastGridProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-grid/types.ts',
            name: 'FastGridProps',
          },
        ],
        required: true,
        type: {
          name: 'number',
        },
      },
      rows: {
        defaultValue: null,
        description: '',
        name: 'rows',
        parent: {
          fileName: 'framework/lib/components/fast-grid/types.ts',
          name: 'FastGridProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-grid/types.ts',
            name: 'FastGridProps',
          },
        ],
        required: true,
        type: {
          name: 'number',
        },
      },
      width: {
        defaultValue: null,
        description: '',
        name: 'width',
        parent: {
          fileName: 'framework/lib/components/fast-grid/types.ts',
          name: 'FastGridProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-grid/types.ts',
            name: 'FastGridProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      height: {
        defaultValue: null,
        description: '',
        name: 'height',
        parent: {
          fileName: 'framework/lib/components/fast-grid/types.ts',
          name: 'FastGridProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-grid/types.ts',
            name: 'FastGridProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      overscanRowCount: {
        defaultValue: {
          value: '0',
        },
        description: 'The number of rows to render outside of the visible area. This property can be important for two reasons:\n\n- Overscanning by one row or column allows the tab key to focus on the next (not yet visible) item.\n- Overscanning slightly can reduce or prevent a flash of empty space when a user first starts scrolling.\n\nNote that overscanning too much can negatively impact performance. By default, grid overscans by one item.',
        name: 'overscanRowCount',
        parent: {
          fileName: 'framework/lib/components/fast-grid/types.ts',
          name: 'FastGridProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-grid/types.ts',
            name: 'FastGridProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      overscanColumnCount: {
        defaultValue: {
          value: '0',
        },
        description: 'The number of columns to render outside of the visible area. This property can be important for two reasons:\n\n- Overscanning by one row or column allows the tab key to focus on the next (not yet visible) item.\n- Overscanning slightly can reduce or prevent a flash of empty space when a user first starts scrolling.\n\nNote that overscanning too much can negatively impact performance. By default, grid overscans by one item.',
        name: 'overscanColumnCount',
        parent: {
          fileName: 'framework/lib/components/fast-grid/types.ts',
          name: 'FastGridProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-grid/types.ts',
            name: 'FastGridProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
    },
  } }
  />
)

export default FastGridPage
