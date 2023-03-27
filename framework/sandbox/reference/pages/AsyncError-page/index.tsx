
  import React from 'react'
  import ReferencePage from '../reference-page'

  const AsyncErrorPage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "lib/components/async-error/async-error.tsx",
  "description": "",
  "displayName": "AsyncError",
  "methods": [],
  "props": {
    "message": {
      "defaultValue": {
        "value": ""
      },
      "description": "",
      "name": "message",
      "parent": {
        "fileName": "framework/lib/components/async-error/types.ts",
        "name": "AsyncErrorProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/async-error/types.ts",
          "name": "AsyncErrorProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "variant": {
      "defaultValue": null,
      "description": "",
      "name": "variant",
      "parent": {
        "fileName": "framework/lib/components/alert/types.ts",
        "name": "AlertProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/alert/types.ts",
          "name": "AlertProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "AlertVariants",
        "value": [
          {
            "value": "\"success\""
          },
          {
            "value": "\"warning\""
          },
          {
            "value": "\"error\""
          },
          {
            "value": "\"info\""
          }
        ]
      }
    },
    "addRole": {
      "defaultValue": {
        "value": "false"
      },
      "description": "",
      "name": "addRole",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/alert/dist/alert.d.ts",
        "name": "AlertProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/alert/dist/alert.d.ts",
          "name": "AlertProps"
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
    "status": {
      "defaultValue": {
        "value": "\"info\""
      },
      "description": "The status of the alert",
      "name": "status",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/alert/dist/alert.d.ts",
        "name": "AlertOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/alert/dist/alert.d.ts",
          "name": "AlertOptions"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "\"success\" | \"warning\" | \"error\" | \"info\" | \"loading\"",
        "value": [
          {
            "value": "\"success\""
          },
          {
            "value": "\"warning\""
          },
          {
            "value": "\"error\""
          },
          {
            "value": "\"info\""
          },
          {
            "value": "\"loading\""
          }
        ]
      }
    }
  }
}} />
  )

  export default AsyncErrorPage
  