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

const getRouteContent = () => {
  const routeContent = info.map((data) => {
    const componentName = data.displayName
    const fileName = formatFileName(componentName)
    const content = generateDocumentation(data)
    saveFile(`sandbox/reference/pages/${fileName}-page/index.tsx`, content)

    return `{
      "title": \`${componentName}\`,
      "path": \`/${fileName}\`,
      "component": () => import(\`../pages/${fileName}-page\`),
    },`
  })

  return routeContent
}

const writeRoutes = () => {
  const routeContent = getRouteContent()
  const routePath = 'sandbox/reference/routes/routes.tsx'
  const routes = routeContent.reduce((acc, curr) => acc + curr, '')
  const routeFile = `/* eslint-disable */
import { prop, sortBy } from 'ramda'
import { Page } from '../../app'

export const routes: Page[] = sortBy(prop('title'), [
  {
  "title": "A book guide on style props",
  "path": "/theme-reference",
  "component": () => import("../reference-page/theme-reference"),
  },
  ${routes}
])
`
  saveFile(routePath, routeFile)
}

writeRoutes()
console.log('Setup routing')
console.log('Finnished ;)')
