import { ESLint } from 'eslint'
import { parseCode } from './parse.mjs'
import { getAllExportedComponents } from './find-components.mjs'
import { generateDocumentation } from './generateDocumenation.mjs'
import { saveFile } from './save-file.mjs'
import { formatFileName } from './format-file-name.mjs'

console.log('Searching files...')
const paths = getAllExportedComponents()
console.log('Setting up parsing...')
const info = parseCode(paths)

console.log('Saved files \n---------\n')

const getRouteContent = async () => {
  const routePromises = info.map(async (data) => {
    const componentName = data.displayName
    const fileName = formatFileName(componentName)
    const content = await generateDocumentation(data)
    saveFile(`sandbox/reference/pages/${fileName}-page/index.tsx`, content)

    return `{
      "title": \`${componentName}\`,
      "path": \`/${fileName}\`,
      "component": () => import(\`../pages/${fileName}-page\`),
    },`
  })

  const routeContent = await Promise.all(routePromises)

  return routeContent
}

const writeRoutes = async () => {
  const routeContent = await getRouteContent()
  const routePath = 'sandbox/reference/routes/routes.tsx'
  const routes = routeContent.reduce((acc, curr) => acc + curr, '')
  const routeFile = `
import { prop, sortBy } from 'ramda'
import { Page } from '../../app'

export const routes: Page[] = sortBy(prop('title'), [
  ${routes}
])
`
  const eslint = new ESLint({ fix: true })
  const results = await eslint.lintText(routeFile, { filePath: 'sandbox/reference/routes/routes.tsx' })
  const formattedRouteFile = results[0].output || routeFile

  saveFile(routePath, formattedRouteFile)
}

writeRoutes()
console.log('Setup routing')
console.log('Finnished ;)')
