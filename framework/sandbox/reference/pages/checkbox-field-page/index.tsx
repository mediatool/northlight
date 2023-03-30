/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const CheckboxFieldPage = () => (
  <ReferencePage data={{"tags":{"see":"Checkbox *\n{@link https://northlight.dev/reference/checkbox-field}"},"filePath":"lib/components/checkbox/checkbox-field.tsx","description":"The checkbox component wrapped in a <Field />\n/**\nThe checkbox component wrapped in a <Field />\nmeant to be used only inside <Form />","displayName":"CheckboxField","methods":[],"props":{"name":{"defaultValue":null,"description":"The name of the input field in a checkbox\n(Useful for form submission).","name":"name","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"}],"required":true,"type":{"name":"string"}},"label":{"defaultValue":null,"description":"","name":"label","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"}],"required":true,"type":{"name":"string"}},"validate":{"defaultValue":null,"description":"","name":"validate","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"}],"required":false,"type":{"name":"enum","raw":"RegisterOptions<FieldValues, string>","value":[{"value":"Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }"},{"value":"Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }"},{"value":"Partial<{ required: string | ValidationRule<boolean>; min: ValidationRule<string | number>; max: ValidationRule<string | number>; ... 9 more ...; deps: string | string[]; }> & { ...; }"}]}},"isRequired":{"defaultValue":null,"description":"If `true`, the checkbox input is marked as required,\nand `required` attribute will be added","name":"isRequired","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"variant":{"defaultValue":null,"description":"","name":"variant","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"}],"required":false,"type":{"name":"enum","raw":"CheckboxVariants","value":[{"value":"\"rounded\""},{"value":"\"default\""}]}},"direction":{"defaultValue":{"value":"row"},"description":"","name":"direction","parent":{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"},"declarations":[{"fileName":"framework/lib/components/checkbox/types.ts","name":"CheckboxFieldProps"}],"required":false,"type":{"name":"enum","raw":"StackDirection","value":[{"value":"\"row\""},{"value":"\"column\""},{"value":"\"row-reverse\""},{"value":"\"column-reverse\""},{"value":"ResponsiveArray<\"row\" | \"column\" | \"row-reverse\" | \"column-reverse\">","description":"","fullComment":"","tags":{}},{"value":"Partial<Record<string | (string & {}), \"row\" | \"column\" | \"row-reverse\" | \"column-reverse\">>","description":"","fullComment":"","tags":{}}]}},"isChecked":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox will be checked.\nYou'll need to pass `onChange` to update its value (since it is now controlled)","name":"isChecked","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isIndeterminate":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox will be indeterminate.\nThis only affects the icon shown inside checkbox\nand does not modify the isChecked property.","name":"isIndeterminate","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isDisabled":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox will be disabled","name":"isDisabled","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isFocusable":{"defaultValue":{"value":"false"},"description":"If `true` and `isDisabled` is passed, the checkbox will\nremain tabbable but not interactive","name":"isFocusable","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isReadOnly":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox will be readonly","name":"isReadOnly","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"isInvalid":{"defaultValue":{"value":"false"},"description":"If `true`, the checkbox is marked as invalid.\nChanges style of unchecked state.","name":"isInvalid","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"onChange":{"defaultValue":null,"description":"The callback invoked when the checked state of the `Checkbox` changes.","name":"onChange","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"(event: ChangeEvent<HTMLInputElement>) => void"}},"onFocus":{"defaultValue":null,"description":"The callback invoked when the checkbox is focused","name":"onFocus","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"(event: FocusEvent<HTMLInputElement, Element>) => void"}},"value":{"defaultValue":null,"description":"The value to be used in the checkbox input.\nThis is the value that will be returned on form submission.","name":"value","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"enum","raw":"string | number","value":[{"value":"string"},{"value":"number"}]}},"id":{"defaultValue":null,"description":"id assigned to input","name":"id","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"aria-label":{"defaultValue":null,"description":"Defines the string that labels the checkbox element.","name":"aria-label","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"aria-labelledby":{"defaultValue":null,"description":"Refers to the `id` of the element that labels the checkbox element.","name":"aria-labelledby","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"aria-invalid":{"defaultValue":null,"description":"","name":"aria-invalid","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"true"}},"aria-describedby":{"defaultValue":null,"description":"","name":"aria-describedby","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"string"}},"tabIndex":{"defaultValue":null,"description":"The tab-index property of the underlying input element.","name":"tabIndex","parent":{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/checkbox/dist/checkbox-types-85aeb1f7.d.ts","name":"UseCheckboxProps"}],"required":false,"type":{"name":"number"}}}}} />
);

export default CheckboxFieldPage
