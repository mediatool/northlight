import React from 'react'
import ReferencePage from '../../reference-page'

const FlipButtonPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/flip-button/flip-button.tsx',
    description: '',
    displayName: 'FlipButton',
    methods: [],
    props: {
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
      value: {
        defaultValue: null,
        description: '',
        name: 'value',
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
          name: 'string',
        },
      },
    },
  } }
  />
)

export default FlipButtonPage