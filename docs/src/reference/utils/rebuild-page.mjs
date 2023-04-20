import R from 'ramda'
import { parseCode } from './parse.mjs'
import { generateDocumentation } from './generateDocumenation.mjs'
import { saveFile } from './save-file.mjs'
import { formatFileName } from './format-file-name.mjs'

const filePathTobeRebuilt = R.last(process.argv)

const data = parseCode(filePathTobeRebuilt)[0]
const fileName = formatFileName(data.displayName)
const content = generateDocumentation(data)
saveFile(
  `src/reference/pages/${fileName}-page/index.tsx`,
  content
)
