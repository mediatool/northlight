import React from 'react'
import ReferencePage from '../../reference-page'

const RadioGroupFieldPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/radio/radio-group-field.tsx',
    description: '',
    displayName: 'RadioGroupField',
    methods: [],
    props: {
      value: {
        defaultValue: null,
        description: 'The value of the radio to be `checked`\n(in controlled mode)',
        name: 'value',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
          name: 'UseRadioGroupProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
            name: 'UseRadioGroupProps',
          },
          {
            fileName: 'framework/lib/components/radio/types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      defaultValue: {
        defaultValue: null,
        description: 'The value of the radio to be `checked`\ninitially (in uncontrolled mode)',
        name: 'defaultValue',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
          name: 'UseRadioGroupProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
            name: 'UseRadioGroupProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      onChange: {
        defaultValue: null,
        description: 'Function called once a radio is checked\n@param nextValue the value of the checked radio',
        name: 'onChange',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
          name: 'UseRadioGroupProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
            name: 'UseRadioGroupProps',
          },
        ],
        required: false,
        type: {
          name: '(nextValue: string) => void',
        },
      },
      isDisabled: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, all wrapped radio inputs will be disabled',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
          name: 'UseRadioGroupProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
            name: 'UseRadioGroupProps',
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
      isFocusable: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true` and `isDisabled` is true, all wrapped radio inputs will remain\nfocusable but not interactive.',
        name: 'isFocusable',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
          name: 'UseRadioGroupProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
            name: 'UseRadioGroupProps',
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
      name: {
        defaultValue: null,
        description: 'The `name` attribute forwarded to each `radio` element',
        name: 'name',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
          name: 'UseRadioGroupProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
            name: 'UseRadioGroupProps',
          },
          {
            fileName: 'framework/lib/components/radio/types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      isNative: {
        defaultValue: {
          value: 'false',
        },
        description: "If `true`, input elements will receive\n`checked` attribute instead of `isChecked`.\n\nThis assumes, you're using native radio inputs",
        name: 'isNative',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
          name: 'UseRadioGroupProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio-group.d.ts',
            name: 'UseRadioGroupProps',
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

export default RadioGroupFieldPage