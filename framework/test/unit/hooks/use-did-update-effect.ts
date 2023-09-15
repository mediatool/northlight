import {
  renderHook,
} from '@testing-library/react'
import { assert } from 'chai'
import { useDidUpdateEffect } from 'framework/lib'

const { equal } = assert

describe('useDidUpdateEffect', () => {
  it('does not update on first render', () => {
    let result = null
    renderHook(({ dep }) =>
      useDidUpdateEffect(() => {
        result = dep
      }, [ dep ]),
    { initialProps: { dep: false } })
    equal(result, null)
  })

  it('does update on subsequent render', () => {
    let result = null
    const { rerender } = renderHook(({ dep }) =>
      useDidUpdateEffect(() => {
        result = dep
      }, [ dep ]),
    { initialProps: { dep: false } })
    rerender({ dep: true })
    equal(result, true)
  })
})
