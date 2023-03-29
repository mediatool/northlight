/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const AvatarGroupPage = () => (
  <ReferencePage data={{"tags":{"see":"Avatar *\n{@link https://northlight.dev/reference/avatar-group}","example":"(Example)\nExample:\n(?\n<AvatarGroup max={ 3 }>\n{[1, 2, 3, 4, 5].map((i) => (\n<Avatar\nname=\"Anakin Skywalker\"\nimage=\"https://thenerdstash.com/wp-content/uploads/2021/10/Hayden-Christensen-Anakin-Skywalker.jpg\"\nsize=\"sm\"\nvariant=\"rounded\"\nkey={ i }\n/>\n)) }\n</AvatarGroup>\n?)"},"filePath":"lib/components/avatar/avatar-group.tsx","description":"Used to display a group of users","displayName":"AvatarGroup","methods":[],"props":{"max":{"defaultValue":null,"description":"","name":"max","parent":{"fileName":"framework/lib/components/avatar/types.ts","name":"AvatarGroupProps"},"declarations":[{"fileName":"framework/lib/components/avatar/types.ts","name":"AvatarGroupProps"}],"required":true,"type":{"name":"number"}},"spacing":{"defaultValue":{"value":"-4"},"description":"","name":"spacing","parent":{"fileName":"framework/lib/components/avatar/types.ts","name":"AvatarGroupProps"},"declarations":[{"fileName":"framework/lib/components/avatar/types.ts","name":"AvatarGroupProps"}],"required":false,"type":{"name":"enum","raw":"string | number","value":[{"value":"string"},{"value":"number"}]}},"children":{"defaultValue":null,"description":"The children should be avatar components","name":"children","parent":{"fileName":"framework/lib/components/avatar/types.ts","name":"AvatarGroupProps"},"declarations":[{"fileName":"framework/lib/components/avatar/types.ts","name":"AvatarGroupProps"}],"required":true,"type":{"name":"enum","raw":"Element[] | React.ReactNode[]","value":[{"value":"Element[]","description":"","fullComment":"","tags":{}},{"value":"React.ReactNode[]","description":"","fullComment":"","tags":{}}]}}}}} />
);

export default AvatarGroupPage
