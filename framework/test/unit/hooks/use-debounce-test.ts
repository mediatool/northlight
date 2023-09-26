import { renderHook, waitFor } from '@testing-library/react'
import { describe, it } from 'mocha'
import { assert } from 'chai'
import { act } from 'react-dom/test-utils'
import { useDebounce } from '../../../lib/hooks/use-debounce'

describe('useDebounce', () => {
  it('debounces the value with the timer set', async () => {
    const { result, rerender } = renderHook(
      (v) => useDebounce(v, 5),
      { initialProps: 1 }
    )

    assert.equal(result.current, 1)

    act(() => {
      rerender(2)
    })

    await waitFor(() => {
      assert.equal(result.current, 1)
    }, { interval: 5 })

    await waitFor(() => {
      assert.equal(result.current, 2)
    }, { interval: 6 })
  })
})
