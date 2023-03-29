import React from 'react'
import ReferencePage from '../../reference-page'

const SplitPanePage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/split-pane/split-pane.tsx',
    description: '',
    displayName: 'SplitPane',
    methods: [],
    props: {
      isOpen: {
        defaultValue: null,
        description: '',
        name: 'isOpen',
        parent: {
          fileName: 'framework/lib/components/split-pane/types.ts',
          name: 'SplitPaneProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/split-pane/types.ts',
            name: 'SplitPaneProps',
          },
        ],
        required: true,
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
      initialSplit: {
        defaultValue: {
          value: '50',
        },
        description: '',
        name: 'initialSplit',
        parent: {
          fileName: 'framework/lib/components/split-pane/types.ts',
          name: 'SplitPaneProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/split-pane/types.ts',
            name: 'SplitPaneProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      minLeftWidth: {
        defaultValue: {
          value: '25',
        },
        description: '',
        name: 'minLeftWidth',
        parent: {
          fileName: 'framework/lib/components/split-pane/types.ts',
          name: 'SplitPaneProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/split-pane/types.ts',
            name: 'SplitPaneProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      minRightWidth: {
        defaultValue: {
          value: '50',
        },
        description: '',
        name: 'minRightWidth',
        parent: {
          fileName: 'framework/lib/components/split-pane/types.ts',
          name: 'SplitPaneProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/split-pane/types.ts',
            name: 'SplitPaneProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      templateColumns: {
        defaultValue: null,
        description: 'Shorthand prop for `gridTemplateColumns`',
        name: 'templateColumns',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridTemplateColumns"]',
        },
      },
      gap: {
        defaultValue: null,
        description: 'Shorthand prop for `gridGap`',
        name: 'gap',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridGap"]',
        },
      },
      rowGap: {
        defaultValue: null,
        description: 'Shorthand prop for `gridRowGap`',
        name: 'rowGap',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridRowGap"]',
        },
      },
      columnGap: {
        defaultValue: null,
        description: 'Shorthand prop for `gridColumnGap`',
        name: 'columnGap',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridColumnGap"]',
        },
      },
      autoFlow: {
        defaultValue: null,
        description: 'Shorthand prop for `gridAutoFlow`',
        name: 'autoFlow',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridAutoFlow"]',
        },
      },
      autoRows: {
        defaultValue: null,
        description: 'Shorthand prop for `gridAutoRows`',
        name: 'autoRows',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridAutoRows"]',
        },
      },
      autoColumns: {
        defaultValue: null,
        description: 'Shorthand prop for `gridAutoColumns`',
        name: 'autoColumns',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridAutoColumns"]',
        },
      },
      templateRows: {
        defaultValue: null,
        description: 'Shorthand prop for `gridTemplateRows`',
        name: 'templateRows',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridTemplateRows"]',
        },
      },
      templateAreas: {
        defaultValue: null,
        description: 'Shorthand prop for `gridTemplateAreas`',
        name: 'templateAreas',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridTemplateAreas"]',
        },
      },
      column: {
        defaultValue: null,
        description: 'Shorthand prop for `gridColumn`',
        name: 'column',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridColumn"]',
        },
      },
      row: {
        defaultValue: null,
        description: 'Shorthand prop for `gridRow`',
        name: 'row',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
          name: 'GridOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/grid.d.ts',
            name: 'GridOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["gridRow"]',
        },
      },
    },
  } }
  />
)

export default SplitPanePage
