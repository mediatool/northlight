/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const ButtonPage = () => (
  <ReferencePage data={{"tags":{"see":"{@link https://northlight.dev/reference/button}","example":"(Example)\n(?\n+const variants = ['link', 'success', 'default', 'danger', 'brand', 'ghost']\n\nconst ExampleButton = () => {\nconst [currentVariant, setCurrentVariant ] = useState(0)\nconst [ isLoading, setIsLoading ] = useState(false)\n\nconst handleClick = () => {\nsetIsLoading(true)\nsetTimeout(() => {\nsetCurrentVariant((prev) => prev === 5 ? 0 : prev + 1)\nsetIsLoading(false)\n}, 400)\n\n}\n\nreturn (\n<Button variant={variants[currentVariant]}\nisLoading={isLoading} onClick={handleClick} loadingText=\"Saving...\">\nSave changes\n</Button>\n)\n\n}\n\nrender(<ExampleButton/>)\n?)"},"filePath":"lib/components/button/button.tsx","description":"","displayName":"Button","methods":[],"props":{"variant":{"defaultValue":{"value":"default"},"description":"","name":"variant","parent":{"fileName":"framework/lib/components/button/types.ts","name":"ButtonProps"},"declarations":[{"fileName":"framework/lib/components/button/types.ts","name":"ButtonProps"}],"required":false,"type":{"name":"enum","raw":"ButtonVariants","value":[{"value":"\"link\""},{"value":"\"default\""},{"value":"\"danger\""},{"value":"\"success\""},{"value":"\"brand\""},{"value":"\"ghost\""}]}},"isLoading":{"defaultValue":{"value":"false"},"description":"If `true`, the button will show a spinner.","name":"isLoading","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isActive":{"defaultValue":{"value":"false"},"description":"If `true`, the button will be styled in its active state.","name":"isActive","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isDisabled":{"defaultValue":{"value":"false"},"description":"If `true`, the button will be disabled.","name":"isDisabled","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"loadingText":{"defaultValue":null,"description":"The label to show in the button when `isLoading` is true\nIf no text is passed, it only shows the spinner","name":"loadingText","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"string"}},"leftIcon":{"defaultValue":null,"description":"If added, the button will show an icon before the button's label.","name":"leftIcon","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"React.ReactElement"}},"rightIcon":{"defaultValue":null,"description":"If added, the button will show an icon after the button's label.","name":"rightIcon","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"React.ReactElement"}},"iconSpacing":{"defaultValue":null,"description":"The space between the button icon and label.","name":"iconSpacing","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"SystemProps[\"marginRight\"]"}},"spinner":{"defaultValue":null,"description":"Replace the spinner component when `isLoading` is set to `true`","name":"spinner","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"React.ReactElement"}},"spinnerPlacement":{"defaultValue":{"value":"\"start\""},"description":"It determines the placement of the spinner when isLoading is true","name":"spinnerPlacement","parent":{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/button/dist/button-types.d.ts","name":"ButtonOptions"}],"required":false,"type":{"name":"enum","raw":"\"end\" | \"start\"","value":[{"value":"\"end\""},{"value":"\"start\""}]}},"size":{"defaultValue":null,"description":"","name":"size","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"ResponsiveValue<(string & {}) | \"sm\" | \"md\" | \"lg\" | \"xs\">","value":[{"value":"string & {}"},{"value":"\"sm\""},{"value":"\"md\""},{"value":"\"lg\""},{"value":"\"xs\""},{"value":"ResponsiveArray<(string & {}) | \"sm\" | \"md\" | \"lg\" | \"xs\">","description":"","fullComment":"","tags":{}},{"value":"Partial<Record<string | (string & {}), (string & {}) | \"sm\" | \"md\" | \"lg\" | \"xs\">>","description":"","fullComment":"","tags":{}}]}},"colorScheme":{"defaultValue":null,"description":"","name":"colorScheme","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"(string & {}) | \"blue\" | \"cyan\" | \"gray\" | \"green\" | \"orange\" | \"pink\" | \"purple\" | \"red\" | \"teal\" | \"yellow\" | \"whiteAlpha\" | \"blackAlpha\" | \"linkedin\" | \"facebook\" | \"messenger\" | \"whatsapp\" | \"twitter\" | \"telegram\"","value":[{"value":"string & {}"},{"value":"\"blue\""},{"value":"\"cyan\""},{"value":"\"gray\""},{"value":"\"green\""},{"value":"\"orange\""},{"value":"\"pink\""},{"value":"\"purple\""},{"value":"\"red\""},{"value":"\"teal\""},{"value":"\"yellow\""},{"value":"\"whiteAlpha\""},{"value":"\"blackAlpha\""},{"value":"\"linkedin\""},{"value":"\"facebook\""},{"value":"\"messenger\""},{"value":"\"whatsapp\""},{"value":"\"twitter\""},{"value":"\"telegram\""}]}},"orientation":{"defaultValue":null,"description":"","name":"orientation","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"enum","raw":"\"horizontal\" | \"vertical\"","value":[{"value":"\"horizontal\""},{"value":"\"vertical\""}]}},"styleConfig":{"defaultValue":null,"description":"","name":"styleConfig","parent":{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/styled-system/dist/index.d.ts","name":"ThemingProps"}],"required":false,"type":{"name":"Record<string, any>"}}}}} />
);

export default ButtonPage
