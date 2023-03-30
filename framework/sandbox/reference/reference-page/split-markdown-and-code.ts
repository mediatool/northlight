type SplitResult = {
  type: 'Markdown' | 'Code'
  data: string
}

export const splitMarkdownAndCode = (input: string): SplitResult[] => {
  const regex = /\(\?\s([\s\S]*?)\s\?\)/g
  const results: SplitResult[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  match = regex.exec(input)
  while (match !== null) {
    const matchIndex = match.index
    const matchLength = match[0].length
    const code = match[1]

    const markdownPart = input.slice(lastIndex, matchIndex).trim()
    if (markdownPart) {
      results.push({ type: 'Markdown', data: markdownPart })
    }

    results.push({ type: 'Code', data: code })
    lastIndex = matchIndex + matchLength

    match = regex.exec(input)
  }

  if (lastIndex < input.length) {
    results.push({ type: 'Markdown', data: input.slice(lastIndex).trim() })
  }

  return results
}
