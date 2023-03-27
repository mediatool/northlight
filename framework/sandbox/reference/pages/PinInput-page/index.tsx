
  import React from 'react'
  import ReferencePage from '../reference-page'

  const PinInputPage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/pin-input/pin-input.tsx",
  "description": "",
  "displayName": "PinInput",
  "methods": [],
  "props": {
    "size": {
      "defaultValue": null,
      "description": "",
      "name": "size",
      "parent": {
        "fileName": "framework/lib/components/pin-input/types.ts",
        "name": "PinInputProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/pin-input/types.ts",
          "name": "PinInputProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "PinSize",
        "value": [
          {
            "value": "\"sm\""
          },
          {
            "value": "\"md\""
          },
          {
            "value": "\"lg\""
          }
        ]
      }
    },
    "hidden": {
      "defaultValue": null,
      "description": "",
      "name": "hidden",
      "parent": {
        "fileName": "framework/lib/components/pin-input/types.ts",
        "name": "PinInputProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/components/pin-input/types.ts",
          "name": "PinInputProps"
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
    "children": {
      "defaultValue": null,
      "description": "The children of the pin input component",
      "name": "children",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/pin-input.d.ts",
        "name": "PinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/pin-input.d.ts",
          "name": "PinInputProps"
        }
      ],
      "required": true,
      "type": {
        "name": "enum",
        "raw": "ReactNode",
        "value": [
          {
            "value": "string"
          },
          {
            "value": "number"
          },
          {
            "value": "false"
          },
          {
            "value": "true"
          },
          {
            "value": "ReactElement<any, string | JSXElementConstructor<any>>",
            "description": "",
            "fullComment": "",
            "tags": {}
          },
          {
            "value": "ReactFragment",
            "description": "",
            "fullComment": "",
            "tags": {}
          },
          {
            "value": "ReactPortal",
            "description": "",
            "fullComment": "",
            "tags": {}
          }
        ]
      }
    },
    "autoFocus": {
      "defaultValue": null,
      "description": "If `true`, the pin input receives focus on mount",
      "name": "autoFocus",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
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
      "description": "The value of the pin input. This is the value\nthat will be returned when the pin input is filled",
      "name": "value",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "defaultValue": {
      "defaultValue": null,
      "description": "The default value of the pin input",
      "name": "defaultValue",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "onChange": {
      "defaultValue": null,
      "description": "Function called on input change",
      "name": "onChange",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
        }
      ],
      "required": false,
      "type": {
        "name": "(value: string) => void"
      }
    },
    "onComplete": {
      "defaultValue": null,
      "description": "Function called when all inputs have valid values",
      "name": "onComplete",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
        }
      ],
      "required": false,
      "type": {
        "name": "(value: string) => void"
      }
    },
    "placeholder": {
      "defaultValue": null,
      "description": "The placeholder for the pin input",
      "name": "placeholder",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "manageFocus": {
      "defaultValue": {
        "value": "true"
      },
      "description": "If `true`, focus will move automatically to the next input once filled",
      "name": "manageFocus",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
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
    "otp": {
      "defaultValue": null,
      "description": "If `true`, the pin input component signals to its fields that they should\nuse `autocomplete=\"one-time-code\"`.",
      "name": "otp",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
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
    "id": {
      "defaultValue": null,
      "description": "The top-level id string that will be applied to the input fields.\nThe index of the input will be appended to this top-level id.\n@example if id=\"foo\", the first input will have `foo-0`",
      "name": "id",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "isDisabled": {
      "defaultValue": null,
      "description": "If `true`, the pin input component is put in the disabled state",
      "name": "isDisabled",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
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
    "isInvalid": {
      "defaultValue": null,
      "description": "If `true`, the pin input component is put in the invalid state",
      "name": "isInvalid",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
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
    "type": {
      "defaultValue": null,
      "description": "The type of values the pin-input should allow",
      "name": "type",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
        }
      ],
      "required": false,
      "type": {
        "name": "enum",
        "raw": "\"number\" | \"alphanumeric\"",
        "value": [
          {
            "value": "\"number\""
          },
          {
            "value": "\"alphanumeric\""
          }
        ]
      }
    },
    "mask": {
      "defaultValue": null,
      "description": "If `true`, the input's value will be masked just like `type=password`",
      "name": "mask",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
        "name": "UsePinInputProps"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/use-pin-input.d.ts",
          "name": "UsePinInputProps"
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
    "focusBorderColor": {
      "defaultValue": null,
      "description": "The border color when the input is focused. Use color keys in `theme.colors`\n@example focusBorderColor = \"blue.500\"",
      "name": "focusBorderColor",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/pin-input.d.ts",
        "name": "InputOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/pin-input.d.ts",
          "name": "InputOptions"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "errorBorderColor": {
      "defaultValue": null,
      "description": "The border color when the input is invalid. Use color keys in `theme.colors`\n@example errorBorderColor = \"red.500\"",
      "name": "errorBorderColor",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/pin-input.d.ts",
        "name": "InputOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/pin-input/dist/pin-input.d.ts",
          "name": "InputOptions"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    }
  }
}} />
  )

  export default PinInputPage
  