export type Tokens = Record<string, any>

export type TokensData = {
  title: string
  data: Tokens
}

export interface TokensSet extends TokensData {
  name: string
}
