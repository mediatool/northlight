import React from 'react'
import ReferencePage from '../../reference-page'

const NumberInputPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/number-input/number-input.tsx',
    description: '',
    displayName: 'NumberInput',
    methods: [],
    props: {
      focusInputOnChange: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, the input will be focused as you increment\nor decrement the value with the stepper',
        name: 'focusInputOnChange',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
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
      clampValueOnBlur: {
        defaultValue: {
          value: 'true',
        },
        description: 'This controls the value update when you blur out of the input.\n- If `true` and the value is greater than `max`, the value will be reset to `max`\n- Else, the value remains the same.',
        name: 'clampValueOnBlur',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
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
      getAriaValueText: {
        defaultValue: null,
        description: 'This is used to format the value so that screen readers\ncan speak out a more human-friendly value.\n\nIt is used to set the `aria-valuetext` property of the input',
        name: 'getAriaValueText',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: '(value: string | number) => string',
        },
      },
      isReadOnly: {
        defaultValue: null,
        description: 'If `true`, the input will be in readonly mode',
        name: 'isReadOnly',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
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
        defaultValue: null,
        description: 'If `true`, the input will have `aria-invalid` set to `true`',
        name: 'isInvalid',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
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
        defaultValue: null,
        description: 'Whether the input should be disabled',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
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
        defaultValue: null,
        description: 'Whether the input is required',
        name: 'isRequired',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
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
        description: 'The `id` to use for the number input field.',
        name: 'id',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      pattern: {
        defaultValue: {
          value: '"[0-9]*(.[0-9]+)?"',
        },
        description: "The pattern used to check the <input> element's value against on form submission.",
        name: 'pattern',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      inputMode: {
        defaultValue: {
          value: '"decimal"',
        },
        description: 'Hints at the type of data that might be entered by the user. It also determines\nthe type of keyboard shown to the user on mobile devices',
        name: 'inputMode',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal"',
          value: [
            {
              value: '"text"',
            },
            {
              value: '"search"',
            },
            {
              value: '"none"',
            },
            {
              value: '"tel"',
            },
            {
              value: '"url"',
            },
            {
              value: '"email"',
            },
            {
              value: '"numeric"',
            },
            {
              value: '"decimal"',
            },
          ],
        },
      },
      allowMouseWheel: {
        defaultValue: null,
        description: "If `true`, the input's value will change based on mouse wheel",
        name: 'allowMouseWheel',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
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
        description: 'The HTML `name` attribute used for forms',
        name: 'name',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-describedby': {
        defaultValue: null,
        description: '',
        name: 'aria-describedby',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-label': {
        defaultValue: null,
        description: '',
        name: 'aria-label',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-labelledby': {
        defaultValue: null,
        description: '',
        name: 'aria-labelledby',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      onFocus: {
        defaultValue: null,
        description: '',
        name: 'onFocus',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'FocusEventHandler<HTMLInputElement>',
        },
      },
      onBlur: {
        defaultValue: null,
        description: '',
        name: 'onBlur',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: 'FocusEventHandler<HTMLInputElement>',
        },
      },
      onInvalid: {
        defaultValue: null,
        description: '',
        name: 'onInvalid',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: '(message: ValidityState, value: string, valueAsNumber: number) => void',
        },
      },
      isValidCharacter: {
        defaultValue: null,
        description: 'Whether the pressed key should be allowed in the input.\nThe default behavior is to allow DOM floating point characters defined by /^[Ee0-9+\\-.]$/',
        name: 'isValidCharacter',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: '(value: string) => boolean',
        },
      },
      parse: {
        defaultValue: null,
        description: 'If using a custom display format, this converts the custom format to a format `parseFloat` understands.',
        name: 'parse',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: '(value: string) => string',
        },
      },
      format: {
        defaultValue: null,
        description: 'If using a custom display format, this converts the default format to the custom format.',
        name: 'format',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
          name: 'UseNumberInputProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/use-number-input.d.ts',
            name: 'UseNumberInputProps',
          },
        ],
        required: false,
        type: {
          name: '(value: string | number) => string | number',
        },
      },
      onChange: {
        defaultValue: null,
        description: 'The callback fired when the value changes',
        name: 'onChange',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
          name: 'UseCounterProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
            name: 'UseCounterProps',
          },
          {
            fileName: 'framework/lib/components/number-input/types.ts',
            name: 'TypeLiteral',
          },
        ],
        required: false,
        type: {
          name: '((valueAsString: string, valueAsNumber: number) => void) & ((...event: any[]) => void)',
        },
      },
      precision: {
        defaultValue: null,
        description: 'The number of decimal points used to round the value',
        name: 'precision',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
          name: 'UseCounterProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
            name: 'UseCounterProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      defaultValue: {
        defaultValue: null,
        description: 'The initial value of the counter. Should be less than `max` and greater than `min`',
        name: 'defaultValue',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
          name: 'UseCounterProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
            name: 'UseCounterProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'string | number',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
          ],
        },
      },
      value: {
        defaultValue: null,
        description: 'The value of the counter. Should be less than `max` and greater than `min`',
        name: 'value',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
          name: 'UseCounterProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
            name: 'UseCounterProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'string | number',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
          ],
        },
      },
      step: {
        defaultValue: {
          value: '1',
        },
        description: 'The step used to increment or decrement the value',
        name: 'step',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
          name: 'UseCounterProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
            name: 'UseCounterProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      min: {
        defaultValue: {
          value: 'Number.MIN_SAFE_INTEGER',
        },
        description: 'The minimum value of the counter',
        name: 'min',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
          name: 'UseCounterProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
            name: 'UseCounterProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      max: {
        defaultValue: {
          value: 'Number.MAX_SAFE_INTEGER',
        },
        description: 'The maximum value of the counter',
        name: 'max',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
          name: 'UseCounterProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
            name: 'UseCounterProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      keepWithinRange: {
        defaultValue: {
          value: 'true',
        },
        description: 'This controls the value update behavior in general.\n\n- If `true` and you use the stepper or up/down arrow keys,\n the value will not exceed the `max` or go lower than `min`\n\n- If `false`, the value will be allowed to go out of range.',
        name: 'keepWithinRange',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
          name: 'UseCounterProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/counter/dist/use-counter.d.ts',
            name: 'UseCounterProps',
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
      focusBorderColor: {
        defaultValue: null,
        description: 'The border color when the input is focused. Use color keys in `theme.colors`\n@example focusBorderColor = "blue.500"',
        name: 'focusBorderColor',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/number-input.d.ts',
          name: 'InputOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/number-input.d.ts',
            name: 'InputOptions',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      errorBorderColor: {
        defaultValue: null,
        description: 'The border color when the input is invalid. Use color keys in `theme.colors`\n@example errorBorderColor = "red.500"',
        name: 'errorBorderColor',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/number-input.d.ts',
          name: 'InputOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/number-input/dist/number-input.d.ts',
            name: 'InputOptions',
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

export default NumberInputPage