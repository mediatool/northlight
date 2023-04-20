import {
  Blockquote,
  BodyType,
  Capitalized,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HeadingType,
  Label,
  LabelType,
  Lead,
  P,
  Small,
  StylizedType,
  Tiny,
} from '@northlight/ui'

interface Typography<T> {
  element: string
  component: T
  code: string
  variant?: '14' | '16'
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
}

export const TableHead = [ 'Html tag', 'Demo', 'Code' ]

export const Headings: Typography<HeadingType>[] = [
  { element: 'h1', component: H1, code: '<H1>Your text</H1>' },
  { element: 'h2', component: H2, code: '<H2>Your text</H2>' },
  { element: 'h3', component: H3, code: '<H3>Your text</H3>' },
  { element: 'h4', component: H4, code: '<H4>Your text</H4>' },
  { element: 'h5', component: H5, code: '<H5>Your text</H5>' },
  { element: 'h6', component: H6, code: '<H6>Your text</H6>' },
]

export const Body: Typography<BodyType>[] = [
  { element: 'p', component: P, code: '<P>Your text</P>', variant: '16' },
  { element: 'p', component: P, code: '<P variant="14">Your text</P>', variant: '14' },
]

export const Stylized: Typography<StylizedType>[] = [
  { element: 'span', component: Blockquote, code: '<Blockquote>Your text</Blockquote>' },
  { element: 'span', component: Tiny, code: '<Tiny>Your text</Tiny>' },
  { element: 'span', component: Capitalized, code: '<Capitalized>Your text</Capitalized>' },
  { element: 'small', component: Small, code: '<small>Your text</small>' },
  { element: 'span', component: Lead, code: '<Lead>Your text</Lead>' },
]

export const Labels: Typography<LabelType>[] = [
  { element: 'label', component: Label, code: '<Label size="2xs">Your text</Label>', size: '2xs' },
  { element: 'label', component: Label, code: '<Label size="xs">Your text</Label>', size: 'xs' },
  { element: 'label', component: Label, code: '<Label>Your text</Label>', size: 'sm' },
  { element: 'label', component: Label, code: '<Label size="md">Your text</Label>', size: 'md' },
  { element: 'label', component: Label, code: '<Label size="lg">Your text</Label>', size: 'lg' },
]
