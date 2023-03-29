import React from 'react'
import ReferencePage from '../../reference-page'

const TextareaPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/textarea/textarea.tsx',
    description: '',
    displayName: 'Textarea',
    methods: [],
    props: {
      focusBorderColor: {
        defaultValue: null,
        description: 'The border color when the textarea is focused. Use color keys in `theme.colors`\n@example focusBorderColor = "blue.500"',
        name: 'focusBorderColor',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/textarea/dist/textarea.d.ts',
          name: 'TextareaOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/textarea/dist/textarea.d.ts',
            name: 'TextareaOptions',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      errorBorderColor: {
        defaultValue: null,
        description: 'The border color when the textarea is invalid. Use color keys in `theme.colors`\n@example errorBorderColor = "red.500"',
        name: 'errorBorderColor',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/textarea/dist/textarea.d.ts',
          name: 'TextareaOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/textarea/dist/textarea.d.ts',
            name: 'TextareaOptions',
          },
        ],
        required: false,
        type: {
          name: 'string',
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
    },
  } }
  />
)

export default TextareaPage