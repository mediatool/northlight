import React from 'react'
import ReferencePage from '../../reference-page'

const SearchBarFieldPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/search-bar/search-bar-field.tsx',
    description: '',
    displayName: 'SearchBarField',
    methods: [],
    props: {
      onChange: {
        defaultValue: null,
        description: '',
        name: 'onChange',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarFieldProps',
          },
        ],
        required: false,
        type: {
          name: '(val: T | T[], event: ActionMeta<T>) => void',
        },
      },
      direction: {
        defaultValue: {
          value: 'column',
        },
        description: '',
        name: 'direction',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarFieldProps',
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
        description: 'Name of the HTML Input (optional - without this, no input will be rendered)',
        name: 'name',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarFieldProps',
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
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarFieldProps',
          },
        ],
        required: true,
        type: {
          name: 'string',
        },
      },
      validate: {
        defaultValue: null,
        description: '',
        name: 'validate',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarFieldProps',
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
      isRequired: {
        defaultValue: null,
        description: 'If true, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to true',
        name: 'isRequired',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarFieldProps',
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
      variant: {
        defaultValue: null,
        description: 'The main style variant of the `Select` component\n\nOptions: `outline` | `filled` | `flushed` | `unstyled`\n@defaultValue `outline`\n@see {@link https://chakra-ui.com/docs/components/select#changing-the-appearance}\n@see {@link https://github.com/csandman/chakra-react-select#variant--options-outline--filled--flushed--unstyled--default-outline}',
        name: 'variant',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'Variant',
          value: [
            {
              value: '"outline"',
            },
            {
              value: '"filled"',
            },
            {
              value: '"flushed"',
            },
            {
              value: '"unstyled"',
            },
          ],
        },
      },
      form: {
        defaultValue: null,
        description: 'Sets the form attribute on the input',
        name: 'form',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      defaultValue: {
        defaultValue: null,
        description: '',
        name: 'defaultValue',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/useStateManager.d.ts',
          name: 'StateManagerAdditionalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/useStateManager.d.ts',
            name: 'StateManagerAdditionalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'SearchBarOptionType | MultiValue<T>',
          value: [
            {
              value: 'SearchBarOptionType',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'MultiValue<T>',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      className: {
        defaultValue: null,
        description: 'Sets a className attribute on the outer component',
        name: 'className',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      id: {
        defaultValue: null,
        description: 'The id to set on the SelectContainer component.',
        name: 'id',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      placeholder: {
        defaultValue: null,
        description: 'Placeholder for the select value',
        name: 'placeholder',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      tabIndex: {
        defaultValue: null,
        description: 'Sets the tabIndex attribute on the input',
        name: 'tabIndex',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      'aria-errormessage': {
        defaultValue: null,
        description: 'HTML ID of an element containing an error message related to the input*',
        name: 'aria-errormessage',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-invalid': {
        defaultValue: null,
        description: 'Indicate if the value entered in the field is invalid *',
        name: 'aria-invalid',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean | "true" | "false" | "grammar" | "spelling"',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: '"true"',
            },
            {
              value: '"false"',
            },
            {
              value: '"grammar"',
            },
            {
              value: '"spelling"',
            },
          ],
        },
      },
      'aria-label': {
        defaultValue: null,
        description: 'Aria label (for assistive tech)',
        name: 'aria-label',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-labelledby': {
        defaultValue: null,
        description: 'HTML ID of an element that should be used as the label (for assistive tech)',
        name: 'aria-labelledby',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      'aria-live': {
        defaultValue: null,
        description: 'Used to set the priority with which screen reader should treat updates to live regions. The possible settings are: off, polite (default) or assertive',
        name: 'aria-live',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"off" | "assertive" | "polite"',
          value: [
            {
              value: '"off"',
            },
            {
              value: '"assertive"',
            },
            {
              value: '"polite"',
            },
          ],
        },
      },
      onFocus: {
        defaultValue: null,
        description: 'Handle focus events on the control',
        name: 'onFocus',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'FocusEventHandler<HTMLInputElement>',
        },
      },
      onBlur: {
        defaultValue: null,
        description: 'Handle blur events on the control',
        name: 'onBlur',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'FocusEventHandler<HTMLInputElement>',
        },
      },
      onKeyDown: {
        defaultValue: null,
        description: 'Handle key down events on the select',
        name: 'onKeyDown',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'KeyboardEventHandler<HTMLDivElement>',
        },
      },
      colorScheme: {
        defaultValue: null,
        description: 'A color name that matches a key from your chakra theme and will\ndetermine the color scheme of your `MultiValue` component\n\nThe styling matches the chakra `Tag` component\n@defaultValue `"gray"`\n@see {@link https://github.com/csandman/chakra-react-select#colorscheme}\n@see {@link https://chakra-ui.com/docs/components/tag/props}',
        name: 'colorScheme',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      sx: {
        defaultValue: null,
        description: '',
        name: 'sx',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: 'ChakraStylesConfig<any, boolean, GroupBase<any>>',
        },
      },
      size: {
        defaultValue: null,
        description: 'The size of the base control; matches the sizes of the chakra Input\ncomponent with the exception of `xs`\n\nOptions: `sm` | `md` | `lg`',
        name: 'size',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'Size',
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
      components: {
        defaultValue: null,
        description: 'This complex object includes all the compositional components that are used\nin `react-select`. If you wish to overwrite a component, pass in an object\nwith the appropriate namespace.\n\nIf you only wish to restyle a component, we recommend using the `styles` prop\ninstead. For a list of the components that can be passed in, and the shape\nthat will be passed to them, see [the components docs](/components)',
        name: 'components',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'Partial<SelectComponents<T, boolean, GroupBase<T>>>',
        },
      },
      icon: {
        defaultValue: null,
        description: '',
        name: 'icon',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
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
      autoFocus: {
        defaultValue: null,
        description: 'Focus the control when it is mounted',
        name: 'autoFocus',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      value: {
        defaultValue: null,
        description: '',
        name: 'value',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'SearchBarOptionType | T[]',
          value: [
            {
              value: 'SearchBarOptionType',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'T[]',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      isLoading: {
        defaultValue: null,
        description: 'Is the select in a state of loading (async)',
        name: 'isLoading',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
        description: 'Is the select disabled',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
        defaultValue: null,
        description: 'If `true`, the form control will be `readonly`\n@defaultValue `false`\n@see {@link https://github.com/csandman/chakra-react-select#isinvalid--default-false--isreadonly---default-false}\n@see {@link https://chakra-ui.com/docs/components/input/props}\n@see {@link https://chakra-ui.com/docs/components/form-control/props}',
        name: 'isReadOnly',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
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
        description: 'Determines whether or not to style the input with the invalid border\ncolor\n\nIf the `aria-invalid` prop is not passed, this prop will also set that\n@defaultValue `false`\n@see {@link https://github.com/csandman/chakra-react-select#isinvalid--default-false--isreadonly---default-false}\n@see {@link https://chakra-ui.com/docs/components/input/props}\n@see {@link https://chakra-ui.com/docs/components/form-control/props}',
        name: 'isInvalid',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
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
      required: {
        defaultValue: null,
        description: 'Marks the value-holding input as required for form validation',
        name: 'required',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
        description: 'The color value to style the border of the `Control` with when the\nselect is focused\n@defaultValue Light mode: `blue.500` | Dark mode: `blue.300`\n@see {@link https://github.com/csandman/chakra-react-select#focusbordercolor--default-blue500--errorbordercolor--default-red500}\n@see {@link https://chakra-ui.com/docs/components/input#changing-the-focus-and-error-border-colors}',
        name: 'focusBorderColor',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      errorBorderColor: {
        defaultValue: null,
        description: 'The color value to style the border of the `Control` with when\n`isInvalid` is passed to the select\n@defaultValue Light mode: `red.500` | Dark mode: `red.300`\n@see {@link https://github.com/csandman/chakra-react-select#focusbordercolor--default-blue500--errorbordercolor--default-red500}\n@see {@link https://chakra-ui.com/docs/components/input#changing-the-focus-and-error-border-colors}',
        name: 'errorBorderColor',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      unstyled: {
        defaultValue: null,
        description: 'Remove all non-essential styles',
        name: 'unstyled',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      isClearable: {
        defaultValue: {
          value: 'true',
        },
        description: 'Is the select value clearable',
        name: 'isClearable',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
        description: 'Support multiple selected options',
        name: 'isMulti',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
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
      theme: {
        defaultValue: null,
        description: 'Theme modifier method',
        name: 'theme',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ThemeConfig',
          value: [
            {
              value: 'Theme',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: '(theme: Theme) => Theme',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      onInputChange: {
        defaultValue: null,
        description: 'Handle change events on the input',
        name: 'onInputChange',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(newValue: string, actionMeta: InputActionMeta) => void',
        },
      },
      ariaLiveMessages: {
        defaultValue: null,
        description: 'Customise the messages used by the aria-live component',
        name: 'ariaLiveMessages',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'AriaLiveMessages<T, boolean, GroupBase<T>>',
        },
      },
      backspaceRemovesValue: {
        defaultValue: null,
        description: 'Remove the currently focused option when the user presses backspace when Select isClearable or isMulti',
        name: 'backspaceRemovesValue',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      blurInputOnSelect: {
        defaultValue: null,
        description: 'Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices)',
        name: 'blurInputOnSelect',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      captureMenuScroll: {
        defaultValue: null,
        description: 'When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent',
        name: 'captureMenuScroll',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      classNamePrefix: {
        defaultValue: null,
        description: 'If provided, all inner components will be given a prefixed className attribute.\n\nThis is useful when styling via CSS classes instead of the Styles API approach.',
        name: 'classNamePrefix',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      classNames: {
        defaultValue: null,
        description: 'Provide classNames based on state for each inner component',
        name: 'classNames',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'ClassNamesConfig<T, boolean, GroupBase<T>>',
        },
      },
      closeMenuOnSelect: {
        defaultValue: null,
        description: 'Close the select menu when the user selects an option',
        name: 'closeMenuOnSelect',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      closeMenuOnScroll: {
        defaultValue: null,
        description: 'If `true`, close the select menu when the user scrolls the document/body.\n\nIf a function, takes a standard javascript `ScrollEvent` you return a boolean:\n\n`true` => The menu closes\n\n`false` => The menu stays open\n\nThis is useful when you have a scrollable modal and want to portal the menu out,\nbut want to avoid graphical issues.',
        name: 'closeMenuOnScroll',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean | ((event: Event) => boolean)',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: '(event: Event) => boolean',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      controlShouldRenderValue: {
        defaultValue: null,
        description: 'Whether the value of the select, e.g. SingleValue, should be displayed in the control.',
        name: 'controlShouldRenderValue',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      delimiter: {
        defaultValue: null,
        description: 'Delimiter used to join multiple values into a single HTML Input value',
        name: 'delimiter',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      escapeClearsValue: {
        defaultValue: null,
        description: 'Clear all values when the user presses escape AND the menu is closed',
        name: 'escapeClearsValue',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      filterOption: {
        defaultValue: null,
        description: 'Custom method to filter whether an option should be displayed in the menu',
        name: 'filterOption',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(option: FilterOptionOption<T>, inputValue: string) => boolean',
        },
      },
      formatGroupLabel: {
        defaultValue: null,
        description: 'Formats group labels in the menu as React components\n\nAn example can be found in the [Replacing builtins](/advanced#replacing-builtins) documentation.',
        name: 'formatGroupLabel',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(group: GroupBase<T>) => ReactNode',
        },
      },
      formatOptionLabel: {
        defaultValue: null,
        description: 'Formats option labels in the menu and control as React components',
        name: 'formatOptionLabel',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(data: T, formatOptionLabelMeta: FormatOptionLabelMeta<T>) => ReactNode',
        },
      },
      getOptionLabel: {
        defaultValue: null,
        description: 'Resolves option data to a string to be displayed as the label by components\n\nNote: Failure to resolve to a string type can interfere with filtering and\nscreen reader support.',
        name: 'getOptionLabel',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'GetOptionLabel<T>',
        },
      },
      getOptionValue: {
        defaultValue: null,
        description: 'Resolves option data to a string to compare options and specify value attributes',
        name: 'getOptionValue',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'GetOptionValue<T>',
        },
      },
      hideSelectedOptions: {
        defaultValue: null,
        description: 'Hide the selected option from the menu',
        name: 'hideSelectedOptions',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      inputValue: {
        defaultValue: null,
        description: 'The value of the search input',
        name: 'inputValue',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      inputId: {
        defaultValue: null,
        description: 'The id of the search input',
        name: 'inputId',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      instanceId: {
        defaultValue: null,
        description: 'Define an id prefix for the select components e.g. {your-id}-value',
        name: 'instanceId',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      isOptionDisabled: {
        defaultValue: null,
        description: 'Override the built-in logic to detect whether an option is disabled\n\nAn example can be found in the [Replacing builtins](/advanced#replacing-builtins) documentation.',
        name: 'isOptionDisabled',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(option: T, selectValue: Options<T>) => boolean',
        },
      },
      isOptionSelected: {
        defaultValue: null,
        description: 'Override the built-in logic to detect whether an option is selected',
        name: 'isOptionSelected',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(option: T, selectValue: Options<T>) => boolean',
        },
      },
      isRtl: {
        defaultValue: null,
        description: 'Is the select direction right-to-left',
        name: 'isRtl',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      isSearchable: {
        defaultValue: null,
        description: 'Whether to enable search functionality',
        name: 'isSearchable',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      loadingMessage: {
        defaultValue: null,
        description: 'Async: Text to display when loading options',
        name: 'loadingMessage',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(obj: { inputValue: string; }) => ReactNode',
        },
      },
      minMenuHeight: {
        defaultValue: null,
        description: 'Minimum height of the menu before flipping',
        name: 'minMenuHeight',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      maxMenuHeight: {
        defaultValue: null,
        description: 'Maximum height of the menu before scrolling',
        name: 'maxMenuHeight',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      menuIsOpen: {
        defaultValue: null,
        description: 'Whether the menu is open',
        name: 'menuIsOpen',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      menuPlacement: {
        defaultValue: null,
        description: "Default placement of the menu in relation to the control. 'auto' will flip\nwhen there isn't enough space below the control.",
        name: 'menuPlacement',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'MenuPlacement',
          value: [
            {
              value: '"top"',
            },
            {
              value: '"bottom"',
            },
            {
              value: '"auto"',
            },
          ],
        },
      },
      menuPosition: {
        defaultValue: null,
        description: 'The CSS position value of the menu, when "fixed" extra layout management is required',
        name: 'menuPosition',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'MenuPosition',
          value: [
            {
              value: '"fixed"',
            },
            {
              value: '"absolute"',
            },
          ],
        },
      },
      menuPortalTarget: {
        defaultValue: null,
        description: 'Whether the menu should use a portal, and where it should attach\n\nAn example can be found in the [Portaling](/advanced#portaling) documentation',
        name: 'menuPortalTarget',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'HTMLElement',
        },
      },
      menuShouldBlockScroll: {
        defaultValue: null,
        description: 'Whether to block scroll events when the menu is open',
        name: 'menuShouldBlockScroll',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      menuShouldScrollIntoView: {
        defaultValue: null,
        description: 'Whether the menu should be scrolled into view when it opens',
        name: 'menuShouldScrollIntoView',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      noOptionsMessage: {
        defaultValue: null,
        description: 'Text to display when there are no options',
        name: 'noOptionsMessage',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(obj: { inputValue: string; }) => ReactNode',
        },
      },
      onMenuOpen: {
        defaultValue: null,
        description: 'Handle the menu opening',
        name: 'onMenuOpen',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      onMenuClose: {
        defaultValue: null,
        description: 'Handle the menu closing',
        name: 'onMenuClose',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      onMenuScrollToTop: {
        defaultValue: null,
        description: 'Fired when the user scrolls to the top of the menu',
        name: 'onMenuScrollToTop',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(event: WheelEvent | TouchEvent) => void',
        },
      },
      onMenuScrollToBottom: {
        defaultValue: null,
        description: 'Fired when the user scrolls to the bottom of the menu',
        name: 'onMenuScrollToBottom',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(event: WheelEvent | TouchEvent) => void',
        },
      },
      openMenuOnFocus: {
        defaultValue: null,
        description: 'Allows control of whether the menu is opened when the Select is focused',
        name: 'openMenuOnFocus',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      openMenuOnClick: {
        defaultValue: null,
        description: 'Allows control of whether the menu is opened when the Select is clicked',
        name: 'openMenuOnClick',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      options: {
        defaultValue: null,
        description: 'Array of options that populate the select menu',
        name: 'options',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'OptionsOrGroups<T, GroupBase<T>>',
        },
      },
      pageSize: {
        defaultValue: null,
        description: 'Number of options to jump in menu when page{up|down} keys are used',
        name: 'pageSize',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      screenReaderStatus: {
        defaultValue: null,
        description: 'Status to relay to screen readers',
        name: 'screenReaderStatus',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: '(obj: { count: number; }) => string',
        },
      },
      styles: {
        defaultValue: null,
        description: 'Style modifier methods\n\nA basic example can be found at the bottom of the [Replacing builtins](/advanced#replacing-builtins) documentation.',
        name: 'styles',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'StylesConfig<T, boolean, GroupBase<T>>',
        },
      },
      tabSelectsValue: {
        defaultValue: null,
        description: 'Select the currently focused option when the user presses tab',
        name: 'tabSelectsValue',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/Select.d.ts',
            name: 'Props',
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
      tagVariant: {
        defaultValue: null,
        description: 'The `variant` prop that will be forwarded to your `MultiValue` component\nwhich is represented by a chakra `Tag`\n\nOptions: "subtle" | "solid" | "outline"\n@defaultValue `subtle`\n@see {@link https://github.com/csandman/chakra-react-select#tagvariant--options-subtle--solid--outline--default-subtle}\n@see {@link https://chakra-ui.com/docs/data-display/tag#props}',
        name: 'tagVariant',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'TagVariant',
          value: [
            {
              value: '"outline"',
            },
            {
              value: '"solid"',
            },
            {
              value: '"subtle"',
            },
          ],
        },
      },
      hasStickyGroupHeaders: {
        defaultValue: null,
        description: 'Passing `true` for this prop will make the group headers\n`position: sticky` and keep them stuck to the top while their\ncorresponding group is in view\n@defaultValue `false`\n@see {@link https://github.com/csandman/chakra-react-select#hasstickygroupheaders--default-false}',
        name: 'hasStickyGroupHeaders',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
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
      selectedOptionStyle: {
        defaultValue: null,
        description: 'Whether to style a selected option by highlighting it in a solid color\nor adding a check mark next to it like the chakra `Menu` component\n\nOptions: `color` | `check`\n@defaultValue `color`\n@see {@link https://github.com/csandman/chakra-react-select#selectedoptionstyle--options-color--check--default-color}\n@see {@link https://chakra-ui.com/docs/components/menu#menu-option-groups}',
        name: 'selectedOptionStyle',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'SelectedOptionStyle',
          value: [
            {
              value: '"color"',
            },
            {
              value: '"check"',
            },
          ],
        },
      },
      selectedOptionColor: {
        defaultValue: null,
        description: 'The color scheme to style an option with when using the\n`selectedOptionStyle="color"` prop.  Uses the `500` value in light mode\nand the `300` value in dark mode.\n@defaultValue `blue`\n@see {@link https://github.com/csandman/chakra-react-select#selectedoptioncolor--default-blue}',
        name: 'selectedOptionColor',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      chakraStyles: {
        defaultValue: null,
        description: "Style transformation methods for each of the rendered components using,\nChakra's `SystemStyleObject` and the props passed into each component\n@see {@link https://github.com/csandman/chakra-react-select#chakrastyles}\n@see {@link https://react-select.com/styles#style-object}",
        name: 'chakraStyles',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
        ],
        required: false,
        type: {
          name: 'ChakraStylesConfig<T, boolean, GroupBase<T>>',
        },
      },
      useBasicStyles: {
        defaultValue: null,
        description: "If passed, the dropdown indicator will be styled the same as Chakra UI's\n`Select` component\n@defaultValue `false`\n@see {@link https://github.com/csandman/chakra-react-select#usebasicstyles--default-false}\n@see {@link https://chakra-ui.com/docs/components/select}",
        name: 'useBasicStyles',
        parent: {
          fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
          name: 'Props',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
          },
          {
            fileName: 'northlight/node_modules/chakra-react-select/dist/types/module-augmentation.d.ts',
            name: 'Props',
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
      defaultInputValue: {
        defaultValue: null,
        description: '',
        name: 'defaultInputValue',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/useStateManager.d.ts',
          name: 'StateManagerAdditionalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/useStateManager.d.ts',
            name: 'StateManagerAdditionalProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      defaultMenuIsOpen: {
        defaultValue: null,
        description: '',
        name: 'defaultMenuIsOpen',
        parent: {
          fileName: 'northlight/node_modules/react-select/dist/declarations/src/useStateManager.d.ts',
          name: 'StateManagerAdditionalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/react-select/dist/declarations/src/useStateManager.d.ts',
            name: 'StateManagerAdditionalProps',
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
      onAdd: {
        defaultValue: null,
        description: '',
        name: 'onAdd',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: '(val: unknown) => void',
        },
      },
      onRemove: {
        defaultValue: null,
        description: '',
        name: 'onRemove',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: '(val: unknown) => void',
        },
      },
      'data-testid': {
        defaultValue: null,
        description: '',
        name: 'data-testid',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      debouncedWaitTime: {
        defaultValue: null,
        description: '',
        name: 'debouncedWaitTime',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      clearInputOnSelect: {
        defaultValue: null,
        description: '',
        name: 'clearInputOnSelect',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
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
      closeMenuonSelect: {
        defaultValue: null,
        description: '',
        name: 'closeMenuonSelect',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
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
      defaultOptions: {
        defaultValue: null,
        description: '',
        name: 'defaultOptions',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: 'T[]',
        },
      },
      customOption: {
        defaultValue: null,
        description: '',
        name: 'customOption',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: '(props: T) => Element',
        },
      },
      customTag: {
        defaultValue: null,
        description: '',
        name: 'customTag',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: '(props: T) => Element',
        },
      },
      loadOptions: {
        defaultValue: null,
        description: '',
        name: 'loadOptions',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: '(query: string) => Promise<T[]>',
        },
      },
      onSearchInputChange: {
        defaultValue: null,
        description: '',
        name: 'onSearchInputChange',
        parent: {
          fileName: 'framework/lib/components/search-bar/types.ts',
          name: 'SearchBarProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/search-bar/types.ts',
            name: 'SearchBarProps',
          },
        ],
        required: false,
        type: {
          name: '(input: string) => void',
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
    },
  } }
  />
)

export default SearchBarFieldPage
