import fs from 'fs'
import R from 'ramda'
import { parseCode } from './parse.mjs'
import path from 'path'
import { generateDocumentation } from './generateDocumenation.mjs'
import { saveFile } from './save-file.mjs'

const filePathTobeRebuilt = R.last(process.argv)

const saveFile = async (filePath, documentationJSX) => {
  const directoryPath = path.dirname(filePath)

  try {
    await fs.promises.access(directoryPath)
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.promises.mkdir(directoryPath, { recursive: true })
    } else {
      throw error
    }
  }

  await fs.promises.writeFile(filePath, documentationJSX)
}

const data = parseCode(filePathTobeRebuilt)[0]
saveFile(
  `sandbox/reference/pages/${data.displayName}-page/index.tsx`,
  generateDocumentation(data)
)
