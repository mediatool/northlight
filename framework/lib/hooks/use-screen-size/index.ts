import { useMediaQuery } from '../use-media-query'

export const useScreenSize = () => {
  const screenSizes = useMediaQuery([ '(min-width: 1280px)', '(min-width: 1024px)' ])
  if (screenSizes[0]) {
    return 'lg'
  }
  if (screenSizes[1]) {
    return 'md'
  }
  return 'sm'
}
