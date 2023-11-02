import fs from 'fs'
import path from 'path'
import R from 'ramda'
import { fileURLToPath } from 'url'

const dirPath = path.dirname(fileURLToPath(import.meta.url))
function loadMarkdown () {
  const files = fs.readdirSync(dirPath)
  const mdFiles = R.reverse(files.filter((file) => path.extname(file) === '.md'))

  const content = mdFiles.map((file) => {
    const filePath = path.join(dirPath, file)
    return {
      name: file,
      content: fs.readFileSync(filePath, 'utf-8'),
    }
  })

  const outputPath = path.join(dirPath, 'compiled.json')
  fs.writeFileSync(outputPath, JSON.stringify(content, null, 2))
}

loadMarkdown()
console.log('All MD files have been compiled into compiled.json')
