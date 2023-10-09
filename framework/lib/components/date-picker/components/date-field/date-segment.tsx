import React, { useRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { useDateSegment } from '@react-aria/datepicker'
import { Box } from '../../../box'
import { DateSegmentProps } from './types.ts'

export const DateSegment = ({ segment, state }: DateSegmentProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  const isDivider = segment.type === 'literal'
  const { dateSegment } = useMultiStyleConfig('DatePicker')
  const minWidth = `${String(segment.maxValue).length}ch`

  return (
    <Box
      { ...segmentProps }
      ref={ ref }
      __css={ dateSegment }
      minWidth={ isDivider ? 0 : minWidth }
      paddingInline={ isDivider ? 0 : '0.25rem' }
      color={
        segment.isPlaceholder
          ? 'gray.500'
          : isDivider
            ? 'text.subduded'
            : 'text.default'
      }
      fontSize="md"
    >
      { segment.text }
    </Box>
  )
}
