/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const useToastPage = () => (
  <ReferencePage data={{"tags":{"see":"Toast *\n{@link https://northlight.dev/reference/use-toast}","example":"(?\n() => {\nconst toast = useToast()\nconst handleClick = () => {\ntoast({title: 'Success', description: 'Your file changes have been saved' })\n}\nreturn (\n<Button onClick={handleClick} variant=\"success\">Save</Button>\n)}\n?)"},"filePath":"/Users/orestisrodriguez/Documents/Projects/@mediatool/northlight/framework/lib/components/toast/use-toast.tsx","description":"This hook returns a toast function that when called will popup a toast","displayName":"useToast","methods":[],"props":{"variant":{"defaultValue":null,"description":"","name":"variant","parent":{"fileName":"northlight/framework/lib/components/toast/types.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/framework/lib/components/toast/types.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"enum","raw":"AlertVariants","value":[{"value":"\"success\""},{"value":"\"warning\""},{"value":"\"error\""},{"value":"\"info\""}]}},"title":{"defaultValue":null,"description":"The title of the toast","name":"title","parent":{"fileName":"northlight/framework/lib/components/toast/types.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/framework/lib/components/toast/types.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"string"}},"description":{"defaultValue":null,"description":"The description of the toast","name":"description","parent":{"fileName":"northlight/framework/lib/components/toast/types.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/framework/lib/components/toast/types.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"string"}},"position":{"defaultValue":{"value":"\"bottom\""},"description":"The placement of the toast","name":"position","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"enum","raw":"ToastPosition","value":[{"value":"\"top\""},{"value":"\"bottom\""},{"value":"\"top-left\""},{"value":"\"top-right\""},{"value":"\"bottom-left\""},{"value":"\"bottom-right\""}]}},"duration":{"defaultValue":{"value":"5000 ( = 5000ms )"},"description":"The delay before the toast hides (in milliseconds)\nIf set to `null`, toast will never dismiss.","name":"duration","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"number"}},"render":{"defaultValue":null,"description":"Render a component toast component.\nAny component passed will receive 2 props: `id` and `onClose`.","name":"render","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"(props: RenderProps) => ReactNode"}},"isClosable":{"defaultValue":{"value":"false"},"description":"If `true`, toast will show a close button","name":"isClosable","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"status":{"defaultValue":null,"description":"The status of the toast.","name":"status","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"enum","raw":"\"success\" | \"warning\" | \"error\" | \"info\" | \"loading\"","value":[{"value":"\"success\""},{"value":"\"warning\""},{"value":"\"error\""},{"value":"\"info\""},{"value":"\"loading\""}]}},"icon":{"defaultValue":null,"description":"A custom icon that will be displayed by the toast.","name":"icon","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"enum","raw":"ReactNode","value":[{"value":"string"},{"value":"number"},{"value":"false"},{"value":"true"},{"value":"ReactElement<any, string | JSXElementConstructor<any>>","description":"","fullComment":"","tags":{}},{"value":"ReactFragment","description":"","fullComment":"","tags":{}},{"value":"ReactPortal","description":"","fullComment":"","tags":{}}]}},"id":{"defaultValue":null,"description":"The `id` of the toast.\n\nMostly used when you need to prevent duplicate.\nBy default, we generate a unique `id` for each toast","name":"id","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"enum","raw":"ToastId","value":[{"value":"string"},{"value":"number"}]}},"onCloseComplete":{"defaultValue":null,"description":"Callback function to run side effects after the toast has closed.","name":"onCloseComplete","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"() => void"}},"containerStyle":{"defaultValue":null,"description":"Optional style overrides for the container wrapping the toast component.","name":"containerStyle","parent":{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/toast/dist/toast.types-76829e6b.d.ts","name":"UseToastOptions"}],"required":false,"type":{"name":"StyleProps"}},"size":{"defaultValue":null,"description":"","name":"size","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"ResponsiveValue<string & {}>","value":[{"value":"string & {}"},{"value":"ResponsiveArray<string & {}>","description":"","fullComment":"","tags":{}},{"value":"Partial<Record<string | (string & {}), string & {}>>","description":"","fullComment":"","tags":{}}]}},"colorScheme":{"defaultValue":null,"description":"","name":"colorScheme","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"(string & {}) | \"blue\" | \"cyan\" | \"gray\" | \"green\" | \"orange\" | \"pink\" | \"purple\" | \"red\" | \"teal\" | \"yellow\" | \"whiteAlpha\" | \"blackAlpha\" | \"linkedin\" | \"facebook\" | \"messenger\" | \"whatsapp\" | \"twitter\" | \"telegram\"","value":[{"value":"string & {}"},{"value":"\"blue\""},{"value":"\"cyan\""},{"value":"\"gray\""},{"value":"\"green\""},{"value":"\"orange\""},{"value":"\"pink\""},{"value":"\"purple\""},{"value":"\"red\""},{"value":"\"teal\""},{"value":"\"yellow\""},{"value":"\"whiteAlpha\""},{"value":"\"blackAlpha\""},{"value":"\"linkedin\""},{"value":"\"facebook\""},{"value":"\"messenger\""},{"value":"\"whatsapp\""},{"value":"\"twitter\""},{"value":"\"telegram\""}]}},"orientation":{"defaultValue":null,"description":"","name":"orientation","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"\"horizontal\" | \"vertical\"","value":[{"value":"\"horizontal\""},{"value":"\"vertical\""}]}},"styleConfig":{"defaultValue":null,"description":"","name":"styleConfig","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"Record<string, any>"}}}}} />
);

export default useToastPage