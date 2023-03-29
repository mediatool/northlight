import React from 'react'
import ReferencePage from '../../reference-page'

const FilePickerFieldPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/file-picker/file-picker-field.tsx',
    description: '',
    displayName: 'FilePickerField',
    methods: [],
    props: {
      name: {
        defaultValue: null,
        description: '',
        name: 'name',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerFieldProps',
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
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerFieldProps',
          },
        ],
        required: true,
        type: {
          name: 'string',
        },
      },
      validate: {
        defaultValue: null,
        description: '',
        name: 'validate',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'RegisterOptions<FieldValues, string>',
          value: [
            {
              value: 'Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }',
            },
            {
              value: 'Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }',
            },
            {
              value: 'Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }',
            },
          ],
        },
      },
      isRequired: {
        defaultValue: null,
        description: '',
        name: 'isRequired',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerFieldProps',
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
      direction: {
        defaultValue: null,
        description: '',
        name: 'direction',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'StackDirection',
          value: [
            {
              value: '"row"',
            },
            {
              value: '"column"',
            },
            {
              value: '"column-reverse"',
            },
            {
              value: '"row-reverse"',
            },
            {
              value: 'ResponsiveArray<"row" | "column" | "column-reverse" | "row-reverse">',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'Partial<Record<string | (string & {}), "row" | "column" | "column-reverse" | "row-reverse">>',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      onChange: {
        defaultValue: null,
        description: '',
        name: 'onChange',
        parent: {
          fileName: 'framework/lib/components/file-picker/types.ts',
          name: 'FilePickerFieldProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/file-picker/types.ts',
            name: 'FilePickerFieldProps',
          },
        ],
        required: false,
        type: {
          name: '(File: string) => void',
        },
      },
      value: {
        defaultValue: null,
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
      acceptFormat: {
        defaultValue: null,
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
        defaultValue: null,
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
      loadWithSpinner: {
        defaultValue: null,
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
        defaultValue: null,
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
        defaultValue: null,
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
        defaultValue: null,
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

export default FilePickerFieldPage