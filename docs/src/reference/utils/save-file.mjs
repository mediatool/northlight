import fs from 'fs'
import path from 'path'

export const saveFile = async (filePath, documentationJSX) => {
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
