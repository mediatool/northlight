export const formattedTime = (seconds: number) => {
  let baseString = ''
  const hours = Math.floor(seconds / 3600)
  if (hours > 0) {
    baseString += ` ${hours}h`
  }
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  if (minutes > 0) {
    baseString += ` ${minutes}min`
  }
  const newSeconds = Math.floor(seconds - hours * 3600 - minutes * 60)
  if (newSeconds > 0) {
    baseString += ` ${newSeconds}s`
  }

  return baseString
}
