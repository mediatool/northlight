
  import React from 'react'
  import ReferencePage from '../reference-page'

  const AvatarGroupPage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "lib/components/avatar/avatar-group.tsx",
  "description": "",
  "displayName": "AvatarGroup",
  "methods": [],
  "props": {
    "max": {
      "defaultValue": null,
      "description": "",
      "name": "max",
      "parent": {
        "fileName": "framework/lib/components/avatar/types.ts",
        "name": "AvatarGroupProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/avatar/types.ts",
          "name": "AvatarGroupProps"
        }
      ],
      "required": true,
      "type": {
        "name": "number"
      }
    },
    "spacing": {
      "defaultValue": {
        "value": "-4"
      },
      "description": "",
      "name": "spacing",
      "parent": {
        "fileName": "framework/lib/components/avatar/types.ts",
        "name": "AvatarGroupProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/avatar/types.ts",
          "name": "AvatarGroupProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "string | number",
        "value": [
          {
            "value": "string"
          },
          {
            "value": "number"
          }
        ]
      }
    }
  }
}} />
  )

  export default AvatarGroupPage
  