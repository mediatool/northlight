import React from 'react'
import ReferencePage from '../../reference-page'

const ColorPickerFieldPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: 'lib/components/color-picker/color-picker-field.tsx',
    description: '',
    displayName: 'ColorPickerField',
    methods: [],
    props: {
      onChange: {
        defaultValue: null,
        description: '',
        name: 'onChange',
        parent: {
          fileName: 'framework/lib/components/color-picker/types.ts',
          name: 'ColorPickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/color-picker/types.ts',
            name: 'ColorPickerProps',
          },
        ],
        required: false,
        type: {
          name: '(value: string) => void',
        },
      },
      colors: {
        defaultValue: null,
        description: '',
        name: 'colors',
        parent: {
          fileName: 'framework/lib/components/color-picker/types.ts',
          name: 'ColorPickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/color-picker/types.ts',
            name: 'ColorPickerProps',
          },
        ],
        required: false,
        type: {
          name: 'string[]',
        },
      },
      expandedColors: {
        defaultValue: null,
        description: '',
        name: 'expandedColors',
        parent: {
          fileName: 'framework/lib/components/color-picker/types.ts',
          name: 'ColorPickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/color-picker/types.ts',
            name: 'ColorPickerProps',
          },
        ],
        required: false,
        type: {
          name: 'string[]',
        },
      },
      value: {
        defaultValue: null,
        description: '',
        name: 'value',
        parent: {
          fileName: 'framework/lib/components/color-picker/types.ts',
          name: 'ColorPickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/color-picker/types.ts',
            name: 'ColorPickerProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      size: {
        defaultValue: null,
        description: '',
        name: 'size',
        parent: {
          fileName: 'framework/lib/components/color-picker/types.ts',
          name: 'ColorPickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/color-picker/types.ts',
            name: 'ColorPickerProps',
          },
          {
            fileName: 'framework/lib/components/color-picker/types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ColorPickerSize',
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
      name: {
        defaultValue: null,
        description: '',
        name: 'name',
        parent: {
          fileName: 'framework/lib/components/color-picker/types.ts',
          name: 'ColorPickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/color-picker/types.ts',
            name: 'ColorPickerProps',
          },
          {
            fileName: 'framework/lib/components/color-picker/types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      icon: {
        defaultValue: null,
        description: 'The icon to be used in the button.',
        name: 'icon',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
          name: 'IconButtonProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
            name: 'IconButtonProps',
          },
        ],
        required: false,
        type: {
          name: 'React.ReactElement',
        },
      },
      isLoading: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the button will show a spinner.',
        name: 'isLoading',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
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
      isActive: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the button will be styled in its active state.',
        name: 'isActive',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
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
      isDisabled: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the button will be disabled.',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
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
      spinner: {
        defaultValue: null,
        description: 'Replace the spinner component when `isLoading` is set to `true`',
        name: 'spinner',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
          },
        ],
        required: false,
        type: {
          name: 'React.ReactElement',
        },
      },
      isRound: {
        defaultValue: {
          value: 'false',
        },
        description: "If `true`, the button will be perfectly round. Else, it'll be slightly round",
        name: 'isRound',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
          name: 'IconButtonProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
            name: 'IconButtonProps',
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

export default ColorPickerFieldPage
