
  import React from 'react'
  import ReferencePage from '../reference-page'

  const TabsPage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/tabs/tabs.tsx",
  "description": "",
  "displayName": "Tabs",
  "methods": [],
  "props": {
    "orientation": {
      "defaultValue": {
        "value": "\"horizontal\""
      },
      "description": "The orientation of the tab list.",
      "name": "orientation",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "\"horizontal\" | \"vertical\"",
        "value": [
          {
            "value": "\"horizontal\""
          },
          {
            "value": "\"vertical\""
          }
        ]
      }
    },
    "isManual": {
      "defaultValue": {
        "value": "false"
      },
      "description": "If `true`, the tabs will be manually activated and\ndisplay its panel by pressing Space or Enter.\n\nIf `false`, the tabs will be automatically activated\nand their panel is displayed when they receive focus.",
      "name": "isManual",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
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
    "onChange": {
      "defaultValue": null,
      "description": "Callback when the index (controlled or un-controlled) changes.",
      "name": "onChange",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
        }
      ],
      "required": false,
      "type": {
        "name": "(index: number) => void"
      }
    },
    "index": {
      "defaultValue": null,
      "description": "The index of the selected tab (in controlled mode)",
      "name": "index",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
        }
      ],
      "required": false,
      "type": {
        "name": "number"
      }
    },
    "defaultIndex": {
      "defaultValue": null,
      "description": "The initial index of the selected tab (in uncontrolled mode)",
      "name": "defaultIndex",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
        }
      ],
      "required": false,
      "type": {
        "name": "number"
      }
    },
    "id": {
      "defaultValue": null,
      "description": "The id of the tab",
      "name": "id",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "isLazy": {
      "defaultValue": {
        "value": "false"
      },
      "description": "Performance 🚀:\nIf `true`, rendering of the tab panel's will be deferred until it is selected.",
      "name": "isLazy",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
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
    "lazyBehavior": {
      "defaultValue": {
        "value": "\"unmount\""
      },
      "description": "Performance 🚀:\nThe lazy behavior of tab panels' content when not active.\nOnly works when `isLazy={true}`\n\n- \"unmount\": The content of inactive tab panels are always unmounted.\n- \"keepMounted\": The content of inactive tab panels is initially unmounted,\nbut stays mounted when selected.",
      "name": "lazyBehavior",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "LazyMode",
        "value": [
          {
            "value": "\"unmount\""
          },
          {
            "value": "\"keepMounted\""
          }
        ]
      }
    },
    "direction": {
      "defaultValue": {
        "value": "\"ltr\""
      },
      "description": "The writing mode direction.\n\n- When in RTL, the left and right navigation is flipped",
      "name": "direction",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
        "name": "UseTabsProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/use-tabs.d.ts",
          "name": "UseTabsProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "\"ltr\" | \"rtl\"",
        "value": [
          {
            "value": "\"ltr\""
          },
          {
            "value": "\"rtl\""
          }
        ]
      }
    },
    "isFitted": {
      "defaultValue": {
        "value": "false"
      },
      "description": "If `true`, tabs will stretch to width of the tablist.",
      "name": "isFitted",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts",
        "name": "TabsOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts",
          "name": "TabsOptions"
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
    "align": {
      "defaultValue": null,
      "description": "The alignment of the tabs",
      "name": "align",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts",
        "name": "TabsOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/tabs/dist/tabs.d.ts",
          "name": "TabsOptions"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "\"center\" | \"end\" | \"start\"",
        "value": [
          {
            "value": "\"center\""
          },
          {
            "value": "\"end\""
          },
          {
            "value": "\"start\""
          }
        ]
      }
    }
  }
}} />
  )

  export default TabsPage
  