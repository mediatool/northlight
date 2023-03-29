import React from 'react'
import ReferencePage from '../../reference-page'

const ClipboardInputPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: 'lib/components/clipboard-input/clipboard-input.tsx',
    description: '',
    displayName: 'ClipboardInput',
    methods: [],
    props: {
      value: {
        defaultValue: null,
        description: '',
        name: 'value',
        parent: {
          fileName: 'framework/lib/components/clipboard-input/types.ts',
          name: 'ClipboardInputProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/clipboard-input/types.ts',
            name: 'ClipboardInputProps',
          },
        ],
        required: true,
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
          fileName: 'framework/lib/components/clipboard-input/types.ts',
          name: 'ClipboardInputProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/clipboard-input/types.ts',
            name: 'ClipboardInputProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"sm" | "md" | "lg"',
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

export default ClipboardInputPage