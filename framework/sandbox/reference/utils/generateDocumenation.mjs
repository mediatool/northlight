export const generateDocumentation = (info) => {
  return `
  import React from 'react'
  import ReferencePage from '../reference-page'

  const ${info.displayName}Page = () => (
    <ReferencePage data={${JSON.stringify(info, null, 2)}} />
  )

  export default ${info.displayName}Page
  `
}