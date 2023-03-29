type SplitResult = {
  type: 'Markdown' | 'Code';
  data: string;
};

export const splitMarkdownAndCode = (input: string): SplitResult[] => {
  const regex = /\(\?\s([\s\S]*?)\s\?\)/g;
  let parts: string[] = [];
  let matches: string[] = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(input)) !== null) {
    const matchIndex = match.index;
    const matchLength = match[0].length;
    const code = match[1];

    const markdownPart = input.slice(lastIndex, matchIndex).trim();
    if (markdownPart) {
      parts.push(markdownPart);
    }

    matches.push(code);
    lastIndex = matchIndex + matchLength;
  }

  if (lastIndex < input.length) {
    parts.push(input.slice(lastIndex).trim());
  }

  const result: SplitResult[] = [];
  for (let i = 0; i < parts.length; i++) {
    result.push({ type: 'Markdown', data: parts[i] });
    if (matches[i]) {
      result.push({ type: 'Code', data: matches[i] });
    }
  }

  return result;
};
