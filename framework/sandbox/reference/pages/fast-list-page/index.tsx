import React from 'react'
import ReferencePage from '../../reference-page'

const FastListPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/fast-list/fast-list.tsx',
    description: '',
    displayName: 'FastList',
    methods: [],
    props: {
      itemSize: {
        defaultValue: null,
        description: '',
        name: 'itemSize',
        parent: {
          fileName: 'framework/lib/components/fast-list/types.ts',
          name: 'FastListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-list/types.ts',
            name: 'FastListProps',
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
      itemCount: {
        defaultValue: null,
        description: 'Total number of items in the list. Note that only a few items will be rendered and displayed at a time.',
        name: 'itemCount',
        parent: {
          fileName: 'framework/lib/components/fast-list/types.ts',
          name: 'FastListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-list/types.ts',
            name: 'FastListProps',
          },
        ],
        required: true,
        type: {
          name: 'number',
        },
      },
      direction: {
        defaultValue: {
          value: 'column',
        },
        description: '',
        name: 'direction',
        parent: {
          fileName: 'framework/lib/components/fast-list/types.ts',
          name: 'FastListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-list/types.ts',
            name: 'FastListProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'StackDirection',
          value: [
            {
              value: '"row"',
            },
            {
              value: '"column"',
            },
            {
              value: '"column-reverse"',
            },
            {
              value: '"row-reverse"',
            },
            {
              value: 'ResponsiveArray<"row" | "column" | "column-reverse" | "row-reverse">',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'Partial<Record<string | (string & {}), "row" | "column" | "column-reverse" | "row-reverse">>',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      width: {
        defaultValue: null,
        description: '',
        name: 'width',
        parent: {
          fileName: 'framework/lib/components/fast-list/types.ts',
          name: 'FastListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-list/types.ts',
            name: 'FastListProps',
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
          fileName: 'framework/lib/components/fast-list/types.ts',
          name: 'FastListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-list/types.ts',
            name: 'FastListProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      initialScrollOffset: {
        defaultValue: null,
        description: 'Scroll offset for initial render.\n\nFor vertical lists, this affects scrollTop. For horizontal lists, this affects scrollLeft.',
        name: 'initialScrollOffset',
        parent: {
          fileName: 'framework/lib/components/fast-list/types.ts',
          name: 'FastListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-list/types.ts',
            name: 'FastListProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      overscanCount: {
        defaultValue: {
          value: '0',
        },
        description: 'The number of items (rows or columns) to render outside of the visible area. This property can be important for two reasons:\n\n- Overscanning by one row or column allows the tab key to focus on the next (not yet visible) item.\n- Overscanning slightly can reduce or prevent a flash of empty space when a user first starts scrolling.\n\nNote that overscanning too much can negatively impact performance. By default, List overscans by one item.',
        name: 'overscanCount',
        parent: {
          fileName: 'framework/lib/components/fast-list/types.ts',
          name: 'FastListProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/fast-list/types.ts',
            name: 'FastListProps',
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

export default FastListPage
