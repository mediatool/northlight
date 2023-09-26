import { act, fireEvent, renderHook } from '@testing-library/react'
import { beforeEach, describe, it } from 'mocha'
import { assert } from 'chai'
import { useOutsideRectClick } from '../../../lib/hooks/use-outside-rect-click'

describe('useOutsideRectClick', () => {
  let result: string | null = null
  const ref = {
    current: {
      getBoundingClientRect: () => ({ top: 0, right: 0, left: 0, bottom: 0 }),
    } as HTMLElement,
  }

  beforeEach(() => {
    result = null
  })

  it('should call the callback when mouseUp is released outside', async () => {
    renderHook(
      () => useOutsideRectClick(ref, () => {
        result = 'clicked outside'
      })
    )

    act(() => {
      fireEvent.mouseDown(document, { clientX: 10, clientY: 10 })
      fireEvent.mouseUp(document, { clientX: 10, clientY: 10 })
    })

    assert.equal(result, 'clicked outside')
  })

  it('should not call the callback when mouseUp is released inside', async () => {
    renderHook(
      () => useOutsideRectClick(ref, () => {
        result = 'clicked inside'
      })
    )

    act(() => {
      fireEvent.mouseDown(document, { clientX: 0, clientY: 0 })
      fireEvent.mouseUp(document, { clientX: 0, clientY: 0 })
    })

    assert.isNull(result)
  })

  it('should call the callback when touchEnd is released outside', async () => {
    renderHook(
      () => useOutsideRectClick(ref, () => {
        result = 'clicked outside'
      })
    )

    act(() => {
      fireEvent.touchStart(document, { changedTouches: [ { clientX: 10, clientY: 10 } ] })
      fireEvent.touchEnd(document, { changedTouches: [ { clientX: 10, clientY: 10 } ] })
    })

    assert.equal(result, 'clicked outside')
  })

  it('should not call the callback when touchEnd is released inside', async () => {
    renderHook(
      () => useOutsideRectClick(ref, () => {
        result = 'clicked inside'
      })
    )

    act(() => {
      fireEvent.touchStart(document, { changedTouches: [ { clientX: 0, clientY: 0 } ] })
      fireEvent.touchEnd(document, { changedTouches: [ { clientX: 0, clientY: 0 } ] })
    })

    assert.isNull(result)
  })
})
