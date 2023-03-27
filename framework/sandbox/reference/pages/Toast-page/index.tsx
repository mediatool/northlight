
  import React from 'react'
  import ReferencePage from '../reference-page'

  const ToastPage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/toast/toast.tsx",
  "description": "",
  "displayName": "Toast",
  "methods": [],
  "props": {
    "title": {
      "defaultValue": {
        "value": ""
      },
      "description": "",
      "name": "title",
      "parent": {
        "fileName": "framework/lib/components/toast/types.ts",
        "name": "ToastProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/toast/types.ts",
          "name": "ToastProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "variant": {
      "defaultValue": {
        "value": "success"
      },
      "description": "",
      "name": "variant",
      "parent": {
        "fileName": "framework/lib/components/toast/types.ts",
        "name": "ToastProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/toast/types.ts",
          "name": "ToastProps"
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
    "description": {
      "defaultValue": {
        "value": ""
      },
      "description": "",
      "name": "description",
      "parent": {
        "fileName": "framework/lib/components/toast/types.ts",
        "name": "ToastProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/toast/types.ts",
          "name": "ToastProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "onClose": {
      "defaultValue": null,
      "description": "",
      "name": "onClose",
      "parent": {
        "fileName": "framework/lib/components/toast/types.ts",
        "name": "ToastProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/toast/types.ts",
          "name": "ToastProps"
        }
      ],
      "required": false,
      "type": {
        "name": "() => void"
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

  export default ToastPage
  