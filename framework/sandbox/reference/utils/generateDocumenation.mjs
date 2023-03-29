import { ESLint } from 'eslint'

export const generateDocumentation = async (info) => {
  const output = `
import React from 'react'
import ReferencePage from '../../reference-page'


const ${info.displayName}Page = () => (
  <ReferencePage data={${JSON.stringify(info, null, 2)}} />
);

export default ${info.displayName}Page
`

  const eslint = new ESLint({ fix: true })
  console.log('formatting', info.displayName)
  const results = await eslint.lintText(output, { filePath: 'sandbox/reference/reference-page/index.tsx' })
  const formattedOutput = results[0].output || output

  return formattedOutput
}
