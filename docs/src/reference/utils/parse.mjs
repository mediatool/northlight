import { parse } from 'react-docgen-typescript'

const pathFromChakraOrReact = (str) =>
  str.fileName.includes('@chakra-ui/system') ||
  (str.fileName.includes('@chakra-ui/styled-system')
  && !str.name.includes('ThemingProps')
  ) ||
  str.fileName.includes('@types/react')

const options = {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldExtractValuesFromUnion: true,
  skipChildrenPropWithoutDoc: false,
  propFilter: (prop) => {
    if (prop.parent) {
      return !pathFromChakraOrReact(prop.parent)
    }
    return false
  },
  componentNameResolver: (exp) => {
    console.log(`Parsed ${exp.escapedName}`)
    return undefined
  },
}

export const parseCode = (paths) => parse(paths, options)
