import React from 'react'
import ReferencePage from '../../reference-page'

const ProgressBarPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/progress/progress-bar.tsx',
    description: '',
    displayName: 'ProgressBar',
    methods: [],
    props: {
      loaded: {
        defaultValue: null,
        description: '',
        name: 'loaded',
        parent: {
          fileName: 'framework/lib/components/progress/types.ts',
          name: 'ProgressBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/progress/types.ts',
            name: 'ProgressBarProps',
          },
        ],
        required: true,
        type: {
          name: 'number',
        },
      },
      hideDisplay: {
        defaultValue: {
          value: 'true',
        },
        description: '',
        name: 'hideDisplay',
        parent: {
          fileName: 'framework/lib/components/progress/types.ts',
          name: 'ProgressBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/progress/types.ts',
            name: 'ProgressBarProps',
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
      onLoadEnd: {
        defaultValue: {
          value: '() => {}',
        },
        description: '',
        name: 'onLoadEnd',
        parent: {
          fileName: 'framework/lib/components/progress/types.ts',
          name: 'ProgressBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/progress/types.ts',
            name: 'ProgressBarProps',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      align: {
        defaultValue: null,
        description: 'Shorthand for `alignItems` style prop',
        name: 'align',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
          name: 'StackOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
            name: 'StackOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["alignItems"]',
        },
      },
      justify: {
        defaultValue: null,
        description: 'Shorthand for `justifyContent` style prop',
        name: 'justify',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
          name: 'StackOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
            name: 'StackOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["justifyContent"]',
        },
      },
      wrap: {
        defaultValue: null,
        description: 'Shorthand for `flexWrap` style prop',
        name: 'wrap',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
          name: 'StackOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
            name: 'StackOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["flexWrap"]',
        },
      },
      spacing: {
        defaultValue: {
          value: '"0.5rem"',
        },
        description: 'The space between each stack item',
        name: 'spacing',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
          name: 'StackOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
            name: 'StackOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["margin"]',
        },
      },
      direction: {
        defaultValue: {
          value: '"column"',
        },
        description: 'The direction to stack the items.',
        name: 'direction',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
          name: 'StackOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
            name: 'StackOptions',
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
      divider: {
        defaultValue: null,
        description: 'If `true`, each stack item will show a divider',
        name: 'divider',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
          name: 'StackOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
            name: 'StackOptions',
          },
        ],
        required: false,
        type: {
          name: 'React.ReactElement',
        },
      },
      shouldWrapChildren: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the children will be wrapped in a `Box` with\n`display: inline-block`, and the `Box` will take the spacing props',
        name: 'shouldWrapChildren',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
          name: 'StackOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
            name: 'StackOptions',
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
      isInline: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true` the items will be stacked horizontally.',
        name: 'isInline',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
          name: 'StackOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/stack/stack.d.ts',
            name: 'StackOptions',
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
    },
  } }
  />
)

export default ProgressBarPage
