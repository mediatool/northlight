import { describe, it } from 'mocha'
import { assert } from 'chai'
import { processColorSchemeBasedOnTheme } from '../../../lib/theme/process-color-scheme-based-on-theme'

describe('processColorSchemeBasedOnTheme', () => {
  it('handles undefined theme', () => {
    const currentTheme = 'nonExistingTheme' as any
    const colorScheme = 'gray'
    const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })
    assert.equal(processedColorScheme, 'gray')
  })

  it('handles undefined colorScheme', () => {
    const currentTheme = 'webappTheme'
    const colorScheme = 'gray'
    const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })
    assert.equal(processedColorScheme, 'gray')
  })

  it('handles defined theme and colorScheme', () => {
    const currentTheme = 'camphouseLightTheme'
    const colorScheme = 'gray'
    const processedColorScheme = processColorSchemeBasedOnTheme({ currentTheme, colorScheme })
    assert.equal(processedColorScheme, 'smoke')
  })
})
