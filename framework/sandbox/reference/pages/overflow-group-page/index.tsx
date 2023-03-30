/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const OverflowGroupPage = () => (
  <ReferencePage data={{"tags":{"see":"{@link https://northlight.dev/reference/overflow-group}","example":"(?\n+\n\nconst CustomSlider = ({ onChange }) => (\n<Slider min={ 100 } max={ 300 } step={ 1 } onChange={ onChange }>\n <SliderTrack>\n   <SliderFilledTrack />\n </SliderTrack>\n <SliderThumb />\n</Slider>\n)\n\n\nconst arrayWithLength = (n) => {\nlet buffer = []\nfor(let i = 0; i < n; i++) {\n buffer.push(i)\n}\nreturn buffer\n}\nconst MyComponent =  () => {\n  const [ n, setN ] = useState(5)\nconst [ max, setMax ] = useState(10)\nconst [ width, setWidth ] = useState(200)\nconst [ height, setHeight ] = useState(200)\nconst { containerRef, rect } = useOverflowGroup()\nconst [ nbrRemainingItems, setNbrRemainingItems ] = useState(0)\nreturn (\n  <Stack mb={ 4 } spacing={ 4 } w=\"40%\">\n       <Stack h=\"300px\">\n         <Wrap\n           w={ width }\n           h={ height }\n           ref={ containerRef }\n           borderWidth=\"2px\"\n           borderColor=\"gray.200\"\n           borderStyle=\"solid\"\n           p=\"2\"\n           borderRadius=\"md\"\n         >\n           <OverflowGroup\n             max={ max }\n             rect={ rect }\n             onChange={ setNbrRemainingItems }\n           >\n             { arrayWithLength(n).map((i) => (\n               <Badge key={ i } h=\"max-content\">\n                 Item { i }\n               </Badge>\n             )) }\n           </OverflowGroup>\n           { nbrRemainingItems > 0 && (\n             <Tag w=\"fit-content\">+{ nbrRemainingItems }</Tag>\n           ) }\n         </Wrap>\n       </Stack>\n       <Stack bgColor=\"gray.50\" p=\"2\" borderRadius=\"md\">\n         <HStack>\n           <Label>Height</Label>\n           <CustomSlider onChange={ setHeight } />\n         </HStack>\n         <HStack>\n           <Label>Width</Label>\n           <CustomSlider onChange={ setWidth } />\n         </HStack>\n         <HStack>\n           <Label>Number of items </Label>\n           <NumberInput onChange={ (v) => setN(Number(v)) } value={ n } />\n         </HStack>\n         <HStack>\n           <Label>Render max </Label>\n           <NumberInput onChange={ (v) => setMax(Number(v)) } value={ max } />\n         </HStack>\n       </Stack>\n     </Stack>\n)}\nrender(<MyComponent/>)\n?)\n<br />\nThe overflow group requires either a max prop for a set limit, or a rect prop,\nfor a dynamic, responsive layouts. The rect prop can be received via the useOverflowGroup hook,\nalong with a containerRef that needs to be set on the wrapper around the overflow group.\n<br />\n<br />\nThe overflow group is ambiguous in the styling of the children and does not pose any premade layout;\ninstead the wrapper parent container determines the layout.\nOne could for example use a <Stack /> <HStack /> or <Grid> and all would work.\nThe overflow group only checks if the children don't fit within the height/width\nof it's container via the containerRef."},"filePath":"lib/components/overflow-group/overflow-group.tsx","description":"Util wrapper for lists by only rendering as many items as fit per the specification","displayName":"OverflowGroup","methods":[],"props":{"childrenProps":{"defaultValue":null,"description":"","name":"childrenProps","parent":{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"},"declarations":[{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"}],"required":false,"type":{"name":"Record<string, any>"}},"max":{"defaultValue":null,"description":"","name":"max","parent":{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"},"declarations":[{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"}],"required":false,"type":{"name":"number"}},"children":{"defaultValue":null,"description":"","name":"children","parent":{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"},"declarations":[{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"}],"required":true,"type":{"name":"enum","raw":"Element[] | React.ReactNode[]","value":[{"value":"Element[]","description":"","fullComment":"","tags":{}},{"value":"React.ReactNode[]","description":"","fullComment":"","tags":{}}]}},"onChange":{"defaultValue":null,"description":"","name":"onChange","parent":{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"},"declarations":[{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"}],"required":false,"type":{"name":"(nbrRemainingChildren: number) => void"}},"rect":{"defaultValue":null,"description":"Should be used together with the userOverflowGroup hook to fit by parent element","name":"rect","parent":{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"},"declarations":[{"fileName":"framework/lib/components/overflow-group/types.ts","name":"OverflowGroupProps"}],"required":false,"type":{"name":"HTMLElement"}}}}} />
);

export default OverflowGroupPage
