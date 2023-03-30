/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const CheckboxPage = () => (
  <ReferencePage data={{"tags":{"see":"CheckboxField *\n{@link https://northlight.dev/reference/checkbox}","example":"(Example)\nMainly used for forms, however this component is controlled by\na value prop and an onChange callback\n\n(?\n+\nconst MyForm = () => {\nconst [ isVegan, setIsVegan ] = useState(false)\n\nreturn (\n<Stack p=\"2\">\n<Label size=\"sm\" htmlFor=\"vegan-checkbox\">Are you vegan</Label>\n<Checkbox name=\"vegan-checkbox\" onChange={() => setIsVegan((prev) => !prev)} value={isVegan} />\n</Stack>\n\n)\n}\n\nrender(<MyForm />)\n\n?)"},"filePath":"/Users/sebastian.delgado/Documents/Programmering/Mediatool/northlight/framework/lib/components/checkbox/checkbox.tsx","description":"","displayName":"Checkbox","methods":[],"props":{"onChange":{"defaultValue":null,"description":"The callback invoked when the checked state of the `Checkbox` changes.","name":"onChange","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxProps"}],"required":false,"type":{"name":"(e: ChangeEvent<HTMLInputElement>) => void"}},"value":{"defaultValue":null,"description":"","name":"value","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"variant":{"defaultValue":{"value":"default"},"description":"","name":"variant","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxProps"}],"required":false,"type":{"name":"enum","raw":"CheckboxVariants","value":[{"value":"\"rounded\""},{"value":"\"default\""}]}},"id":{"defaultValue":null,"description":"id assigned to input","name":"id","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"tabIndex":{"defaultValue":null,"description":"The tab-index property of the underlying input element.","name":"tabIndex","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"number"}},"aria-describedby":{"defaultValue":null,"description":"","name":"aria-describedby","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"aria-invalid":{"defaultValue":null,"description":"","name":"aria-invalid","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"true"}},"aria-label":{"defaultValue":null,"description":"Defines the string that labels the checkbox element.","name":"aria-label","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"aria-labelledby":{"defaultValue":null,"description":"Refers to the `id` of the element that labels the checkbox element.","name":"aria-labelledby","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"onFocus":{"defaultValue":null,"description":"The callback invoked when the checkbox is focused","name":"onFocus","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"(event: FocusEvent<HTMLInputElement, Element>) => void"}},"name":{"defaultValue":null,"description":"The name of the input field in a checkbox\n(Useful for form submission).","name":"name","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"isDisabled":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox will be disabled","name":"isDisabled","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isChecked":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox will be checked.\nYou'll need to pass `onChange` to update its value (since it is now controlled)","name":"isChecked","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isIndeterminate":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox will be indeterminate.\nThis only affects the icon shown inside checkbox\nand does not modify the isChecked property.","name":"isIndeterminate","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isFocusable":{"defaultValue":{"value":"false"},"description":"If `true` and `isDisabled` is passed, the checkbox will\nremain tabbable but not interactive","name":"isFocusable","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isReadOnly":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox will be readonly","name":"isReadOnly","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isInvalid":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox is marked as invalid.\nChanges style of unchecked state.","name":"isInvalid","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isRequired":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox input is marked as required,\nand `required` attribute will be added","name":"isRequired","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}}}}} />
);

export default CheckboxPage
