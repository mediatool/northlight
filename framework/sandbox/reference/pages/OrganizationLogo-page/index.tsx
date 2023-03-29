import React from 'react'
import ReferencePage from '../../reference-page'

const OrganizationLogoPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/organization-logo/organization-logo.tsx',
    description: '',
    displayName: 'OrganizationLogo',
    methods: [],
    props: {
      name: {
        defaultValue: null,
        description: 'The name of the person in the avatar.\n\n- if `src` has loaded, the name will be used as the `alt` attribute of the `img`\n- If `src` is not loaded, the name will be used to create the initials',
        name: 'name',
        parent: {
          fileName: 'framework/lib/components/organization-logo/types.ts',
          name: 'OrganizationLogoProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/organization-logo/types.ts',
            name: 'OrganizationLogoProps',
          },
        ],
        required: true,
        type: {
          name: 'string',
        },
      },
      image: {
        defaultValue: null,
        description: '',
        name: 'image',
        parent: {
          fileName: 'framework/lib/components/organization-logo/types.ts',
          name: 'OrganizationLogoProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/organization-logo/types.ts',
            name: 'OrganizationLogoProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      iconLabel: {
        defaultValue: null,
        description: '',
        name: 'iconLabel',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar.d.ts',
          name: 'AvatarProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar.d.ts',
            name: 'AvatarProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      ignoreFallback: {
        defaultValue: {
          value: 'false',
        },
        description: "If `true`, opt out of the avatar's `fallback` logic and\nrenders the `img` at all times.",
        name: 'ignoreFallback',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar.d.ts',
          name: 'AvatarProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar.d.ts',
            name: 'AvatarProps',
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
      showBorder: {
        defaultValue: {
          value: 'false',
        },
        description: 'If `true`, the `Avatar` will show a border around it.\n\nBest for a group of avatars',
        name: 'showBorder',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
          name: 'AvatarOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
            name: 'AvatarOptions',
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
      src: {
        defaultValue: null,
        description: 'The image url of the `Avatar`',
        name: 'src',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
          name: 'AvatarOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
            name: 'AvatarOptions',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      srcSet: {
        defaultValue: null,
        description: 'List of sources to use for different screen resolutions',
        name: 'srcSet',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
          name: 'AvatarOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
            name: 'AvatarOptions',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      loading: {
        defaultValue: null,
        description: 'Defines loading strategy',
        name: 'loading',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
          name: 'AvatarOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
            name: 'AvatarOptions',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: '"eager" | "lazy"',
          value: [
            {
              value: '"eager"',
            },
            {
              value: '"lazy"',
            },
          ],
        },
      },
      onError: {
        defaultValue: null,
        description: 'Function called when image failed to load',
        name: 'onError',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
          name: 'AvatarOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
            name: 'AvatarOptions',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      icon: {
        defaultValue: null,
        description: 'The default avatar used as fallback when `name`, and `src`\nis not specified.',
        name: 'icon',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
          name: 'AvatarOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
            name: 'AvatarOptions',
          },
        ],
        required: false,
        type: {
          name: 'React.ReactElement',
        },
      },
      getInitials: {
        defaultValue: null,
        description: 'Function to get the initials to display',
        name: 'getInitials',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
          name: 'AvatarOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
            name: 'AvatarOptions',
          },
        ],
        required: false,
        type: {
          name: '(name: string) => string',
        },
      },
      referrerPolicy: {
        defaultValue: null,
        description: 'Defining which referrer is sent when fetching the resource.',
        name: 'referrerPolicy',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
          name: 'AvatarOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/avatar/dist/avatar-types.d.ts',
            name: 'AvatarOptions',
          },
        ],
        required: false,
        type: {
          name: 'React.HTMLAttributeReferrerPolicy',
        },
      },
    },
  } }
  />
)

export default OrganizationLogoPage