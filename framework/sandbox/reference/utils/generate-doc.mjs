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

const routeContent = info.map((data) => {
  const componentName = data.displayName
  const fileName = formatFileName(componentName)

  saveFile(
    `sandbox/reference/pages/${fileName}-page/index.tsx`,
    generateDocumentation(data)
  )

  return `{
    "title": \`${componentName}\`,
    "path": \`/${fileName}\`,
    "component": () => import(\`../pages/${fileName}-page\`),
  },`
})

const routePath = 'sandbox/reference/routes/routes.tsx'
const routes = routeContent.reduce((acc, curr) => acc + curr, '')
const routeFile = `import { prop, sortBy } from 'ramda'
import { Page } from '../../app'

export const routes: Page[] = sortBy(prop('title'), [
  ${routes}
])
`

saveFile(routePath, routeFile)

console.log('Setup routing')
console.log('Finnished ;)')
