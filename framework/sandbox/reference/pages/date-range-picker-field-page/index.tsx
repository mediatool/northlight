import React from 'react'
import ReferencePage from '../../reference-page'

const DateRangePickerFieldPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/date-picker/date-picker-field/date-range-picker-field.tsx',
    description: '',
    displayName: 'DateRangePickerField',
    methods: [],
    props: {
      onChange: {
        defaultValue: null,
        description: '',
        name: 'onChange',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DateRangePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DateRangePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: '(date: DateRange) => void',
        },
      },
      mode: {
        defaultValue: null,
        description: '',
        name: 'mode',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DateRangePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DateRangePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'DatePickerMode',
          value: [
            {
              value: '"simple"',
            },
            {
              value: '"advanced"',
            },
          ],
        },
      },
      label: {
        defaultValue: null,
        description: '',
        name: 'label',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
          },
        ],
        required: true,
        type: {
          name: 'string',
        },
      },
      direction: {
        defaultValue: {
          value: 'column',
        },
        description: '',
        name: 'direction',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
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
      name: {
        defaultValue: null,
        description: '',
        name: 'name',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
          },
        ],
        required: true,
        type: {
          name: 'string',
        },
      },
      isDisabled: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts',
          name: 'FormControlOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts',
            name: 'FormControlOptions',
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
        description: 'If `true`, the form control will be readonly',
        name: 'isReadOnly',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts',
          name: 'FormControlOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts',
            name: 'FormControlOptions',
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
        description: 'If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`',
        name: 'isInvalid',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts',
          name: 'FormControlOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts',
            name: 'FormControlOptions',
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
        description: 'If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`',
        name: 'isRequired',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts',
          name: 'FormControlOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts',
            name: 'FormControlOptions',
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
      validate: {
        defaultValue: null,
        description: '',
        name: 'validate',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'RegisterOptions<FieldValues, string>',
          value: [
            {
              value: 'Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }',
            },
            {
              value: 'Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }',
            },
            {
              value: 'Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }',
            },
          ],
        },
      },
      focusBorderColor: {
        defaultValue: null,
        description: 'The border color when the input is focused. Use color keys in `theme.colors`\n@example focusBorderColor = "blue.500"',
        name: 'focusBorderColor',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/input/dist/input.d.ts',
          name: 'InputOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/input/dist/input.d.ts',
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
          fileName: 'northlight/node_modules/@chakra-ui/input/dist/input.d.ts',
          name: 'InputOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/input/dist/input.d.ts',
            name: 'InputOptions',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      htmlSize: {
        defaultValue: null,
        description: 'The native HTML `size` attribute to be passed to the `input`',
        name: 'htmlSize',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/input/dist/input.d.ts',
          name: 'InputOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/input/dist/input.d.ts',
            name: 'InputOptions',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      minValue: {
        defaultValue: null,
        description: '',
        name: 'minValue',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      maxValue: {
        defaultValue: null,
        description: '',
        name: 'maxValue',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      firstDayOfWeek: {
        defaultValue: {
          value: 'monday',
        },
        description: '',
        name: 'firstDayOfWeek',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"sunday" | "monday"',
          value: [
            {
              value: '"sunday"',
            },
            {
              value: '"monday"',
            },
          ],
        },
      },
      inputLeftElement: {
        defaultValue: null,
        description: '',
        name: 'inputLeftElement',
        parent: {
          fileName: 'framework/lib/types/input-field/input-field.ts',
          name: 'InputFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/types/input-field/input-field.ts',
            name: 'InputFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ReactNode',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'ReactElement<any, string | JSXElementConstructor<any>>',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactFragment',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactPortal',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      inputRightElement: {
        defaultValue: null,
        description: '',
        name: 'inputRightElement',
        parent: {
          fileName: 'framework/lib/types/input-field/input-field.ts',
          name: 'InputFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/types/input-field/input-field.ts',
            name: 'InputFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ReactNode',
          value: [
            {
              value: 'string',
            },
            {
              value: 'number',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'ReactElement<any, string | JSXElementConstructor<any>>',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactFragment',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'ReactPortal',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      dateFormat: {
        defaultValue: null,
        description: '',
        name: 'dateFormat',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      isClearable: {
        defaultValue: null,
        description: '',
        name: 'isClearable',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
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
      fiscalStartMonth: {
        defaultValue: null,
        description: '',
        name: 'fiscalStartMonth',
        parent: {
          fileName: 'framework/lib/components/date-picker/types.ts',
          name: 'DatePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/date-picker/types.ts',
            name: 'DatePickerFieldProps',
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

export default DateRangePickerFieldPage
