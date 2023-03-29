import React from 'react'
import ReferencePage from '../../reference-page'

const ModalPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/modal/modal.tsx',
    description: '',
    displayName: 'Modal',
    methods: [],
    props: {
      size: {
        defaultValue: null,
        description: '',
        name: 'size',
        parent: {
          fileName: 'framework/lib/components/modal/types.ts',
          name: 'ModalProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/modal/types.ts',
            name: 'ModalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ModalSizes',
          value: [
            {
              value: '"sm"',
            },
            {
              value: '"md"',
            },
            {
              value: '"lg"',
            },
            {
              value: '"xl"',
            },
            {
              value: '"2xl"',
            },
            {
              value: '"xs"',
            },
            {
              value: '"3xl"',
            },
            {
              value: '"4xl"',
            },
            {
              value: '"5xl"',
            },
            {
              value: '"6xl"',
            },
            {
              value: '"full"',
            },
            {
              value: '"huge"',
            },
          ],
        },
      },
      isCentered: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, the modal will be centered on screen.',
        name: 'isCentered',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalProps',
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
      scrollBehavior: {
        defaultValue: {
          value: '"outside"',
        },
        description: 'Where scroll behavior should originate.\n- If set to `inside`, scroll only occurs within the `ModalBody`.\n- If set to `outside`, the entire `ModalContent` will scroll within the viewport.',
        name: 'scrollBehavior',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'ScrollBehavior',
          value: [
            {
              value: '"inside"',
            },
            {
              value: '"outside"',
            },
          ],
        },
      },
      portalProps: {
        defaultValue: null,
        description: 'Props to be forwarded to the portal component',
        name: 'portalProps',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalProps',
          },
        ],
        required: false,
        type: {
          name: 'Pick<PortalProps, "appendToParentPortal" | "containerRef">',
        },
      },
      motionPreset: {
        defaultValue: {
          value: '"scale"',
        },
        description: 'The transition that should be used for the modal',
        name: 'motionPreset',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'MotionPreset',
          value: [
            {
              value: '"scale"',
            },
            {
              value: '"none"',
            },
            {
              value: '"slideInBottom"',
            },
            {
              value: '"slideInRight"',
            },
          ],
        },
      },
      onCloseComplete: {
        defaultValue: null,
        description: 'Fires when all exiting nodes have completed animating out',
        name: 'onCloseComplete',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalProps',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      isOpen: {
        defaultValue: null,
        description: 'If `true`, the modal will be open.',
        name: 'isOpen',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
          name: 'UseModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
            name: 'UseModalProps',
          },
        ],
        required: true,
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
      id: {
        defaultValue: null,
        description: 'The `id` of the modal',
        name: 'id',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
          name: 'UseModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
            name: 'UseModalProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      onClose: {
        defaultValue: null,
        description: 'Callback invoked to close the modal.',
        name: 'onClose',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
          name: 'UseModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
            name: 'UseModalProps',
          },
        ],
        required: true,
        type: {
          name: '() => void',
        },
      },
      closeOnOverlayClick: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, the modal will close when the overlay is clicked',
        name: 'closeOnOverlayClick',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
          name: 'UseModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
            name: 'UseModalProps',
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
      closeOnEsc: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, the modal will close when the `Esc` key is pressed',
        name: 'closeOnEsc',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
          name: 'UseModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
            name: 'UseModalProps',
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
      onOverlayClick: {
        defaultValue: null,
        description: 'Callback fired when the overlay is clicked.',
        name: 'onOverlayClick',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
          name: 'UseModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
            name: 'UseModalProps',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      onEsc: {
        defaultValue: null,
        description: 'Callback fired when the escape key is pressed and focus is within modal',
        name: 'onEsc',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
          name: 'UseModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
            name: 'UseModalProps',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      useInert: {
        defaultValue: {
          value: 'true',
        },
        description: 'A11y: If `true`, the siblings of the `modal` will have `aria-hidden`\nset to `true` so that screen readers can only see the `modal`.\n\nThis is commonly known as making the other elements **inert**',
        name: 'useInert',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
          name: 'UseModalProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/use-modal.d.ts',
            name: 'UseModalProps',
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
      trapFocus: {
        defaultValue: {
          value: 'true',
        },
        description: "If `false`, focus lock will be disabled completely.\n\nThis is useful in situations where you still need to interact with\nother surrounding elements.\n\n🚨Warning: We don't recommend doing this because it hurts the\naccessibility of the modal, based on WAI-ARIA specifications.",
        name: 'trapFocus',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalOptions',
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
      autoFocus: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, the modal will autofocus the first enabled and interactive\nelement within the `ModalContent`',
        name: 'autoFocus',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalOptions',
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
      initialFocusRef: {
        defaultValue: null,
        description: 'The `ref` of element to receive focus when the modal opens.',
        name: 'initialFocusRef',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalOptions',
          },
        ],
        required: false,
        type: {
          name: 'RefObject<FocusableElement>',
        },
      },
      finalFocusRef: {
        defaultValue: null,
        description: 'The `ref` of element to receive focus when the modal closes.',
        name: 'finalFocusRef',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalOptions',
          },
        ],
        required: false,
        type: {
          name: 'RefObject<FocusableElement>',
        },
      },
      returnFocusOnClose: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, the modal will return focus to the element that triggered it when it closes.',
        name: 'returnFocusOnClose',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalOptions',
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
      blockScrollOnMount: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, scrolling will be disabled on the `body` when the modal opens.',
        name: 'blockScrollOnMount',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalOptions',
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
      allowPinchZoom: {
        defaultValue: {
          value: 'false.',
        },
        description: 'Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.',
        name: 'allowPinchZoom',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalOptions',
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
      preserveScrollBarGap: {
        defaultValue: {
          value: 'true',
        },
        description: "If `true`, a `padding-right` will be applied to the body element\nthat's equal to the width of the scrollbar.\n\nThis can help prevent some unpleasant flickering effect\nand content adjustment when the modal opens",
        name: 'preserveScrollBarGap',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
          name: 'ModalOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/modal/dist/modal.d.ts',
            name: 'ModalOptions',
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
      lockFocusAcrossFrames: {
        defaultValue: {
          value: 'false',
        },
        description: 'Enables aggressive focus capturing within iframes.\n- If `true`: keep focus in the lock, no matter where lock is active\n- If `false`:  allows focus to move outside of iframe',
        name: 'lockFocusAcrossFrames',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/focus-lock/dist/focus-lock.d.ts',
          name: 'FocusLockProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/focus-lock/dist/focus-lock.d.ts',
            name: 'FocusLockProps',
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

export default ModalPage
