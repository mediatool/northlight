import fs from 'fs'
import path from 'path'
import R from 'ramda'

const libPath = 'lib'

const basePath = path.join(libPath, 'index.ts')

const isReactComponentFile = (filename) => {
  const tsxPattern = /\.(t|j)sx$/
  return tsxPattern.test(filename)
}

const findReactComponents = (dirPath, fileList = []) => {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = path.join(dirPath, file)

    if (fs.statSync(filePath).isDirectory()) {
      findReactComponents(filePath, fileList)
    } else if (isReactComponentFile(file)) {
      fileList.push(filePath)
    }
  })

  return fileList
}

const isComponentExported = (componentPath, indexPath) => {
  const indexContent = fs.readFileSync(indexPath, 'utf-8')
  const relativePath = path.relative(path.dirname(indexPath), componentPath)
  const ext = path.extname(relativePath)
  const componentName = path.basename(relativePath, ext)
  const importPath = path.dirname(relativePath).replace(/\\/g, '/') // Convert Windows path separators to Unix path separators

  const importStatement = `export { ${componentName} } from './${importPath}/${componentName}';`

  if (indexContent.includes(importStatement)) {
    return true
  }

  const nestedIndexFiles =
    indexContent.match(/export \* from '\.\/[^']*'/g) || []

  const isExported = R.any((nestedIndexFile) => {
    const nestedIndexPathMatch = nestedIndexFile.match(/'(\.\/[^']*)'/)

    if (nestedIndexPathMatch) {
      const nestedIndexPath = nestedIndexPathMatch[1]
      if (!componentPath.includes(R.last(R.split('/', nestedIndexPath)))) {
        return false
      }

      const fullPath = path.join(path.dirname(indexPath), nestedIndexPath)

      const isDir =
        fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()

      if (isDir) {
        const newPath = `${fullPath}/index.ts`
        return isComponentExported(componentPath, newPath)
      }

      const adjustedPath = fullPath + ext
      if (
        !isDir &&
        fs.existsSync(adjustedPath) &&
        adjustedPath === componentPath
      ) {
        return true
      }
    }

    return false
  }, nestedIndexFiles)

  return isExported
}

export const getAllExportedComponents = () => {
  const allReactComponents = findReactComponents(libPath)
  const exportedReactComponents = allReactComponents.filter((componentPath) =>
    isComponentExported(componentPath, basePath)
  )

  return exportedReactComponents
}
