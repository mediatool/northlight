import fs from 'fs'

export const triggerRerender = () => {
  const filePath = 'sandbox/reference/reference-page/index.tsx'
  const currentTime = new Date()

  fs.utimes(filePath, currentTime, currentTime, (err) => {
    if (err) {
      console.error(`Error updating timestamps for file: ${filePath}`, err)
    } else {
      console.log(`Timestamps updated for file: ${filePath}`)
    }
  })
}
