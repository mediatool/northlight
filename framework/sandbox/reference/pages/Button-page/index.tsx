import React from 'react'
import ReferencePage from '../../reference-page'

const ButtonPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: 'lib/components/button/button.tsx',
    description: '',
    displayName: 'Button',
    methods: [],
    props: {
      variant: {
        defaultValue: {
          value: 'default',
        },
        description: '',
        name: 'variant',
        parent: {
          fileName: 'framework/lib/components/button/types.ts',
          name: 'ButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/button/types.ts',
            name: 'ButtonProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ButtonVariants',
          value: [
            {
              value: '"link"',
            },
            {
              value: '"success"',
            },
            {
              value: '"default"',
            },
            {
              value: '"danger"',
            },
            {
              value: '"brand"',
            },
            {
              value: '"ghost"',
            },
          ],
        },
      },
      isLoading: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the button will show a spinner.',
        name: 'isLoading',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
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
      isActive: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the button will be styled in its active state.',
        name: 'isActive',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
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
        description: 'If `true`, the button will be disabled.',
        name: 'isDisabled',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
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
      loadingText: {
        defaultValue: null,
        description: 'The label to show in the button when `isLoading` is true\nIf no text is passed, it only shows the spinner',
        name: 'loadingText',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      leftIcon: {
        defaultValue: null,
        description: "If added, the button will show an icon before the button's label.",
        name: 'leftIcon',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
          },
        ],
        required: false,
        type: {
          name: 'React.ReactElement',
        },
      },
      rightIcon: {
        defaultValue: null,
        description: "If added, the button will show an icon after the button's label.",
        name: 'rightIcon',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
          },
        ],
        required: false,
        type: {
          name: 'React.ReactElement',
        },
      },
      iconSpacing: {
        defaultValue: null,
        description: 'The space between the button icon and label.',
        name: 'iconSpacing',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
          },
        ],
        required: false,
        type: {
          name: 'SystemProps["marginRight"]',
        },
      },
      spinner: {
        defaultValue: null,
        description: 'Replace the spinner component when `isLoading` is set to `true`',
        name: 'spinner',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
          },
        ],
        required: false,
        type: {
          name: 'React.ReactElement',
        },
      },
      spinnerPlacement: {
        defaultValue: {
          value: '"start"',
        },
        description: 'It determines the placement of the spinner when isLoading is true',
        name: 'spinnerPlacement',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
          name: 'ButtonOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts',
            name: 'ButtonOptions',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"end" | "start"',
          value: [
            {
              value: '"end"',
            },
            {
              value: '"start"',
            },
          ],
        },
      },
    },
  } }
  />
)

export default ButtonPage
