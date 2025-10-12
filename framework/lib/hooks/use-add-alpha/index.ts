import { useToken } from '@chakra-ui/system'

export const useAddAlpha = (color: string, alpha: number = 1) => {
  const colorInHex = useToken('colors', color)

  const limitAlpha = Math.min(Math.max(alpha, 0), 1)
  const opacity = Math.round(limitAlpha * 255)

  return `${colorInHex}${opacity.toString(16).toUpperCase()}`
}
