
  import React from 'react'
  import ReferencePage from '../reference-page'

  const MultiFilePickerPage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/file-picker/multi-file-picker.tsx",
  "description": "",
  "displayName": "MultiFilePicker",
  "methods": [],
  "props": {
    "onChange": {
      "defaultValue": null,
      "description": "",
      "name": "onChange",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "(files: File[]) => void"
      }
    },
    "compression": {
      "defaultValue": null,
      "description": "",
      "name": "compression",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "CompressionType"
      }
    },
    "files": {
      "defaultValue": {
        "value": "null"
      },
      "description": "",
      "name": "files",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFilePickerProps"
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
        "name": "MultiFilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "T[]"
      }
    },
    "deleteFile": {
      "defaultValue": {
        "value": "null"
      },
      "description": "",
      "name": "deleteFile",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "(file: FileFormat | T) => void"
      }
    },
    "enablePreLoad": {
      "defaultValue": {
        "value": "true"
      },
      "description": "",
      "name": "enablePreLoad",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFilePickerProps"
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
    "enableSmartLoad": {
      "defaultValue": {
        "value": "true"
      },
      "description": "",
      "name": "enableSmartLoad",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFilePickerProps"
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
    "confirmDelete": {
      "defaultValue": {
        "value": "true"
      },
      "description": "",
      "name": "confirmDelete",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "MultiFilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "MultiFilePickerProps"
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
    "value": {
      "defaultValue": null,
      "description": "",
      "name": "value",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "FilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "FilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "acceptFormat": {
      "defaultValue": {
        "value": "*"
      },
      "description": "",
      "name": "acceptFormat",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "FilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "FilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "isUploading": {
      "defaultValue": null,
      "description": "",
      "name": "isUploading",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "FilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "FilePickerProps"
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
    "uploaded": {
      "defaultValue": null,
      "description": "",
      "name": "uploaded",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "FilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "FilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "number"
      }
    },
    "maxFileSize": {
      "defaultValue": {
        "value": "524288000"
      },
      "description": "",
      "name": "maxFileSize",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "FilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "FilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "number"
      }
    },
    "loadWithSpinner": {
      "defaultValue": null,
      "description": "",
      "name": "loadWithSpinner",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "FilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "FilePickerProps"
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
        "name": "FilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "FilePickerProps"
        }
      ],
      "required": false,
      "type": {
        "name": "EditFileOptionsType"
      }
    },
    "showProgress": {
      "defaultValue": null,
      "description": "",
      "name": "showProgress",
      "parent": {
        "fileName": "framework/lib/components/file-picker/types.ts",
        "name": "FilePickerProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/file-picker/types.ts",
          "name": "FilePickerProps"
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

  export default MultiFilePickerPage
  