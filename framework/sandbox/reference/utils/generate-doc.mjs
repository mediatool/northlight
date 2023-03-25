import { parseCode } from './parse.mjs'
import { getAllExportedComponents } from './find-components.mjs'
import { generateDocumentation } from './generateDocumenation.mjs'
import { saveFile } from './save-file.mjs'

console.log('Searching files...')
const paths = getAllExportedComponents()
console.log('Setting up parsing...')
const info = parseCode(paths)

console.log('Saved files \n---------\n')

const routeContent = info.map((data) => {
  const name = data.displayName
  saveFile(
    `sandbox/reference/pages/${data.displayName}-page/index.tsx`,
    generateDocumentation(data)
  )

  return `{
    "title": \`${data.displayName}\`,
    "path": \`/${name}\`,
    "component": () => import(\`../pages/${data.displayName}-page\`),
  },`
})

const routePath = 'sandbox/reference/routes/routes.tsx'
const routes = routeContent.reduce((acc, curr) => acc + curr, '')
const routeFile = `
import { prop, sortBy } from 'ramda'
import { Page } from '../../app'

export const routes: Page[] = sortBy(prop('title'), [
  ${routes}
])
`

saveFile(routePath, routeFile)

console.log('Setup routing')
console.log('Finnished ;)')
