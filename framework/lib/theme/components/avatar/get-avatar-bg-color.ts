import { randomColor } from '@chakra-ui/theme-tools'
import { getShades } from '../../../utils'

const possibleBgColors = getShades(400, 600)

export const getAvatarBgColor = (image: string, name: string, color: any) => {
  if (image) return color.background.avatar.image
  if (name) return randomColor({ string: name, colors: possibleBgColors })

  return color.background.avatar.default
}
