import React, { useMemo, useRef, useState } from 'react'
import { useBoolean, useId, useOutsideClick } from '../../../hooks'
import { Calendar } from './components/calendar'
import { Presets } from './components/presets'
import { Trigger } from './components/trigger'
import { ContextValue, DatePreset, DateRangePickerProps } from './types'
import { DateRangePickerContext } from './util'
import { useCalendarOffset } from './hooks'
import { Card } from '../../card'
import { HStack } from '../../stack'

export const DateRangePicker = (props: DateRangePickerProps) => {
  const ref = useRef(null)
  const presetContainerId = useId()
  const [ isOpen, { toggle, off } ] = useBoolean(props.triggerless)
  const [ hoveredEndDate, setHoveredEndDate ] = useState<Date | undefined>(undefined)
  const [ selectedPreset, setSelectedPreset ] = useState<string | undefined>(undefined)
  const [ dateRange, setDateRange ] = useState(props.selected ?? [])
  const [ endOffset, setEndOffset ] = useCalendarOffset(dateRange, 1)
  const [ startOffset, setStartOffset ] = useCalendarOffset(dateRange, 0)

  const handleClickOutside = (e: Event) => {
    e.stopPropagation()

    const { id } = e.target as HTMLElement
    if (props.triggerless || id === presetContainerId) {
      return
    }

    off()
  }

  useOutsideClick({
    ref,
    handler: handleClickOutside,
  })

  const handleDateSelected = (date: Date) => {
    setSelectedPreset('')
    const [ startDate, endDate ] = dateRange

    if (dateRange.length < 2 && startDate?.getTime() === date.getTime()) {
      return
    }

    if (!startDate) {
      setDateRange([ date ])
      return
    }

    if (!endDate) {
      props.onChange([ startDate, date ])
      setDateRange([ startDate, date ])
      return
    }
    setDateRange([ date ])
  }

  const onPresetSelected = (preset: DatePreset) => {
    setSelectedPreset(preset.title)
    setStartOffset(0)
    setDateRange(preset.range)
    props.onChange(preset.range)
  }

  const hoverDate = (date: Date) => {
    if (dateRange.length === 1) {
      setHoveredEndDate(date)
    }
  }

  const unHoverDate = () => {
    setHoveredEndDate(undefined)
  }

  const state = {
    selected: dateRange,
    hoveredEndDate,
  }

  const actions = {
    hoverDate,
    unHoverDate,
  }

  const value = useMemo<ContextValue>(() => ({
    state,
    actions,
  }), [ state, actions ])

  const [ from, to ] = dateRange

  return (
    <DateRangePickerContext.Provider value={ value }>
      { !props.triggerless && (
        <Trigger
          id={ presetContainerId }
          onClick={ toggle }
          dateRange={ dateRange }
        />
      ) }
      { isOpen && (
        <Card size="max-content" shadow="md" ref={ ref }>
          <HStack spacing={ 4 } alignItems="flex-start" p={ 4 }>
            <Presets
              selectedPreset={ selectedPreset }
              onPresetSelected={ onPresetSelected }
              fiscalDate={ props.fiscalDate }
              firstDayOfWeek={ props.firstDayOfWeek }
            />
            <Calendar
              onDateSelected={ handleDateSelected }
              firstDayOfWeek={ props.firstDayOfWeek }
              selected={ from }
              dateRange={ dateRange }
              offset={ startOffset }
              onOffsetChanged={ setStartOffset }
              presetIsSelected={ !!selectedPreset }
              onYearSelected={ () => setStartOffset(0) }
            />
            <Calendar
              onDateSelected={ handleDateSelected }
              firstDayOfWeek={ props.firstDayOfWeek }
              selected={ to }
              dateRange={ dateRange }
              offset={ endOffset }
              onOffsetChanged={ setEndOffset }
              presetIsSelected={ !!selectedPreset }
              onYearSelected={ () => setEndOffset(0) }
            />
          </HStack>
        </Card>
      ) }
    </DateRangePickerContext.Provider>
  )
}
