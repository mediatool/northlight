import React from 'react'
import ReferencePage from '../../reference-page'

const RadioPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/radio/radio.tsx',
    description: '',
    displayName: 'Radio',
    methods: [],
    props: {
      spacing: {
        defaultValue: {
          value: '0.5rem',
        },
        description: 'The spacing between the checkbox and its label text',
        name: 'spacing',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/radio.d.ts',
          name: 'RadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/radio.d.ts',
            name: 'RadioProps',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["marginLeft"]',
        },
      },
      inputProps: {
        defaultValue: null,
        description: 'Additional props to be forwarded to the `input` element',
        name: 'inputProps',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/radio.d.ts',
          name: 'RadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/radio.d.ts',
            name: 'RadioProps',
          },
        ],
        required: false,
        type: {
          name: 'InputHTMLAttributes<HTMLInputElement>',
        },
      },
      id: {
        defaultValue: null,
        description: 'id assigned to input',
        name: 'id',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      name: {
        defaultValue: null,
        description: 'The name of the input field in a radio\n(Useful for form submission).',
        name: 'name',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      value: {
        defaultValue: null,
        description: 'The value to be used in the radio button.\nThis is the value that will be returned on form submission.',
        name: 'value',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
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
      isChecked: {
        defaultValue: {
          value: 'false',
        },
        description: "If `true`, the radio will be checked.\nYou'll need to pass `onChange` to update its value (since it is now controlled)",
        name: 'isChecked',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
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
      defaultChecked: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the radio will be initially checked.',
        name: 'defaultChecked',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
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
        description: 'If `true`, the radio will be disabled',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
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
        description: 'If `true` and `isDisabled` is true, the radio will remain\nfocusable but not interactive.',
        name: 'isFocusable',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
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
      isReadOnly: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the radio will be read-only',
        name: 'isReadOnly',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
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
      isInvalid: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the radio button will be invalid. This also sets `aria-invalid` to `true`.',
        name: 'isInvalid',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
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
      isRequired: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the radio button will be required. This also sets `aria-required` to `true`.',
        name: 'isRequired',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
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
      onChange: {
        defaultValue: null,
        description: 'Function called when checked state of the `input` changes',
        name: 'onChange',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
          },
          {
            fileName: 'framework/lib/components/radio/types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: '((event: ChangeEvent<HTMLInputElement>) => void) & ((e: ChangeEvent<HTMLInputElement>) => void)',
        },
      },
      'data-radiogroup': {
        defaultValue: null,
        description: '@internal',
        name: 'data-radiogroup',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
          },
        ],
        required: false,
        type: {
          name: 'any',
        },
      },
      'aria-describedby': {
        defaultValue: null,
        description: 'Refers to the `id` of the element that labels the radio element.',
        name: 'aria-describedby',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
          name: 'UseRadioProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/radio/dist/use-radio.d.ts',
            name: 'UseRadioProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
    },
  } }
  />
)

export default RadioPage
