
  import React from 'react'
  import ReferencePage from '../reference-page'

  const TextFieldPage = () => (
    <ReferencePage data={{
  "tags": {},
  "filePath": "/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/text-field/text-field.tsx",
  "description": "",
  "displayName": "TextField",
  "methods": [],
  "props": {
    "isDisabled": {
      "defaultValue": {
        "value": "false"
      },
      "description": "If `true`, the form control will be disabled. This has 2 side effects:\n- The `FormLabel` will have `data-disabled` attribute\n- The form element (e.g, Input) will be disabled",
      "name": "isDisabled",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts",
        "name": "FormControlOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts",
          "name": "FormControlOptions"
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
    "isReadOnly": {
      "defaultValue": {
        "value": "false"
      },
      "description": "If `true`, the form control will be readonly",
      "name": "isReadOnly",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts",
        "name": "FormControlOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts",
          "name": "FormControlOptions"
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
      "defaultValue": {
        "value": "false"
      },
      "description": "If `true`, the form control will be invalid. This has 2 side effects:\n- The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`\n- The form element (e.g, Input) will have `aria-invalid` set to `true`",
      "name": "isInvalid",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts",
        "name": "FormControlOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts",
          "name": "FormControlOptions"
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
    "isRequired": {
      "defaultValue": {
        "value": "false"
      },
      "description": "If `true`, the form control will be required. This has 2 side effects:\n- The `FormLabel` will show a required indicator\n- The form element (e.g, Input) will have `aria-required` set to `true`",
      "name": "isRequired",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts",
        "name": "FormControlOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/form-control/dist/form-control.d.ts",
          "name": "FormControlOptions"
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
        "fileName": "northlight/node_modules/@chakra-ui/input/dist/input.d.ts",
        "name": "InputOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/input/dist/input.d.ts",
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
        "fileName": "northlight/node_modules/@chakra-ui/input/dist/input.d.ts",
        "name": "InputOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/input/dist/input.d.ts",
          "name": "InputOptions"
        }
      ],
      "required": false,
      "type": {
        "name": "string"
      }
    },
    "htmlSize": {
      "defaultValue": null,
      "description": "The native HTML `size` attribute to be passed to the `input`",
      "name": "htmlSize",
      "parent": {
        "fileName": "northlight/node_modules/@chakra-ui/input/dist/input.d.ts",
        "name": "InputOptions"
      },
      "declarations": [
        {
          "fileName": "northlight/node_modules/@chakra-ui/input/dist/input.d.ts",
          "name": "InputOptions"
        }
      ],
      "required": false,
      "type": {
        "name": "number"
      }
    },
    "inputLeftElement": {
      "defaultValue": null,
      "description": "",
      "name": "inputLeftElement",
      "parent": {
        "fileName": "framework/lib/types/input-field/input-field.ts",
        "name": "InputFieldProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/types/input-field/input-field.ts",
          "name": "InputFieldProps"
        }
      ],
      "required": false,
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
    "inputRightElement": {
      "defaultValue": null,
      "description": "",
      "name": "inputRightElement",
      "parent": {
        "fileName": "framework/lib/types/input-field/input-field.ts",
        "name": "InputFieldProps"
      },
      "declarations": [
        {
          "fileName": "framework/lib/types/input-field/input-field.ts",
          "name": "InputFieldProps"
        }
      ],
      "required": false,
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
    }
  }
}} />
  )

  export default TextFieldPage
  