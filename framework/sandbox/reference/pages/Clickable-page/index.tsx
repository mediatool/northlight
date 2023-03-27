
  import React from 'react'
  import ReferencePage from '../reference-page'

  const ClickablePage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "lib/components/clickable/clickable.tsx",
  "description": "",
  "displayName": "Clickable",
  "methods": [],
  "props": {
    "href": {
      "defaultValue": null,
      "description": "",
      "name": "href",
      "parent": {
        "fileName": "framework/lib/components/clickable/types.ts",
        "name": "ClickableProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/clickable/types.ts",
          "name": "ClickableProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "linkProps": {
      "defaultValue": null,
      "description": "",
      "name": "linkProps",
      "parent": {
        "fileName": "framework/lib/components/clickable/types.ts",
        "name": "ClickableProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/clickable/types.ts",
          "name": "ClickableProps"
        }
      ],
      "required": false,
      "type": {
        "name": "LinkProps"
      }
    },
    "isDisabled": {
      "defaultValue": {
        "value": "false"
      },
      "description": "If `true`, the element will be disabled.\nIt will set the `disabled` HTML attribute",
      "name": "isDisabled",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
        "name": "UseClickableProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
          "name": "UseClickableProps"
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
    "isFocusable": {
      "defaultValue": {
        "value": "false"
      },
      "description": "If `true` and isDisabled, the element will\nhave only `aria-disabled` set to `true`",
      "name": "isFocusable",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
        "name": "UseClickableProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
          "name": "UseClickableProps"
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
    "clickOnEnter": {
      "defaultValue": {
        "value": "true"
      },
      "description": "Whether or not trigger click on pressing `Enter`.",
      "name": "clickOnEnter",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
        "name": "UseClickableProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
          "name": "UseClickableProps"
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
    "clickOnSpace": {
      "defaultValue": {
        "value": "true"
      },
      "description": "Whether or not trigger click on pressing `Space`.",
      "name": "clickOnSpace",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
        "name": "UseClickableProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
          "name": "UseClickableProps"
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
    "ref": {
      "defaultValue": null,
      "description": "The ref for the element",
      "name": "ref",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
        "name": "UseClickableProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/clickable/dist/use-clickable.d.ts",
          "name": "UseClickableProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "Ref<HTMLElement>",
        "value": [
          {
            "value": "(instance: HTMLElement) => void",
            "description": "",
            "fullComment": "",
            "tags": {}
          },
          {
            "value": "RefObject<HTMLElement>",
            "description": "",
            "fullComment": "",
            "tags": {}
          }
        ]
      }
    }
  }
}} />
  )

  export default ClickablePage
  