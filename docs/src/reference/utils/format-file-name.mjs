export const formatFileName = (input) => input
  .replace(/([A-Z])/g, ' $1')
  .trim()
  .toLowerCase()
  .replace(/\s+/g, '-')
