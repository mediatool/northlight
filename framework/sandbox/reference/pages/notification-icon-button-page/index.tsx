import React from 'react'
import ReferencePage from '../../reference-page'

const NotificationIconButtonPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/notification-icon-button/notification-icon-button.tsx',
    description: '',
    displayName: 'NotificationIconButton',
    methods: [],
    props: {
      variant: {
        defaultValue: {
          value: 'ghost',
        },
        description: '',
        name: 'variant',
        parent: {
          fileName: 'framework/lib/components/notification-icon-button/types.ts',
          name: 'NotificationIconButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/notification-icon-button/types.ts',
            name: 'NotificationIconButtonProps',
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
      blinkerColor: {
        defaultValue: {
          value: 'green.500',
        },
        description: '',
        name: 'blinkerColor',
        parent: {
          fileName: 'framework/lib/components/notification-icon-button/types.ts',
          name: 'NotificationIconButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/notification-icon-button/types.ts',
            name: 'NotificationIconButtonProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      hasNotification: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'hasNotification',
        parent: {
          fileName: 'framework/lib/components/notification-icon-button/types.ts',
          name: 'NotificationIconButtonProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/notification-icon-button/types.ts',
            name: 'NotificationIconButtonProps',
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
      icon: {
        defaultValue: null,
        description: 'The icon to be used in the button.',
        name: 'icon',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
          name: 'IconButtonProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
            name: 'IconButtonProps',
          },
        ],
        required: false,
        type: {
          name: 'React.ReactElement',
        },
      },
      isRound: {
        defaultValue: {
          value: 'false',
        },
        description: "If `true`, the button will be perfectly round. Else, it'll be slightly round",
        name: 'isRound',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
          name: 'IconButtonProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
            name: 'IconButtonProps',
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
      'aria-label': {
        defaultValue: null,
        description: 'A11y: A label that describes the button',
        name: 'aria-label',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
          name: 'IconButtonProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/button/dist/icon-button.d.ts',
            name: 'IconButtonProps',
          },
        ],
        required: true,
        type: {
          name: 'string',
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
    },
  } }
  />
)

export default NotificationIconButtonPage