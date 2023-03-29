import React from 'react'
import ReferencePage from '../../reference-page'

const ScaleFadePage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: '/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/transitions/scale-fade.tsx',
    description: '',
    displayName: 'ScaleFade',
    methods: [],
    props: {
      duration: {
        defaultValue: {
          value: 'null',
        },
        description: '',
        name: 'duration',
        parent: {
          fileName: 'framework/lib/components/transitions/types.ts',
          name: 'FadeProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/transitions/types.ts',
            name: 'FadeProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      enterDuration: {
        defaultValue: {
          value: 'null',
        },
        description: '',
        name: 'enterDuration',
        parent: {
          fileName: 'framework/lib/components/transitions/types.ts',
          name: 'FadeProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/transitions/types.ts',
            name: 'FadeProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      exitDuration: {
        defaultValue: {
          value: 'null',
        },
        description: '',
        name: 'exitDuration',
        parent: {
          fileName: 'framework/lib/components/transitions/types.ts',
          name: 'FadeProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/transitions/types.ts',
            name: 'FadeProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      disableFocus: {
        defaultValue: {
          value: 'true',
        },
        description: '',
        name: 'disableFocus',
        parent: {
          fileName: 'framework/lib/components/transitions/types.ts',
          name: 'FadeProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/transitions/types.ts',
            name: 'FadeProps',
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
      hideDisplay: {
        defaultValue: {
          value: 'false',
        },
        description: '',
        name: 'hideDisplay',
        parent: {
          fileName: 'framework/lib/components/transitions/types.ts',
          name: 'FadeProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/transitions/types.ts',
            name: 'FadeProps',
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
      enterDelay: {
        defaultValue: {
          value: '0',
        },
        description: '',
        name: 'enterDelay',
        parent: {
          fileName: 'framework/lib/components/transitions/types.ts',
          name: 'FadeProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/transitions/types.ts',
            name: 'FadeProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      exitDelay: {
        defaultValue: {
          value: '0',
        },
        description: '',
        name: 'exitDelay',
        parent: {
          fileName: 'framework/lib/components/transitions/types.ts',
          name: 'FadeProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/transitions/types.ts',
            name: 'FadeProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      onTransitionComplete: {
        defaultValue: null,
        description: '',
        name: 'onTransitionComplete',
        parent: {
          fileName: 'framework/lib/components/transitions/types.ts',
          name: 'FadeProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/transitions/types.ts',
            name: 'FadeProps',
          },
        ],
        required: false,
        type: {
          name: '(isHidden: boolean) => void',
        },
      },
      style: {
        defaultValue: null,
        description: "@library The React DOM `style` prop, useful for setting CSS properties that aren't explicitly exposed by `Frame` props.\n\n```jsx\n<Frame style={{ mixBlendMode: \"difference\" }}  />\n```\n@motion The React DOM `style` prop, enhanced with support for `MotionValue`s and separate `transform` values.\n\n```jsx\nexport const MyComponent = () => {\n  const x = useMotionValue(0)\n\n  return <motion.div style={{ x, opacity: 1, scale: 0.5 }} />\n}\n```",
        name: 'style',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'MotionProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'MotionProps',
          },
        ],
        required: false,
        type: {
          name: 'MotionStyle',
        },
      },
      animate: {
        defaultValue: null,
        description: 'Values to animate to, variant label(s), or `AnimationControls`.\n@library ```jsx\n// As values\n<Frame animate={{ opacity: 1 }} />\n\n// As variant\n<Frame animate="visible" variants={variants} />\n\n// Multiple variants\n<Frame animate={["visible", "active"]} variants={variants} />\n\n// AnimationControls\n<Frame animate={animation} />\n```\n@motion ```jsx\n// As values\n<motion.div animate={{ opacity: 1 }} />\n\n// As variant\n<motion.div animate="visible" variants={variants} />\n\n// Multiple variants\n<motion.div animate={["visible", "active"]} variants={variants} />\n\n// AnimationControls\n<motion.div animate={animation} />\n```',
        name: 'animate',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'AnimationProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'AnimationProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean | AnimationControls | TargetAndTransition | VariantLabels',
          value: [
            {
              value: 'string',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'string[]',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'AnimationControls',
              description: '',
              fullComment: '@public',
              tags: {
                public: '',
              },
            },
            {
              value: 'TargetAndTransition',
            },
          ],
        },
      },
      onDrag: {
        defaultValue: null,
        description: 'Callback function that fires when the component is dragged.\n@library ```jsx\nfunction onDrag(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame drag onDrag={onDrag} />\n```\n@motion ```jsx\n<motion.div\n  drag\n  onDrag={\n    (event, info) => console.log(info.point.x, info.point.y)\n  }\n/>\n```\n@public',
        name: 'onDrag',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DragHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DragHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void',
        },
      },
      onDragEnd: {
        defaultValue: null,
        description: 'Callback function that fires when dragging ends.\n@library ```jsx\nfunction onDragEnd(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame drag onDragEnd={onDragEnd} />\n```\n@motion ```jsx\n<motion.div\n  drag\n  onDragEnd={\n    (event, info) => console.log(info.point.x, info.point.y)\n  }\n/>\n```\n@public',
        name: 'onDragEnd',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DragHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DragHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void',
        },
      },
      onDragStart: {
        defaultValue: null,
        description: 'Callback function that fires when dragging starts.\n@library ```jsx\nfunction onDragStart(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame drag onDragStart={onDragStart} />\n```\n@motion ```jsx\n<motion.div\n  drag\n  onDragStart={\n    (event, info) => console.log(info.point.x, info.point.y)\n  }\n/>\n```\n@public',
        name: 'onDragStart',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DragHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DragHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void',
        },
      },
      onAnimationStart: {
        defaultValue: null,
        description: 'Callback when animation defined in `animate` begins.\n@library ```jsx\nfunction onStart() {\n  console.log("Animation started")\n}\n\n<Frame animate={{ x: 100 }} onAnimationStart={onStart} />\n```\n@motion ```jsx\nfunction onStart() {\n  console.log("Animation started")\n}\n\n<motion.div animate={{ x: 100 }} onAnimationStart={onStart} />\n```',
        name: 'onAnimationStart',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
          name: 'VisualElementLifecycles',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
            name: 'VisualElementLifecycles',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      inherit: {
        defaultValue: null,
        description: '@public Set to `false` to prevent inheriting variant changes from its parent.',
        name: 'inherit',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'MotionAdvancedProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'MotionAdvancedProps',
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
      initial: {
        defaultValue: null,
        description: 'Properties, variant label or array of variant labels to start in.\n\nSet to `false` to initialise with the values in `animate` (disabling the mount animation)\n@library ```jsx\n// As values\n<Frame initial={{ opacity: 1 }} />\n\n// As variant\n<Frame initial="visible" variants={variants} />\n\n// Multiple variants\n<Frame initial={["visible", "active"]} variants={variants} />\n\n// As false (disable mount animation)\n<Frame initial={false} animate={{ opacity: 0 }} />\n```\n@motion ```jsx\n// As values\n<motion.div initial={{ opacity: 1 }} />\n\n// As variant\n<motion.div initial="visible" variants={variants} />\n\n// Multiple variants\n<motion.div initial={["visible", "active"]} variants={variants} />\n\n// As false (disable mount animation)\n<motion.div initial={false} animate={{ opacity: 0 }} />\n```',
        name: 'initial',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'MotionProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'MotionProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean | MakeCustomValueType<TargetProperties> | VariantLabels',
          value: [
            {
              value: 'string',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'string[]',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'MakeCustomValueType<TargetProperties>',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      variants: {
        defaultValue: null,
        description: "Variants allow you to define animation states and organise them by name. They allow\nyou to control animations throughout a component tree by switching a single `animate` prop.\n\nUsing `transition` options like `delayChildren` and `staggerChildren`, you can orchestrate\nwhen children animations play relative to their parent.\n@library After passing variants to one or more `Frame`'s `variants` prop, these variants\ncan be used in place of values on the `animate`, `initial`, `whileFocus`, `whileTap` and `whileHover` props.\n\n```jsx\nconst variants = {\n  active: {\n    backgroundColor: \"#f00\"\n  },\n  inactive: {\n    backgroundColor: \"#fff\",\n    transition: { duration: 2 }\n  }\n}\n\n<Frame variants={variants} animate=\"active\" />\n```\n@motion After passing variants to one or more `motion` component's `variants` prop, these variants\ncan be used in place of values on the `animate`, `initial`, `whileFocus`, `whileTap` and `whileHover` props.\n\n```jsx\nconst variants = {\n  active: {\n      backgroundColor: \"#f00\"\n  },\n  inactive: {\n    backgroundColor: \"#fff\",\n    transition: { duration: 2 }\n  }\n}\n\n<motion.div variants={variants} animate=\"active\" />\n```",
        name: 'variants',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'AnimationProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'AnimationProps',
          },
        ],
        required: false,
        type: {
          name: 'Variants',
        },
      },
      layout: {
        defaultValue: null,
        description: "If `true`, this component will automatically animate to its new position when\nits layout changes.\n\n```jsx\n<motion.div layout />\n```\n\nThis will perform a layout animation using performant transforms. Part of this technique\ninvolved animating an element's scale. This can introduce visual distortions on children,\n`boxShadow` and `borderRadius`.\n\nTo correct distortion on immediate children, add `layout` to those too.\n\n`boxShadow` and `borderRadius` will automatically be corrected if they are already being\nanimated on this component. Otherwise, set them directly via the `initial` prop.\n\nIf `layout` is set to `\"position\"`, the size of the component will change instantly and\nonly its position will animate.\n@public",
        name: 'layout',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/features/layout/types.d.ts',
          name: 'LayoutProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/features/layout/types.d.ts',
            name: 'LayoutProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean | "position"',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: '"position"',
            },
          ],
        },
      },
      transformTemplate: {
        defaultValue: null,
        description: 'By default, Framer Motion generates a `transform` property with a sensible transform order. `transformTemplate`\ncan be used to create a different order, or to append/preprend the automatically generated `transform` property.\n@library ```jsx\nfunction transformTemplate({ x, rotate }) {\n  return `rotate(${rotate}deg) translateX(${x}px)`\n}\n\n<Frame x={0} rotate={180} transformTemplate={transformTemplate} />\n```\n@motion ```jsx\n<motion.div\n  style={{ x: 0, rotate: 180 }}\n  transformTemplate={\n    ({ x, rotate }) => `rotate(${rotate}deg) translateX(${x}px)`\n  }\n/>\n```\n@param transform - The latest animated transform props.\n@param generatedTransform - The transform string as automatically generated by Framer Motion\n@public',
        name: 'transformTemplate',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'MotionProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'MotionProps',
          },
        ],
        required: false,
        type: {
          name: '(transform: TransformProperties, generatedTransform: string) => string',
        },
      },
      transformValues: {
        defaultValue: null,
        description: 'This allows values to be transformed before being animated or set as styles.\n\nFor instance, this allows custom values in Framer Library like `size` to be converted into `width` and `height`.\nIt also allows us a chance to take a value like `Color` and convert it to an animatable color string.\n\nA few structural typing changes need making before this can be a public property:\n- Allow `Target` values to be appended by user-defined types (delete `CustomStyles` - does `size` throw a type error?)\n- Extract `CustomValueType` as a separate user-defined type (delete `CustomValueType` and animate a `Color` - does this throw a type error?).\n@param values -\n@internal',
        name: 'transformValues',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'MotionProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'MotionProps',
          },
        ],
        required: false,
        type: {
          name: '<V extends ResolvedValues>(values: V) => V',
        },
      },
      exit: {
        defaultValue: null,
        description: "A target to animate to when this component is removed from the tree.\n\nThis component **must** be the first animatable child of an `AnimatePresence` to enable this exit animation.\n\nThis limitation exists because React doesn't allow components to defer unmounting until after\nan animation is complete. Once this limitation is fixed, the `AnimatePresence` component will be unnecessary.\n@library ```jsx\nimport { Frame, AnimatePresence } from 'framer'\n\nexport function MyComponent(props) {\n  return (\n    <AnimatePresence>\n       {props.isVisible && (\n         <Frame\n           initial={{ opacity: 0 }}\n           animate={{ opacity: 1 }}\n           exit={{ opacity: 0 }}\n         />\n       )}\n    </AnimatePresence>\n  )\n}\n```\n@motion ```jsx\nimport { AnimatePresence, motion } from 'framer-motion'\n\nexport const MyComponent = ({ isVisible }) => {\n  return (\n    <AnimatePresence>\n       {isVisible && (\n         <motion.div\n           initial={{ opacity: 0 }}\n           animate={{ opacity: 1 }}\n           exit={{ opacity: 0 }}\n         />\n       )}\n    </AnimatePresence>\n  )\n}\n```",
        name: 'exit',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'AnimationProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'AnimationProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'TargetAndTransition | VariantLabels',
          value: [
            {
              value: 'string',
            },
            {
              value: 'string[]',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'TargetAndTransition',
            },
          ],
        },
      },
      onViewportBoxUpdate: {
        defaultValue: null,
        description: 'A callback that fires whenever the viewport-relative bounding box updates.\n@public',
        name: 'onViewportBoxUpdate',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
          name: 'VisualElementLifecycles',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
            name: 'VisualElementLifecycles',
          },
        ],
        required: false,
        type: {
          name: '(box: AxisBox2D, delta: BoxDelta) => void',
        },
      },
      onBeforeLayoutMeasure: {
        defaultValue: null,
        description: '',
        name: 'onBeforeLayoutMeasure',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
          name: 'VisualElementLifecycles',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
            name: 'VisualElementLifecycles',
          },
        ],
        required: false,
        type: {
          name: '(box: AxisBox2D) => void',
        },
      },
      onLayoutMeasure: {
        defaultValue: null,
        description: '',
        name: 'onLayoutMeasure',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
          name: 'VisualElementLifecycles',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
            name: 'VisualElementLifecycles',
          },
        ],
        required: false,
        type: {
          name: '(box: AxisBox2D, prevBox: AxisBox2D) => void',
        },
      },
      onUpdate: {
        defaultValue: null,
        description: 'Callback with latest motion values, fired max once per frame.\n@library ```jsx\nfunction onUpdate(latest) {\n  console.log(latest.x, latest.opacity)\n}\n\n<Frame animate={{ x: 100, opacity: 0 }} onUpdate={onUpdate} />\n```\n@motion ```jsx\nfunction onUpdate(latest) {\n  console.log(latest.x, latest.opacity)\n}\n\n<motion.div animate={{ x: 100, opacity: 0 }} onUpdate={onUpdate} />\n```',
        name: 'onUpdate',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
          name: 'VisualElementLifecycles',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
            name: 'VisualElementLifecycles',
          },
        ],
        required: false,
        type: {
          name: '(latest: ResolvedValues) => void',
        },
      },
      onAnimationComplete: {
        defaultValue: null,
        description: "Callback when animation defined in `animate` is complete.\n\nThe provided callback will be called the triggering animation definition.\nIf this is a variant, it'll be the variant name, and if a target object\nthen it'll be the target object.\n\nThis way, it's possible to figure out which animation has completed.\n@library ```jsx\nfunction onComplete() {\n  console.log(\"Animation completed\")\n}\n\n<Frame\n  animate={{ x: 100 }}\n  onAnimationComplete={definition => {\n    console.log('Completed animating', definition)\n  }}\n/>\n```\n@motion ```jsx\nfunction onComplete() {\n  console.log(\"Animation completed\")\n}\n\n<motion.div\n  animate={{ x: 100 }}\n  onAnimationComplete={definition => {\n    console.log('Completed animating', definition)\n  }}\n/>\n```",
        name: 'onAnimationComplete',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
          name: 'VisualElementLifecycles',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
            name: 'VisualElementLifecycles',
          },
        ],
        required: false,
        type: {
          name: '(definition: AnimationDefinition) => void',
        },
      },
      onLayoutAnimationComplete: {
        defaultValue: null,
        description: '@internal',
        name: 'onLayoutAnimationComplete',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
          name: 'VisualElementLifecycles',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
            name: 'VisualElementLifecycles',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      onUnmount: {
        defaultValue: null,
        description: '@internal',
        name: 'onUnmount',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
          name: 'VisualElementLifecycles',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/render/utils/lifecycles.d.ts',
            name: 'VisualElementLifecycles',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      onPan: {
        defaultValue: null,
        description: 'Callback function that fires when the pan gesture is recognised on this element.\n\n**Note:** For pan gestures to work correctly with touch input, the element needs\ntouch scrolling to be disabled on either x/y or both axis with the\n[touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action) CSS rule.\n@library ```jsx\nfunction onPan(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame onPan={onPan} />\n```\n@motion ```jsx\nfunction onPan(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<motion.div onPan={onPan} />\n```\n@param event - The originating pointer event.\n@param info - A {@link PanInfo } object containing `x` and `y` values for:\n\n- `point`: Relative to the device or page.\n- `delta`: Distance moved since the last event.\n- `offset`: Offset from the original pan event.\n- `velocity`: Current velocity of the pointer.',
        name: 'onPan',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'PanHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'PanHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void',
        },
      },
      onPanStart: {
        defaultValue: null,
        description: 'Callback function that fires when the pan gesture begins on this element.\n@library ```jsx\nfunction onPanStart(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame onPanStart={onPanStart} />\n```\n@motion ```jsx\nfunction onPanStart(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<motion.div onPanStart={onPanStart} />\n```\n@param event - The originating pointer event.\n@param info - A {@link PanInfo } object containing `x`/`y` values for:\n\n- `point`: Relative to the device or page.\n- `delta`: Distance moved since the last event.\n- `offset`: Offset from the original pan event.\n- `velocity`: Current velocity of the pointer.',
        name: 'onPanStart',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'PanHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'PanHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void',
        },
      },
      onPanSessionStart: {
        defaultValue: null,
        description: 'Callback function that fires when we begin detecting a pan gesture. This\nis analogous to `onMouseStart` or `onTouchStart`.\n@library ```jsx\nfunction onPanSessionStart(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame onPanSessionStart={onPanSessionStart} />\n```\n@motion ```jsx\nfunction onPanSessionStart(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<motion.div onPanSessionStart={onPanSessionStart} />\n```\n@param event - The originating pointer event.\n@param info - An {@link EventInfo } object containing `x`/`y` values for:\n\n- `point`: Relative to the device or page.',
        name: 'onPanSessionStart',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'PanHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'PanHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: EventInfo) => void',
        },
      },
      onPanEnd: {
        defaultValue: null,
        description: 'Callback function that fires when the pan gesture ends on this element.\n@library ```jsx\nfunction onPanEnd(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame onPanEnd={onPanEnd} />\n```\n@motion ```jsx\nfunction onPanEnd(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<motion.div onPanEnd={onPanEnd} />\n```\n@param event - The originating pointer event.\n@param info - A {@link PanInfo } object containing `x`/`y` values for:\n\n- `point`: Relative to the device or page.\n- `delta`: Distance moved since the last event.\n- `offset`: Offset from the original pan event.\n- `velocity`: Current velocity of the pointer.',
        name: 'onPanEnd',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'PanHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'PanHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void',
        },
      },
      onTap: {
        defaultValue: null,
        description: 'Callback when the tap gesture successfully ends on this element.\n@library ```jsx\nfunction onTap(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame onTap={onTap} />\n```\n@motion ```jsx\nfunction onTap(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<motion.div onTap={onTap} />\n```\n@param event - The originating pointer event.\n@param info - An {@link TapInfo } object containing `x` and `y` values for the `point` relative to the device or page.',
        name: 'onTap',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'TapHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'TapHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void',
        },
      },
      onTapStart: {
        defaultValue: null,
        description: 'Callback when the tap gesture starts on this element.\n@library ```jsx\nfunction onTapStart(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame onTapStart={onTapStart} />\n```\n@motion ```jsx\nfunction onTapStart(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<motion.div onTapStart={onTapStart} />\n```\n@param event - The originating pointer event.\n@param info - An {@link TapInfo } object containing `x` and `y` values for the `point` relative to the device or page.',
        name: 'onTapStart',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'TapHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'TapHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void',
        },
      },
      onTapCancel: {
        defaultValue: null,
        description: 'Callback when the tap gesture ends outside this element.\n@library ```jsx\nfunction onTapCancel(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<Frame onTapCancel={onTapCancel} />\n```\n@motion ```jsx\nfunction onTapCancel(event, info) {\n  console.log(info.point.x, info.point.y)\n}\n\n<motion.div onTapCancel={onTapCancel} />\n```\n@param event - The originating pointer event.\n@param info - An {@link TapInfo } object containing `x` and `y` values for the `point` relative to the device or page.',
        name: 'onTapCancel',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'TapHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'TapHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void',
        },
      },
      whileTap: {
        defaultValue: null,
        description: 'Properties or variant label to animate to while the component is pressed.\n@library ```jsx\n<Frame whileTap={{ scale: 0.8 }} />\n```\n@motion ```jsx\n<motion.div whileTap={{ scale: 0.8 }} />\n```',
        name: 'whileTap',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'TapHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'TapHandlers',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'TargetAndTransition | VariantLabels',
          value: [
            {
              value: 'string',
            },
            {
              value: 'string[]',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'TargetAndTransition',
            },
          ],
        },
      },
      whileHover: {
        defaultValue: null,
        description: 'Properties or variant label to animate to while the hover gesture is recognised.\n@library ```jsx\n<Frame whileHover={{ scale: 1.2 }} />\n```\n@motion ```jsx\n<motion.div whileHover={{ scale: 1.2 }} />\n```',
        name: 'whileHover',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'HoverHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'HoverHandlers',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'TargetAndTransition | VariantLabels',
          value: [
            {
              value: 'string',
            },
            {
              value: 'string[]',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'TargetAndTransition',
            },
          ],
        },
      },
      onHoverStart: {
        defaultValue: null,
        description: "Callback function that fires when pointer starts hovering over the component.\n@library ```jsx\nfunction onHoverStart(event) {\n  console.log(\"Hover starts\")\n}\n\n<Frame onHoverStart={onHoverStart} />\n```\n@motion ```jsx\n<motion.div onHoverStart={() => console.log('Hover starts')} />\n```",
        name: 'onHoverStart',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'HoverHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'HoverHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent, info: EventInfo) => void',
        },
      },
      onHoverEnd: {
        defaultValue: null,
        description: 'Callback function that fires when pointer stops hovering over the component.\n@library ```jsx\nfunction onHoverEnd(event) {\n  console.log("Hover ends")\n}\n\n<Frame onHoverEnd={onHoverEnd} />\n```\n@motion ```jsx\n<motion.div onHoverEnd={() => console.log("Hover ends")} />\n```',
        name: 'onHoverEnd',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'HoverHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'HoverHandlers',
          },
        ],
        required: false,
        type: {
          name: '(event: MouseEvent, info: EventInfo) => void',
        },
      },
      whileFocus: {
        defaultValue: null,
        description: 'Properties or variant label to animate to while the focus gesture is recognised.\n@motion ```jsx\n<motion.input whileFocus={{ scale: 1.2 }} />\n```',
        name: 'whileFocus',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
          name: 'FocusHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/types.d.ts',
            name: 'FocusHandlers',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'TargetAndTransition | VariantLabels',
          value: [
            {
              value: 'string',
            },
            {
              value: 'string[]',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'TargetAndTransition',
            },
          ],
        },
      },
      drag: {
        defaultValue: null,
        description: 'Enable dragging for this element. Set to `false` by default.\nSet `true` to drag in both directions.\nSet `"x"` or `"y"` to only drag in a specific direction.\n@library ```jsx\n<Frame drag="x" />\n```\n@motion ```jsx\n<motion.div drag="x" />\n```',
        name: 'drag',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean | "x" | "y"',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: '"x"',
            },
            {
              value: '"y"',
            },
          ],
        },
      },
      whileDrag: {
        defaultValue: null,
        description: 'Properties or variant label to animate to while the drag gesture is recognised.\n\n```jsx\n<motion.div whileDrag={{ scale: 1.2 }} />\n```',
        name: 'whileDrag',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'TargetAndTransition | VariantLabels',
          value: [
            {
              value: 'string',
            },
            {
              value: 'string[]',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'TargetAndTransition',
            },
          ],
        },
      },
      dragDirectionLock: {
        defaultValue: null,
        description: 'If `true`, this will lock dragging to the initially-detected direction. Defaults to `false`.\n@library ```jsx\n<Frame drag={true} dragDirectionLock={true} />\n```\n@motion ```jsx\n<motion.div drag dragDirectionLock />\n```',
        name: 'dragDirectionLock',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
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
      dragPropagation: {
        defaultValue: null,
        description: 'Allows drag gesture propagation to child components. Set to `false` by\ndefault.\n@library ```jsx\n<Frame drag="x" dragPropagation={true} />\n```\n@motion ```jsx\n<motion.div drag="x" dragPropagation />\n```',
        name: 'dragPropagation',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
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
      dragConstraints: {
        defaultValue: null,
        description: "Applies constraints on the permitted draggable area.\n\nIt can accept an object of optional `top`, `left`, `right`, and `bottom` values, measured in pixels.\nThis will define a distance the named edge of the draggable component.\n\nAlternatively, it can accept a `ref` to another component created with React's `useRef` hook.\nThis `ref` should be passed both to the draggable component's `dragConstraints` prop, and the `ref`\nof the component you want to use as constraints.\n@library ```jsx\n// In pixels\n<Frame\n  drag=\"x\"\n  dragConstraints={{ left: 0, right: 300 }}\n/>\n\n// As a ref to another component\nfunction MyComponent() {\n  const constraintsRef = useRef(null)\n\n  return (\n     <Frame ref={constraintsRef} width={400} height={400}>\n         <Frame drag dragConstraints={constraintsRef} />\n     </Frame>\n  )\n}\n```\n@motion ```jsx\n// In pixels\n<motion.div\n  drag=\"x\"\n  dragConstraints={{ left: 0, right: 300 }}\n/>\n\n// As a ref to another component\nconst MyComponent = () => {\n  const constraintsRef = useRef(null)\n\n  return (\n     <motion.div ref={constraintsRef}>\n         <motion.div drag dragConstraints={constraintsRef} />\n     </motion.div>\n  )\n}\n```",
        name: 'dragConstraints',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'false | Partial<BoundingBox2D> | RefObject<Element>',
          value: [
            {
              value: 'false',
            },
            {
              value: 'Partial<BoundingBox2D>',
              description: '',
              fullComment: '',
              tags: {},
            },
            {
              value: 'RefObject<Element>',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      dragElastic: {
        defaultValue: null,
        description: 'The degree of movement allowed outside constraints. 0 = no movement, 1 =\nfull movement.\n\nSet to `0.5` by default. Can also be set as `false` to disable movement.\n\nBy passing an object of `top`/`right`/`bottom`/`left`, individual values can be set\nper constraint. Any missing values will be set to `0`.\n@library ```jsx\n<Frame\n  drag={true}\n  dragConstraints={{ left: 0, right: 300 }}\n  dragElastic={0.2}\n/>\n```\n@motion ```jsx\n<motion.div\n  drag\n  dragConstraints={{ left: 0, right: 300 }}\n  dragElastic={0.2}\n/>\n```',
        name: 'dragElastic',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'DragElastic',
          value: [
            {
              value: 'number',
            },
            {
              value: 'false',
            },
            {
              value: 'true',
            },
            {
              value: 'Partial<BoundingBox2D>',
              description: '',
              fullComment: '',
              tags: {},
            },
          ],
        },
      },
      dragMomentum: {
        defaultValue: null,
        description: 'Apply momentum from the pan gesture to the component when dragging\nfinishes. Set to `true` by default.\n@library ```jsx\n<Frame\n  drag={true}\n  dragConstraints={{ left: 0, right: 300 }}\n  dragMomentum={false}\n/>\n```\n@motion ```jsx\n<motion.div\n  drag\n  dragConstraints={{ left: 0, right: 300 }}\n  dragMomentum={false}\n/>\n```',
        name: 'dragMomentum',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
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
      dragTransition: {
        defaultValue: null,
        description: 'Allows you to change dragging inertia parameters.\nWhen releasing a draggable Frame, an animation with type `inertia` starts. The animation is based on your dragging velocity. This property allows you to customize it.\nSee {@link https://framer.com/api/animation/#inertia | Inertia} for all properties you can use.\n@library ```jsx\n<Frame\n  drag={true}\n  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}\n/>\n```\n@motion ```jsx\n<motion.div\n  drag\n  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}\n/>\n```',
        name: 'dragTransition',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'Partial<Omit<Inertia, "type" | "velocity">>',
        },
      },
      dragControls: {
        defaultValue: null,
        description: "Usually, dragging is initiated by pressing down on a component and moving it. For some\nuse-cases, for instance clicking at an arbitrary point on a video scrubber, we\nmight want to initiate dragging from a different component than the draggable one.\n\nBy creating a `dragControls` using the `useDragControls` hook, we can pass this into\nthe draggable component's `dragControls` prop. It exposes a `start` method\nthat can start dragging from pointer events on other components.\n@library ```jsx\nconst dragControls = useDragControls()\n\nfunction startDrag(event) {\n  dragControls.start(event, { snapToCursor: true })\n}\n\nreturn (\n  <>\n    <Frame onTapStart={startDrag} />\n    <Frame drag=\"x\" dragControls={dragControls} />\n  </>\n)\n```\n@motion ```jsx\nconst dragControls = useDragControls()\n\nfunction startDrag(event) {\n  dragControls.start(event, { snapToCursor: true })\n}\n\nreturn (\n  <>\n    <div onPointerDown={startDrag} />\n    <motion.div drag=\"x\" dragControls={dragControls} />\n  </>\n)\n```",
        name: 'dragControls',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'DragControls',
        },
      },
      dragListener: {
        defaultValue: null,
        description: 'By default, if `drag` is defined on a component then an event listener will be attached\nto automatically initiate dragging when a user presses down on it.\n\nBy setting `dragListener` to `false`, this event listener will not be created.\n@library ```jsx\nconst dragControls = useDragControls()\n\nfunction startDrag(event) {\n  dragControls.start(event, { snapToCursor: true })\n}\n\nreturn (\n  <>\n    <Frame onTapStart={startDrag} />\n    <Frame\n      drag="x"\n      dragControls={dragControls}\n      dragListener={false}\n    />\n  </>\n)\n```\n@motion ```jsx\nconst dragControls = useDragControls()\n\nfunction startDrag(event) {\n  dragControls.start(event, { snapToCursor: true })\n}\n\nreturn (\n  <>\n    <div onPointerDown={startDrag} />\n    <motion.div\n      drag="x"\n      dragControls={dragControls}\n      dragListener={false}\n    />\n  </>\n)\n```',
        name: 'dragListener',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
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
      onMeasureDragConstraints: {
        defaultValue: null,
        description: 'If `dragConstraints` is set to a React ref, this callback will call with the measured drag constraints.\n@public',
        name: 'onMeasureDragConstraints',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: '(constraints: BoundingBox2D) => void | BoundingBox2D',
        },
      },
      _dragX: {
        defaultValue: null,
        description: 'Usually, dragging uses the layout project engine, and applies transforms to the underlying VisualElement.\nPassing MotionValues as _dragX and _dragY instead applies drag updates to these motion values.\nThis allows you to manually control how updates from a drag gesture on an element is applied.\n@public',
        name: '_dragX',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'MotionValue<number>',
        },
      },
      _dragY: {
        defaultValue: null,
        description: 'Usually, dragging uses the layout project engine, and applies transforms to the underlying VisualElement.\nPassing MotionValues as _dragX and _dragY instead applies drag updates to these motion values.\nThis allows you to manually control how updates from a drag gesture on an element is applied.\n@public',
        name: '_dragY',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DraggableProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DraggableProps',
          },
        ],
        required: false,
        type: {
          name: 'MotionValue<number>',
        },
      },
      onDirectionLock: {
        defaultValue: null,
        description: 'Callback function that fires a drag direction is determined.\n@library ```jsx\nfunction onDirectionLock(axis) {\n  console.log(axis)\n}\n\n<Frame\n  drag\n  dragDirectionLock\n  onDirectionLock={onDirectionLock}\n/>\n```\n@motion ```jsx\n<motion.div\n  drag\n  dragDirectionLock\n  onDirectionLock={axis => console.log(axis)}\n/>\n```\n@public',
        name: 'onDirectionLock',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DragHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DragHandlers',
          },
        ],
        required: false,
        type: {
          name: '(axis: "x" | "y") => void',
        },
      },
      onDragTransitionEnd: {
        defaultValue: null,
        description: "Callback function that fires when drag momentum/bounce transition finishes.\n@library ```jsx\nfunction onDragTransitionEnd() {\n  console.log('drag transition has ended')\n}\n\n<Frame\n  drag\n  onDragTransitionEnd={onDragTransitionEnd}\n/>\n```\n@motion ```jsx\n<motion.div\n  drag\n  onDragTransitionEnd={() => console.log('Drag transition complete')}\n/>\n```\n@public",
        name: 'onDragTransitionEnd',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
          name: 'DragHandlers',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/gestures/drag/types.d.ts',
            name: 'DragHandlers',
          },
        ],
        required: false,
        type: {
          name: '() => void',
        },
      },
      layoutId: {
        defaultValue: null,
        description: "Enable shared layout transitions between components for children of `AnimateSharedLayout`.\n\nWhen a component with a layoutId is removed from the React tree, and then\nadded elsewhere, it will visually animate from the previous component's bounding box\nand its latest animated values.\n\n```jsx\n<AnimateSharedLayout>\n  {items.map(item => (\n     <motion.li layout>\n        {item.name}\n        {item.isSelected && <motion.div layoutId=\"underline\" />}\n     </motion.li>\n  ))}\n</AnimateSharedLayout>\n```\n\nIf the previous component remains in the tree it will either get hidden immediately or,\nif `type=\"crossfade\"` is set on `AnimateSharedLayout`, it will crossfade to the new component.\n@public",
        name: 'layoutId',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/features/layout/types.d.ts',
          name: 'LayoutProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/features/layout/types.d.ts',
            name: 'LayoutProps',
          },
        ],
        required: false,
        type: {
          name: 'string',
        },
      },
      _layoutResetTransform: {
        defaultValue: null,
        description: "This enables a component's transform to be reset during layout\nmeasurements. This is intended to be used independently of the\nlayout prop, for instance if a parent component's transform is\ninterfering with the measurement of a child.\n@internal",
        name: '_layoutResetTransform',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/features/layout/types.d.ts',
          name: 'LayoutProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/features/layout/types.d.ts',
            name: 'LayoutProps',
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
      custom: {
        defaultValue: null,
        description: 'Custom data to use to resolve dynamic variants differently for each animating component.\n@library ```jsx\nconst variants = {\n  visible: (custom) => ({\n    opacity: 1,\n    transition: { delay: custom * 0.2 }\n  })\n}\n\n<Frame custom={0} animate="visible" variants={variants} />\n<Frame custom={1} animate="visible" variants={variants} />\n<Frame custom={2} animate="visible" variants={variants} />\n```\n@motion ```jsx\nconst variants = {\n  visible: (custom) => ({\n    opacity: 1,\n    transition: { delay: custom * 0.2 }\n  })\n}\n\n<motion.div custom={0} animate="visible" variants={variants} />\n<motion.div custom={1} animate="visible" variants={variants} />\n<motion.div custom={2} animate="visible" variants={variants} />\n```\n@public',
        name: 'custom',
        parent: {
          fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
          name: 'MotionAdvancedProps',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/framer-motion/types/motion/types.d.ts',
            name: 'MotionAdvancedProps',
          },
        ],
        required: false,
        type: {
          name: 'any',
        },
      },
      reverse: {
        defaultValue: {
          value: 'true',
        },
        description: 'If `true`, the element will transition back to exit state',
        name: 'reverse',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/transition/dist/scale-fade.d.ts',
          name: 'ScaleFadeOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/transition/dist/scale-fade.d.ts',
            name: 'ScaleFadeOptions',
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
      initialScale: {
        defaultValue: {
          value: '0.95',
        },
        description: 'The initial scale of the element',
        name: 'initialScale',
        parent: {
          fileName: 'northlight/node_modules/@chakra-ui/transition/dist/scale-fade.d.ts',
          name: 'ScaleFadeOptions',
        },
        declarations: [
          {
            fileName: 'northlight/node_modules/@chakra-ui/transition/dist/scale-fade.d.ts',
            name: 'ScaleFadeOptions',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
    },
  } }
  />
)

export default ScaleFadePage