import React from 'react'
import ReferencePage from '../../reference-page'

const EditableTextPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/editable-text/editable-text.tsx',
    description: '',
    displayName: 'EditableText',
    methods: [],
    props: {
      value: {
        defaultValue: null,
        description: 'The value of the Editable in both edit & preview mode',
        name: 'value',
        parent: {
          fileName: 'framework/lib/components/editable-text/types.ts',
          name: 'EditableProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/editable-text/types.ts',
            name: 'EditableProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      size: {
        defaultValue: {
          value: 'md',
        },
        description: '',
        name: 'size',
        parent: {
          fileName: 'framework/lib/components/editable-text/types.ts',
          name: 'EditableProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/editable-text/types.ts',
            name: 'EditableProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'EditableSizes',
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
      leftItem: {
        defaultValue: null,
        description: '',
        name: 'leftItem',
        parent: {
          fileName: 'framework/lib/components/editable-text/types.ts',
          name: 'EditableProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/editable-text/types.ts',
            name: 'EditableProps',
          },
        ],
        required: false,
        type: {
          name: 'ReactElement<any, string | JSXElementConstructor<any>>',
        },
      },
      defaultValue: {
        defaultValue: null,
        description: 'The initial value of the Editable in both edit & preview mode',
        name: 'defaultValue',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      isDisabled: {
        defaultValue: null,
        description: 'If `true`, the Editable will be disabled.',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
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
      startWithEditView: {
        defaultValue: null,
        description: 'If `true`, the Editable will start with edit mode by default.',
        name: 'startWithEditView',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
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
      isPreviewFocusable: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, the read only view, has a `tabIndex` set to `0`\nso it can receive focus via the keyboard or click.',
        name: 'isPreviewFocusable',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
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
      submitOnBlur: {
        defaultValue: {
          value: 'true',
        },
        description: "If `true`, it'll update the value onBlur and turn off the edit mode.",
        name: 'submitOnBlur',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
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
        description: 'Callback invoked when user changes input.',
        name: 'onChange',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
          },
        ],
        required: false,
        type: {
          name: '(nextValue: string) => void',
        },
      },
      onCancel: {
        defaultValue: null,
        description: 'Callback invoked when user cancels input with the `Esc` key.\nIt provides the last confirmed value as argument.',
        name: 'onCancel',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
          },
        ],
        required: false,
        type: {
          name: '(previousValue: string) => void',
        },
      },
      onSubmit: {
        defaultValue: null,
        description: 'Callback invoked when user confirms value with `enter` key or by blurring input.',
        name: 'onSubmit',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
          },
        ],
        required: false,
        type: {
          name: '(nextValue: string) => void',
        },
      },
      onEdit: {
        defaultValue: null,
        description: 'Callback invoked once the user enters edit mode.',
        name: 'onEdit',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      selectAllOnFocus: {
        defaultValue: {
          value: 'true',
        },
        description: "If `true`, the input's text will be highlighted on focus.",
        name: 'selectAllOnFocus',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
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
      placeholder: {
        defaultValue: null,
        description: 'The placeholder text when the value is empty.',
        name: 'placeholder',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
          name: 'UseEditableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/editable/dist/use-editable.d.ts',
            name: 'UseEditableProps',
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

export default EditableTextPage