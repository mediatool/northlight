/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const AccordionPage = () => (
  <ReferencePage data={{"tags":{"see":"{@link https ::/northlight.dev/reference/accordion}","example":"(?\n<Accordion>\n<AccordionItem>\n <H2>\n   <AccordionButton>\n     <Box as=\"span\" flex='1' textAlign='left'>\n       Section 1 title\n     </Box>\n     <AccordionIcon />\n   </AccordionButton>\n </H2>\n <AccordionPanel pb={4}>\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n   commodo consequat.\n </AccordionPanel>\n</AccordionItem>\n\n<AccordionItem>\n <H2>\n   <AccordionButton>\n     <Box as=\"span\" flex='1' textAlign='left'>\n       Section 2 title\n     </Box>\n     <AccordionIcon />\n   </AccordionButton>\n </H2>\n <AccordionPanel pb={4}>\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n   commodo consequat.\n </AccordionPanel>\n</AccordionItem>\n</Accordion>\n?)"},"filePath":"lib/components/accordion/accordion.tsx","description":"Context provider for accordion","displayName":"Accordion","methods":[],"props":{"reduceMotion":{"defaultValue":{"value":"false"},"description":"If `true`, height animation and transitions will be disabled.","name":"reduceMotion","parent":{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/accordion.d.ts","name":"AccordionProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/accordion.d.ts","name":"AccordionProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"allowMultiple":{"defaultValue":{"value":"false"},"description":"If `true`, multiple accordion items can be expanded at once.","name":"allowMultiple","parent":{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"allowToggle":{"defaultValue":{"value":"false"},"description":"If `true`, any expanded accordion item can be collapsed again.","name":"allowToggle","parent":{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"}],"required":false,"type":{"name":"enum","raw":"boolean","value":[{"value":"false"},{"value":"true"}]}},"index":{"defaultValue":null,"description":"The index(es) of the expanded accordion item","name":"index","parent":{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"}],"required":false,"type":{"name":"enum","raw":"ExpandedIndex","value":[{"value":"number"},{"value":"number[]","description":"","fullComment":"","tags":{}}]}},"defaultIndex":{"defaultValue":null,"description":"The initial index(es) of the expanded accordion item","name":"defaultIndex","parent":{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"}],"required":false,"type":{"name":"enum","raw":"ExpandedIndex","value":[{"value":"number"},{"value":"number[]","description":"","fullComment":"","tags":{}}]}},"onChange":{"defaultValue":null,"description":"The callback invoked when accordion items are expanded or collapsed.","name":"onChange","parent":{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"},"declarations":[{"fileName":"northlight/node_modules/@chakra-ui/accordion/dist/use-accordion.d.ts","name":"UseAccordionProps"}],"required":false,"type":{"name":"(expandedIndex: ExpandedIndex) => void"}}}}} />
);

export default AccordionPage
