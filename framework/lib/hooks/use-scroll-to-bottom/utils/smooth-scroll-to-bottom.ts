export const smoothScrollToBottom = (div: HTMLDivElement) => {
  const totalSteps = 50
  let currentStep = 0
  const targetScrollTop = div.scrollHeight - div.clientHeight
  const originalScrollTop = div.scrollTop
  const scrollInterval = setInterval(() => {
    if (currentStep >= totalSteps) {
      clearInterval(scrollInterval)
    } else {
      currentStep += 1
      const scrollProgress = currentStep / totalSteps
      const easing = 1 - (1 - scrollProgress) * (1 - scrollProgress) // quadratic ease out
      // eslint-disable-next-line no-param-reassign
      div.scrollTop = originalScrollTop + ((targetScrollTop - originalScrollTop) * easing)
    }
  }, 20)
}
