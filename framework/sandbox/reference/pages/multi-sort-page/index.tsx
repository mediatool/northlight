/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const MultiSortPage = () => (
  <ReferencePage data={{"tags":{"see":"SortableList *\nDragAndDrop *\n{@link https://northlight.dev/reference/multi-sort}","example":"(?\n() => {\nconst [ multiItems, setMultiItems ] = useState({\n container1: [\n   'JavaScript',\n   'Python',\n   'Front end',\n   'Back end',\n ],\n container2: [ 'HTML', 'CSS' ],\n container3: [ 'Chakra UI', 'Next.js', 'Tailwind UI' ],\n})\nreturn (\n <Stack>\n       <MultiSort\n         items={ multiItems }\n         onChange={ (items) => setMultiItems(items) }\n       >\n         { (items, activeId) => (\n           <HStack alignItems=\"start\">\n             <VStack>\n               <Heading size=\"sm\">I like</Heading>\n               <DropZone name=\"container1\">\n                 <SortableContainer items={ items.container1 } />\n               </DropZone>\n             </VStack>\n             <VStack>\n               <Heading size=\"sm\">I don't like</Heading>\n               <DropZone name=\"container2\">\n                 <SortableContainer items={ items.container2 } />\n               </DropZone>\n             </VStack>\n             <VStack>\n               <Heading size=\"sm\">Neutral</Heading>\n               <DropZone name=\"container3\">\n                 <SortableContainer items={ items.container3 } />\n               </DropZone>\n             </VStack>\n             <DragOverlay>\n               { activeId ? (\n                 <DragItem\n                   itemLabel={ activeId }\n                   isDragging={ true }\n                   bgColor=\"background.tag.default\"\n                 />\n               ) : null }\n             </DragOverlay>\n           </HStack>\n         ) }\n       </MultiSort>\n       <Text>Controlled output: </Text>\n       <Code p={ 2 } borderRadius={ 4 }>\n         <pre>{ JSON.stringify(multiItems, null, 2) }</pre>\n       </Code>\n</Stack>\n)\n}\n?)"},"filePath":"lib/components/drag-and-drop/multi-sort.tsx","description":"Util component for sorting items in two dimensions(container and order in container)","displayName":"MultiSort","methods":[],"props":{"children":{"defaultValue":null,"description":"","name":"children","parent":{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"},"declarations":[{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"}],"required":false,"type":{"name":"enum","raw":"ChildrenType<any, any>","value":[{"value":"Element","description":"","fullComment":"","tags":{}},{"value":"Element[]","description":"","fullComment":"","tags":{}},{"value":"(props: any, secondProp: any, thirdProp?: any) => Element | Element[]","description":"","fullComment":"","tags":{}}]}},"items":{"defaultValue":null,"description":"","name":"items","parent":{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"},"declarations":[{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"}],"required":true,"type":{"name":"MultiItemType<itemKeys>"}},"collisionDetection":{"defaultValue":null,"description":"https://docs.dndkit.com/api-documentation/context-provider/collision-detection-algorithms","name":"collisionDetection","parent":{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"},"declarations":[{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"}],"required":false,"type":{"name":"CollisionDetection"}},"onChange":{"defaultValue":{"value":"() => {}"},"description":"","name":"onChange","parent":{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"},"declarations":[{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"}],"required":false,"type":{"name":"(items: MultiItemType<itemKeys>) => void"}},"sensors":{"defaultValue":null,"description":"https://docs.dndkit.com/api-documentation/sensors","name":"sensors","parent":{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"},"declarations":[{"fileName":"framework/lib/components/drag-and-drop/types.ts","name":"MultiSortProps"}],"required":false,"type":{"name":"SensorDescriptor<SensorOptions>[]"}}}}} />
);

export default MultiSortPage
