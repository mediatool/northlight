import React from 'react'
import ReferencePage from '../../reference-page'

const FilePickerPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/file-picker/file-picker.tsx',
    description: '',
    displayName: 'FilePicker',
    methods: [],
    props: {
      acceptFormat: {
        defaultValue: {
          value: '*',
        },
        description: '',
        name: 'acceptFormat',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
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
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
          },
        ],
        required: false,
        type: {
          name: '(image: File) => void',
        },
      },
      compression: {
        defaultValue: null,
        description: '',
        name: 'compression',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
          },
        ],
        required: false,
        type: {
          name: 'CompressionType',
        },
      },
      isUploading: {
        defaultValue: null,
        description: '',
        name: 'isUploading',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
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
      uploaded: {
        defaultValue: null,
        description: '',
        name: 'uploaded',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      maxFileSize: {
        defaultValue: {
          value: '524288000',
        },
        description: '',
        name: 'maxFileSize',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      value: {
        defaultValue: {
          value: '',
        },
        description: '',
        name: 'value',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      loadWithSpinner: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'loadWithSpinner',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
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
      confirmDelete: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'confirmDelete',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
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
      editFileOptions: {
        defaultValue: {
          value: '{\n  canEdit: true,\n  canEditImage: true,\n  canEditName: true,\n}',
        },
        description: '',
        name: 'editFileOptions',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
          },
        ],
        required: false,
        type: {
          name: 'EditFileOptionsType',
        },
      },
      showProgress: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'showProgress',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerProps',
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

export default FilePickerPage
