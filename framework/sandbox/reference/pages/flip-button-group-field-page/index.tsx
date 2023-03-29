import React from 'react'
import ReferencePage from '../../reference-page'

const FlipButtonGroupFieldPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/flip-button/flip-button-group-field.tsx',
    description: '',
    displayName: 'FlipButtonGroupField',
    methods: [],
    props: {
      name: {
        defaultValue: null,
        description: '',
        name: 'name',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonGroupFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonGroupFieldProps',
          },
        ],
        required: true,
        type: {
          name: 'string',
        },
      },
      label: {
        defaultValue: null,
        description: '',
        name: 'label',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonGroupFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonGroupFieldProps',
          },
        ],
        required: true,
        type: {
          name: 'string',
        },
      },
      isRequired: {
        defaultValue: null,
        description: '',
        name: 'isRequired',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonGroupFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonGroupFieldProps',
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
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonGroupFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonGroupFieldProps',
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
      value: {
        defaultValue: null,
        description: '',
        name: 'value',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonGroupFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonGroupFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      onChange: {
        defaultValue: null,
        description: '',
        name: 'onChange',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonGroupProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonGroupProps',
          },
        ],
        required: false,
        type: {
          name: '(val: string | string[]) => void',
        },
      },
      direction: {
        defaultValue: null,
        description: '',
        name: 'direction',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonGroupProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonGroupProps',
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
      sx: {
        defaultValue: null,
        description: '',
        name: 'sx',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonGroupProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonGroupProps',
          },
        ],
        required: false,
        type: {
          name: 'CSSObject',
        },
      },
      variant: {
        defaultValue: null,
        description: '',
        name: 'variant',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'FlipButtonVariant',
          value: [
            {
              value: '"default"',
            },
            {
              value: '"brand"',
            },
          ],
        },
      },
      size: {
        defaultValue: null,
        description: '',
        name: 'size',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'FlipButtonSize',
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
            {
              value: '"xs"',
            },
          ],
        },
      },
      icon: {
        defaultValue: null,
        description: '',
        name: 'icon',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ComponentType<any>',
          value: [
            {
              value: 'ComponentClass<any, any>',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'FunctionComponent<any>',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      isDisabled: {
        defaultValue: null,
        description: '',
        name: 'isDisabled',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonProps',
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
      isMulti: {
        defaultValue: null,
        description: '',
        name: 'isMulti',
        parent: {
          fileName: 'framework/lib/components/flip-button/types.ts',
          name: 'FlipButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/flip-button/types.ts',
            name: 'FlipButtonProps',
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

export default FlipButtonGroupFieldPage
