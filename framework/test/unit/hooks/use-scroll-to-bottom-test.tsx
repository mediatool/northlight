import { renderHook } from '@testing-library/react'
import { describe, it } from 'mocha'
import { assert } from 'chai'
import { RefObject } from 'react'
import { useFakeTimers } from 'sinon'
import { useScrollToBottom } from '../../../lib/hooks/use-scroll-to-bottom'

describe('useScrollToBottom', () => {
  let clock: any
  before(() => {
    clock = useFakeTimers()
  })

  after(() => {
    clock.restore()
  })
  it('should set scrolltop to difference between scrollheight and clientheight', async () => {
    const scrollView = {
      current: {
        scrollTop: 0,
        scrollHeight: 100,
        clientHeight: 50,
      } as HTMLDivElement,
    } as RefObject<HTMLDivElement>

    const messages = [
      {
        content: 'hello world',
        role: 'foo',
      },
    ]

    renderHook(
      (v) => useScrollToBottom(v.scrollView, v.messages),
      { initialProps: { scrollView, messages } }
    )

    assert.equal(scrollView.current?.scrollTop, 0)

    clock.runAll()
    assert.equal(scrollView.current?.scrollTop, 50)
  })
})
