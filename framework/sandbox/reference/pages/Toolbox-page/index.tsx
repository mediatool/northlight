import React from 'react'
import ReferencePage from '../../reference-page'

const ToolboxPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/toolbox/toolbox.tsx',
    description: '',
    displayName: 'Toolbox',
    methods: [],
    props: {
      isOpen: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'isOpen',
        parent: {
          fileName: 'framework/lib/components/toolbox/types.ts',
          name: 'ToolboxProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/toolbox/types.ts',
            name: 'ToolboxProps',
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
      direction: {
        defaultValue: {
          value: 'right',
        },
        description: '',
        name: 'direction',
        parent: {
          fileName: 'framework/lib/components/toolbox/types.ts',
          name: 'ToolboxProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/toolbox/types.ts',
            name: 'ToolboxProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"right" | "left"',
          value: [
            {
              value: '"right"',
            },
            {
              value: '"left"',
            },
          ],
        },
      },
      shouldPush: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'shouldPush',
        parent: {
          fileName: 'framework/lib/components/toolbox/types.ts',
          name: 'ToolboxProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/toolbox/types.ts',
            name: 'ToolboxProps',
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
      size: {
        defaultValue: {
          value: 'md',
        },
        description: '',
        name: 'size',
        parent: {
          fileName: 'framework/lib/components/toolbox/types.ts',
          name: 'ToolboxProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/toolbox/types.ts',
            name: 'ToolboxProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"sm" | "md" | "lg"',
          value: [
            {
              value: '"sm"',
            },
            {
              value: '"md"',
            },
            {
              value: '"lg"',
            },
          ],
        },
      },
      onClose: {
        defaultValue: null,
        description: '',
        name: 'onClose',
        parent: {
          fileName: 'framework/lib/components/toolbox/types.ts',
          name: 'ToolboxProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/toolbox/types.ts',
            name: 'ToolboxProps',
          },
        ],
        required: true,
        type: {
          name: '() => void',
        },
      },
      autoFocus: {
        defaultValue: {
          value: 'true',
        },
        description: '',
        name: 'autoFocus',
        parent: {
          fileName: 'framework/lib/components/toolbox/types.ts',
          name: 'ToolboxProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/toolbox/types.ts',
            name: 'ToolboxProps',
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
      justify: {
        defaultValue: null,
        description: 'Shorthand for `justifyContent` style prop',
        name: 'justify',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
          name: 'FlexOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
            name: 'FlexOptions',
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
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
          name: 'FlexOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
            name: 'FlexOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["flexWrap"]',
        },
      },
      align: {
        defaultValue: null,
        description: 'Shorthand for `alignItems` style prop',
        name: 'align',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
          name: 'FlexOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
            name: 'FlexOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["alignItems"]',
        },
      },
      basis: {
        defaultValue: null,
        description: 'Shorthand for `flexBasis` style prop',
        name: 'basis',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
          name: 'FlexOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
            name: 'FlexOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["flexBasis"]',
        },
      },
      grow: {
        defaultValue: null,
        description: 'Shorthand for `flexGrow` style prop',
        name: 'grow',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
          name: 'FlexOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
            name: 'FlexOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["flexGrow"]',
        },
      },
      shrink: {
        defaultValue: null,
        description: 'Shorthand for `flexShrink` style prop',
        name: 'shrink',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
          name: 'FlexOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/layout/dist/flex.d.ts',
            name: 'FlexOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["flexShrink"]',
        },
      },
    },
  } }
  />
)

export default ToolboxPage