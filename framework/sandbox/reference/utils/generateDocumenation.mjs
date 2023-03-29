export const generateDocumentation = (info) => {
  const output = `/* eslint-disable */
import React from 'react'
import ReferencePage from '../../reference-page'


const ${info.displayName}Page = () => (
  <ReferencePage data={${JSON.stringify(info)}} />
);

export default ${info.displayName}Page
`

  return output
}
