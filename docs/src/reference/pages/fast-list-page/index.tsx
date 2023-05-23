/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const FastListPage = () => (
  <ReferencePage data={{"tags":{"see":"FastGrid *\n{@link https://northlight.dev/reference/fast-list}","example":"(Example)\n(?\n<Box h=\"500px\" w=\"300p\" border=\"1px solid gray\" p={ 4 } borderRadius={ 4 }>\n<FastList itemCount={ 10000 } itemSize={ 30 } overscanCount={ 100 }>\n{ (index) => `item-${index}` }\n</FastList>\n</Box>\n?)"},"filePath":"/Users/orestisrodriguez/Documents/Projects/@mediatool/northlight/framework/lib/components/fast-list/fast-list.tsx","description":"Wrapper that renders children in a virtualized stacked layout","displayName":"FastList","methods":[],"props":{"itemSize":{"defaultValue":null,"description":"","name":"itemSize","parent":{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"},"declarations":[{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"}],"required":true,"type":{"name":"enum","raw":"number | ((index: number) => number)","value":[{"value":"number"},{"value":"(index: number) => number","description":"","fullComment":"","tags":{}}]}},"itemCount":{"defaultValue":null,"description":"Total number of items in the list. Note that only a few items will be rendered and displayed at a time.","name":"itemCount","parent":{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"},"declarations":[{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"}],"required":true,"type":{"name":"number"}},"direction":{"defaultValue":{"value":"column"},"description":"","name":"direction","parent":{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"},"declarations":[{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"}],"required":false,"type":{"name":"enum","raw":"StackDirection","value":[{"value":"\"row\""},{"value":"\"column\""},{"value":"\"column-reverse\""},{"value":"\"row-reverse\""},{"value":"ResponsiveArray<\"row\" | \"column\" | \"column-reverse\" | \"row-reverse\">","description":"","fullComment":"","tags":{}},{"value":"Partial<Record<string | (string & {}), \"row\" | \"column\" | \"column-reverse\" | \"row-reverse\">>","description":"","fullComment":"","tags":{}}]}},"children":{"defaultValue":null,"description":"","name":"children","parent":{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"},"declarations":[{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"}],"required":true,"type":{"name":"enum","raw":"string | Element | ((index: number) => string | Element)","value":[{"value":"string"},{"value":"Element","description":"","fullComment":"","tags":{}},{"value":"(index: number) => string | Element","description":"","fullComment":"","tags":{}}]}},"width":{"defaultValue":null,"description":"","name":"width","parent":{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"},"declarations":[{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"}],"required":false,"type":{"name":"number"}},"height":{"defaultValue":null,"description":"","name":"height","parent":{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"},"declarations":[{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"}],"required":false,"type":{"name":"number"}},"initialScrollOffset":{"defaultValue":null,"description":"Scroll offset for initial render.\n\nFor vertical lists, this affects scrollTop. For horizontal lists, this affects scrollLeft.","name":"initialScrollOffset","parent":{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"},"declarations":[{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"}],"required":false,"type":{"name":"number"}},"overscanCount":{"defaultValue":{"value":"0"},"description":"The number of items (rows or columns) to render outside of the visible area. This property can be important for two reasons:\n\n- Overscanning by one row or column allows the tab key to focus on the next (not yet visible) item.\n- Overscanning slightly can reduce or prevent a flash of empty space when a user first starts scrolling.\n\nNote that overscanning too much can negatively impact performance. By default, List overscans by one item.","name":"overscanCount","parent":{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"},"declarations":[{"fileName":"northlight/framework/lib/components/fast-list/types.ts","name":"FastListProps"}],"required":false,"type":{"name":"number"}}}}} />
);

export default FastListPage