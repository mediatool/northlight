type SplitResult = {
  type: 'Markdown' | 'Code'
  data: string
}

export const splitMarkdownAndCode = (input: string): SplitResult[] => {
  const regex = /\(\?\s([\s\S]*?)\s\?\)/g
  const parts: string[] = []
  const matches: string[] = []

  let lastIndex = 0
  let match: RegExpExecArray | null

  match = regex.exec(input)
  while (match !== null) {
    const matchIndex = match.index
    const matchLength = match[0].length
    const code = match[1]

    const markdownPart = input.slice(lastIndex, matchIndex).trim()
    if (markdownPart) {
      parts.push(markdownPart)
    }

    matches.push(code)
    lastIndex = matchIndex + matchLength

    match = regex.exec(input)
  }

  if (lastIndex < input.length) {
    parts.push(input.slice(lastIndex).trim())
  }

  const result: SplitResult[] = []
  for (let i = 0; i < parts.length; i += 1) {
    result.push({ type: 'Markdown', data: parts[i] })
    if (matches[i]) {
      result.push({ type: 'Code', data: matches[i] })
    }
  }

  return result
}
