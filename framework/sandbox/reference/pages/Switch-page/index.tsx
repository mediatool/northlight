import React from 'react'
import ReferencePage from '../../reference-page'

const SwitchPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/switch/switch.tsx',
    description: '',
    displayName: 'Switch',
    methods: [],
    props: {
      spacing: {
        defaultValue: {
          value: '0.5rem',
        },
        description: 'The spacing between the switch and its label text',
        name: 'spacing',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/switch/dist/switch.d.ts',
          name: 'SwitchProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/switch/dist/switch.d.ts',
            name: 'SwitchProps',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["marginLeft"]',
        },
      },
      defaultChecked: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the checkbox will be initially checked.',
        name: 'defaultChecked',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
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
        description: 'id assigned to input',
        name: 'id',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      tabIndex: {
        defaultValue: null,
        description: 'The tab-index property of the underlying input element.',
        name: 'tabIndex',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      'aria-describedby': {
        defaultValue: null,
        description: '',
        name: 'aria-describedby',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-invalid': {
        defaultValue: null,
        description: '',
        name: 'aria-invalid',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: 'true',
        },
      },
      'aria-label': {
        defaultValue: null,
        description: 'Defines the string that labels the checkbox element.',
        name: 'aria-label',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-labelledby': {
        defaultValue: null,
        description: 'Refers to the `id` of the element that labels the checkbox element.',
        name: 'aria-labelledby',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      onFocus: {
        defaultValue: null,
        description: 'The callback invoked when the checkbox is focused',
        name: 'onFocus',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: '(event: FocusEvent<HTMLInputElement, Element>) => void',
        },
      },
      onBlur: {
        defaultValue: null,
        description: 'The callback invoked when the checkbox is blurred (loses focus)',
        name: 'onBlur',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: '(event: FocusEvent<HTMLInputElement, Element>) => void',
        },
      },
      onChange: {
        defaultValue: null,
        description: 'The callback invoked when the checked state of the `Checkbox` changes.',
        name: 'onChange',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
          {
            fileName: 'framework/lib/components/switch/types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: '((event: ChangeEvent<HTMLInputElement>) => void) & ((e: ChangeEvent<HTMLInputElement>) => void)',
        },
      },
      name: {
        defaultValue: null,
        description: 'The name of the input field in a checkbox\n(Useful for form submission).',
        name: 'name',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      value: {
        defaultValue: null,
        description: 'The value to be used in the checkbox input.\nThis is the value that will be returned on form submission.',
        name: 'value',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
          },
          {
            fileName: 'framework/lib/components/switch/types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: 'never',
        },
      },
      isDisabled: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the checkbox will be disabled',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
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
      isChecked: {
        defaultValue: {
          value: 'false',
        },
        description: "If `true`, the checkbox will be checked.\nYou'll need to pass `onChange` to update its value (since it is now controlled)",
        name: 'isChecked',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
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
        description: 'If `true` and `isDisabled` is passed, the checkbox will\nremain tabbable but not interactive',
        name: 'isFocusable',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
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
        description: 'If `true`, the checkbox will be readonly',
        name: 'isReadOnly',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
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
        description: 'If `true`, the checkbox is marked as invalid.\nChanges style of unchecked state.',
        name: 'isInvalid',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
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
        description: 'If `true`, the checkbox input is marked as required,\nand `required` attribute will be added',
        name: 'isRequired',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
          name: 'UseCheckboxProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts',
            name: 'UseCheckboxProps',
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

export default SwitchPage
