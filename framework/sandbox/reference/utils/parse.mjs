import { parse } from 'react-docgen-typescript'

const pathFromChakraOrReact = (str) =>
  str.includes('@chakra-ui/system') ||
  str.includes('@chakra-ui/styled-system') ||
  str.includes('@types/react')

const options = {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldExtractValuesFromUnion: true,
  propFilter: (prop) => {
    if (prop.parent) {
      return !pathFromChakraOrReact(prop.parent.fileName)
    }
    return false
  },
  componentNameResolver: (exp) => {
    console.log(`Parsed ${exp.escapedName}`)
    return undefined
  },
}

export const parseCode = (paths) => parse(paths, options)