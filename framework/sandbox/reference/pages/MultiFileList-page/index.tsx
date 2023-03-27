
  import React from 'react'
  import ReferencePage from '../reference-page'

  const MultiFileListPage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/file-picker/multi-file-list.tsx",
  "description": "",
  "displayName": "MultiFileList",
  "methods": [],
  "props": {
    "files": {
      "defaultValue": null,
      "description": "",
      "name": "files",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFileListProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFileListProps"
        }
      ],
      "required": false,
      "type": {
        "name": "T[]"
      }
    },
    "uploadingFiles": {
      "defaultValue": null,
      "description": "",
      "name": "uploadingFiles",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFileListProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFileListProps"
        }
      ],
      "required": false,
      "type": {
        "name": "T[]"
      }
    },
    "deleteFile": {
      "defaultValue": null,
      "description": "",
      "name": "deleteFile",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFileListProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFileListProps"
        }
      ],
      "required": false,
      "type": {
        "name": "(file: T | FileFormat) => void"
      }
    },
    "onChange": {
      "defaultValue": null,
      "description": "",
      "name": "onChange",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFileListProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFileListProps"
        }
      ],
      "required": false,
      "type": {
        "name": "(files: File[]) => void"
      }
    },
    "addFile": {
      "defaultValue": null,
      "description": "",
      "name": "addFile",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFileListProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFileListProps"
        }
      ],
      "required": false,
      "type": {
        "name": "(file: File, id: string) => void"
      }
    },
    "enableSmartLoad": {
      "defaultValue": {
        "value": "true"
      },
      "description": "",
      "name": "enableSmartLoad",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFileListProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFileListProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "boolean",
        "value": [
          {
            "value": "false"
          },
          {
            "value": "true"
          }
        ]
      }
    },
    "editFileOptions": {
      "defaultValue": {
        "value": "{\n  canEdit: true,\n  canEditImage: true,\n  canEditName: true,\n}"
      },
      "description": "",
      "name": "editFileOptions",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFileListProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFileListProps"
        }
      ],
      "required": false,
      "type": {
        "name": "EditFileOptionsType"
      }
    },
    "confirmDelete": {
      "defaultValue": null,
      "description": "",
      "name": "confirmDelete",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFileListProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFileListProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "boolean",
        "value": [
          {
            "value": "false"
          },
          {
            "value": "true"
          }
        ]
      }
    }
  }
}} />
  )

  export default MultiFileListPage
  