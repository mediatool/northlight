import React from 'react'
import ReferencePage from '../../reference-page'

const MultiFileUploaderPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/file-picker/multi-file-uploader.tsx',
    description: '',
    displayName: 'MultiFileUploader',
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
          name: 'MultiFileUploaderProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'MultiFileUploaderProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      compression: {
        defaultValue: null,
        description: '',
        name: 'compression',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'MultiFileUploaderProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'MultiFileUploaderProps',
          },
        ],
        required: false,
        type: {
          name: 'CompressionType',
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
          name: 'MultiFileUploaderProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'MultiFileUploaderProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      addFilesToQueue: {
        defaultValue: null,
        description: '',
        name: 'addFilesToQueue',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'MultiFileUploaderProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'MultiFileUploaderProps',
          },
        ],
        required: false,
        type: {
          name: '(files: T[]) => void',
        },
      },
      updatePreviewFiles: {
        defaultValue: null,
        description: '',
        name: 'updatePreviewFiles',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'MultiFileUploaderProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'MultiFileUploaderProps',
          },
        ],
        required: false,
        type: {
          name: '(files: any[]) => void',
        },
      },
      onChange: {
        defaultValue: null,
        description: '',
        name: 'onChange',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'MultiFileUploaderProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'MultiFileUploaderProps',
          },
        ],
        required: false,
        type: {
          name: '(files: File[]) => void',
        },
      },
    },
  } }
  />
)

export default MultiFileUploaderPage
