import React from 'react'
import ReferencePage from '../../reference-page'

const StatusPinPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/status-pin/status-pin.tsx',
    description: '',
    displayName: 'StatusPin',
    methods: [],
    props: {
      size: {
        defaultValue: {
          value: 'md',
        },
        description: '',
        name: 'size',
        parent: {
          fileName: 'framework/lib/components/status-pin/types.ts',
          name: 'StatusPinProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/status-pin/types.ts',
            name: 'StatusPinProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'PinSize',
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
      variant: {
        defaultValue: null,
        description: '',
        name: 'variant',
        parent: {
          fileName: 'framework/lib/components/status-pin/types.ts',
          name: 'StatusPinProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/status-pin/types.ts',
            name: 'StatusPinProps',
          },
        ],
        required: true,
        type: {
          name: 'enum',
          raw: 'PinVariant',
          value: [
            {
              value: '"gray"',
            },
            {
              value: '"green"',
            },
            {
              value: '"red"',
            },
            {
              value: '"yellow"',
            },
          ],
        },
      },
    },
  } }
  />
)

export default StatusPinPage