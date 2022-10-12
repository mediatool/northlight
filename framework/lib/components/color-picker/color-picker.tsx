import React, { useEffect, useRef, useState } from 'react'
import { ColorsDuo } from '@mediatool/icons'
import { FocusScope } from '@react-aria/focus'
import { color as colorToken } from '@mediatool/tokens'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { useBoolean, useDisclosure } from '../../hooks'
import { SimpleGrid } from '../simple-grid'
import { Stack } from '../stack'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { Box } from '../box'
import { ColorPickerProps } from './types'
import { ColorButton } from './color-button'
import { columns, defaultColors, paletteColors } from './constants'
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '../popover'
import { ColorsExpandButton } from './colors-expand-button'

export const ColorPicker = ({
  onChange = () => {},
  colors = defaultColors,
  expandedColors = paletteColors,
  value = null,
  name,
  size = 'md',
  ...rest
}: ColorPickerProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [ expanded, setExpanded ] = useBoolean()
  const [ selectedColor, setSelectedColor ] = useState(value)
  const [ visibleColors, setVisibleColors ] = useState(colors)
  const initialFocusRef = useRef(null)
  const {
    trigger,
    heading,
  } = useMultiStyleConfig('ColorPicker', { selectedColor, size })

  const baseColors = [ ...colors ]
  for (let i = 0; i < baseColors.length % columns; i += 1) {
    baseColors.push('')
  }

  useEffect(() => {
    setSelectedColor(value)
  }, [ value ])

  useEffect(() => {
    if (expanded) {
      setVisibleColors((prev) => prev.concat(expandedColors))
    } else {
      setVisibleColors(baseColors)
    }
  }, [ expanded ])

  const expandColors = () => {
    setExpanded.toggle()
  }

  const getNumberOfColumns = () => {
    if (expanded) return columns
    if (colors.length < columns && colors.length > 2) {
      return colors.length
    }
    if (colors.length < columns) {
      return 3
    }
    return columns
  }

  const shouldBeFocused = (index: number) => (
    selectedColor
      ? index === visibleColors.findIndex((colorVal) => colorVal === selectedColor)
      : index === 0
  )

  const handleSelect = (color: string) => {
    onToggle()
    setSelectedColor(color)
    onChange(color)
  }

  return (
    <Box data-testid="color-picker-test-id">
      <Popover
        isOpen={ isOpen }
        onClose={ onClose }
        initialFocusRef={ initialFocusRef }
      >
        <PopoverTrigger>
          <IconButton
            onClick={ onToggle }
            aria-label={ name || 'color picker' }
            name={ name }
            sx={ trigger }
            size={ size }
            icon={ <Icon as={ ColorsDuo } /> }
            { ...rest }
          />
        </PopoverTrigger>
        <PopoverContent w="auto" boxShadow="md" p={ 2 }>
          <Stack>
            <PopoverHeader
              color={ colorToken.text.default }
              sx={ heading }
            >
              Pick a color
            </PopoverHeader>
            <PopoverBody p={ 0 }>
              <Stack alignItems="center" p={ 0 } spacing={ 0 }>
                <FocusScope>
                  <SimpleGrid
                    columns={ getNumberOfColumns() }
                    spacing={ 2 }
                    overflowY="scroll"
                    maxH={ 72 }
                    pr={ 2 }
                    pl={ 4 }
                    py={ 1 }
                  >
                    { visibleColors.map((color, index) => (
                      <ColorButton
                        color={ color }
                        key={ `${color}-button-${index as number}` }
                        selected={ color === selectedColor }
                        ref={ shouldBeFocused(index) ? initialFocusRef : undefined }
                        size={ size }
                        onClick={ () => handleSelect(color) }
                      />
                    )) }
                  </SimpleGrid>
                  { expandedColors.length > 0 && (
                    <ColorsExpandButton
                      onClick={ expandColors }
                      expanded={ expanded }
                      size={ size }
                    />
                  ) }
                </FocusScope>
              </Stack>
            </PopoverBody>
          </Stack>
        </PopoverContent>
      </Popover>
    </Box>
  )
}
