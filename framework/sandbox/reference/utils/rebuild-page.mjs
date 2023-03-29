import R from 'ramda'
import { parseCode } from './parse.mjs'
import { generateDocumentation } from './generateDocumenation.mjs'
import { saveFile } from './save-file.mjs'
import { formatFileName } from './format-file-name.mjs'
import { triggerRerender } from './trigger-rerender.mjs'

const filePathTobeRebuilt = R.last(process.argv)

const updateFile = async () => {
  const data = parseCode(filePathTobeRebuilt)[0]
  const fileName = formatFileName(data.displayName)
  const content = await generateDocumentation(data)
  saveFile(
    `sandbox/reference/pages/${fileName}-page/index.tsx`,
    content
  )
  triggerRerender()
}

updateFile()
