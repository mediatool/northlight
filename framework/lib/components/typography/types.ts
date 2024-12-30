import { Heading } from '@chakra-ui/react'
import { P } from './body'
import { Label } from './labels'
import { NumVal } from './numvals'
import { Blockquote } from './stylized'

export type HeadingType = typeof Heading
export type BodyType = typeof P
export type StylizedType = typeof Blockquote
export type LabelType = typeof Label
export type NumValType = typeof NumVal
