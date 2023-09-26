import { renderHook, waitFor } from '@testing-library/react'
import { describe, it } from 'mocha'
import { assert } from 'chai'
import { useLoadingMessage } from '../../../lib/hooks/use-loading-message'

describe('useLoadingMessage', () => {
  it('returns the value and adds a dot to it every 300 ms', async () => {
    const { result } = renderHook(
      (v) => useLoadingMessage(v),
      { initialProps: 'loading' }
    )

    assert.equal(result.current, 'loading.')

    await waitFor(() => {
      assert.equal(result.current, 'loading..')
    }, { interval: 350 })

    await waitFor(() => {
      assert.equal(result.current, 'loading...')
    }, { interval: 350 })
  })
})
