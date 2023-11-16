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
  Label,
  LabelType,
  Lead,
  NumVal,
  NumValType,
  P,
  Small,
  StylizedType,
  Tiny,
} from '@northlight/ui'
import { PAlt } from './p-alt'

interface Typography<T> {
  element: string
  component: T
  demoText: string
  description: string
  code: string
  componentProps?: object
  variant?: '14' | '16'
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
}

export const TableHead = [ 'Html tag', 'Demo', 'Description', 'Code' ]

export const Headings: Typography<typeof H1>[] = [
  {
    element: 'h1',
    component: H1,
    code: '<H1>Your text</H1>',
    demoText: 'Heading H1',
    description:
      'Main title on the page with low content density (website, Northlight)',
  },
  {
    element: 'h2',
    component: H2,
    code: '<H2>Your text</H2>',
    demoText: 'Heading H2',
    description:
      'Numbers in charts / other details in the app which should stand out (especially in dashboards). Subtitle on the website / in the Northlight',
  },
  {
    element: 'h3',
    component: H3,
    code: '<H3>Your text</H3>',
    demoText: 'Heading H3',
    description:
      'Smaller subititle in app or Northlight. Also used to highlight single scenario to complete in you app ( on page / in block with low content density)',
  },
  {
    element: 'h4',
    component: H4,
    code: '<H4>Your text</H4>',
    demoText: 'Heading H4',
    description:
      'Default title of the product page, also used for modal and toolbox headings',
  },
  {
    element: 'h5',
    component: H5,
    code: '<H5>Your text</H5>',
    demoText: 'Heading H5',
    description: 'Subtitle of the product page / title',
  },
  {
    element: 'h6',
    component: H6,
    code: '<H6>Your text</H6>',
    demoText: 'Heading H6',
    description:
      'Title of sections within limited space such as table headings, menu sections or lists, also used in badge component.',
  },
]

export const Body: Typography<BodyType>[] = [
  {
    element: 'p',
    component: P,
    code: '<P>Your text</P>',
    variant: '16',
    demoText: 'Body 16',
    description:
      'Default text, used inside of md and lg inputs, text areas and selects',
  },
  {
    element: 'p',
    component: P,
    code: '<P variant="14">Your text</P>',
    variant: '14',
    demoText: 'Body 14',
    description:
      'Secondary text, also used inside of sm inputs, text areas, selects',
  },
]

export const NumVals: Typography<NumValType>[] = [
  {
    element: 'label',
    component: NumVal,
    code: '<NumVal size="2xs">Your text</NumVal>',
    size: '2xs',
    demoText: 'Tiny Label',
    description: 'Small numbers in charts',
  },
  {
    element: 'label',
    component: NumVal,
    code: '<NumVal size="xs">Your text</NumVal>',
    size: 'xs',
    demoText: 'XS Label',
    description: 'Text in xs number inputs',
  },
  {
    element: 'label',
    component: NumVal,
    code: '<NumVal>Your text</NumVal>',
    size: 'sm',
    demoText: 'SM label',
    description: 'Text in sm number inputs and numbers in tables',
  },
  {
    element: 'label',
    component: NumVal,
    code: '<NumVal size="md">Your text</NumVal>',
    size: 'md',
    demoText: 'MD label',
    description: 'Text in md number inputs',
  },
  {
    element: 'label',
    component: NumVal,
    code: '<NumVal size="lg">Your text</NumVal>',
    size: 'lg',
    demoText: 'LG label',
    description: 'Text in lg number inputs',
  },
]

export const Stylized: Typography<StylizedType>[] = [
  {
    element: 'span',
    component: Blockquote,
    code: '<Blockquote>Your text</Blockquote>',
    demoText: 'Blockquote',
    description:
      'Highlighting of most important wuotes, drawing attention to certain parts of content',
  },
  {
    element: 'span',
    component: Tiny,
    code: '<Tiny>Your text</Tiny>',
    demoText: 'Tiny',
    description: 'Captions and notes',
  },
  {
    element: 'span',
    component: Capitalized,
    code: '<Capitalized>Your text</Capitalized>',
    demoText: 'capitalized',
    description: 'Subheadings',
  },
  {
    element: 'small',
    component: Small,
    code: '<small>Your text</small>',
    demoText: 'Small text',
    description: 'Text of tertiary prominence',
  },
  {
    element: 'span',
    component: Lead,
    code: '<Lead>Your text</Lead>',
    demoText: 'Lead',
    description: "The first paragraph in an article article' section",
  },
]

export const Labels: Typography<LabelType>[] = [
  {
    element: 'label',
    component: Label,
    code: '<Label size="2xs">Your text</Label>',
    size: '2xs',
    demoText: 'Tiny Label',
    description: 'Caption to sm input / select / text-area',
  },
  {
    element: 'label',
    component: Label,
    code: '<Label size="xs">Your text</Label>',
    size: 'xs',
    demoText: 'XS Label',
    description:
      ' Caption to md input / select / textarea \n Label to sm input / select / textarea \n Text within xs buttons, sm tags',
  },
  {
    element: 'label',
    component: Label,
    code: '<Label>Your text</Label>',
    size: 'sm',
    demoText: 'SM label',
    description:
      'Caption to lg input / select / textarea \n Label to md input / select / textarea \n Text within sm buttons, md tags',
  },
  {
    element: 'label',
    component: Label,
    code: '<Label size="md">Your text</Label>',
    size: 'md',
    demoText: 'MD label',
    description:
      'Label to lg input / select / textarea. \n Text within md buttons, lg tags',
  },
  {
    element: 'label',
    component: Label,
    code: '<Label size="lg">Your text</Label>',
    size: 'lg',
    demoText: 'LG label',
    description: 'Text within lg buttons',
  },
]

export const Colors: Typography<BodyType>[] = [
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'text.default'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Primary text, mainly used in the app',
    componentProps: { sx: { color: 'text.default' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'text.subdued'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Secondary text',
    componentProps: { sx: { color: 'text.subdued' } },
  },
  {
    element: 'p',
    component: PAlt,
    code: "<P sx={{color: 'text.inverted'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Text on dark / contrast background',
    componentProps: { sx: { color: 'text.inverted' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'brand'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Interactive elements',
    componentProps: { sx: { color: 'brand' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'destructive'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Error messages',
    componentProps: { sx: { color: 'destructive' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'success'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Success messages',
    componentProps: { sx: { color: 'success' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'text.over.brand'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Primary Accent color, depends on brand.',
    componentProps: { sx: { color: 'text.over.brand' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'text.over.secondary'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Secondary Accent color',
    componentProps: { sx: { color: 'text.over.secondary' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'text.over.tertiary'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Tertiary Accent color',
    componentProps: { sx: { color: 'text.over.tertiary' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'info'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Secondary accent color, depends on brand',
    componentProps: { sx: { color: 'info' } },
  },
  {
    element: 'p',
    component: P,
    code: "<P sx={{color: 'text.link.default'}}>This is text</P>",
    variant: '16',
    demoText: 'This is text',
    description: 'Links',
    componentProps: { sx: { color: 'text.link' } },
  },
]
