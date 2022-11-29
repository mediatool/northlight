export const arrayWithLength = (length: number) => (
  Array.from({ length }, (_, i) => i + 1)
)
