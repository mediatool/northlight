import React from 'react'
import { assert, expect } from 'chai'
import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from '@testing-library/react'
import { ActionMeta } from 'chakra-react-select'
import {
  MediatoolThemeProvider,
  Option,
  TagsInput,
} from '../../../../lib/components'

const { isOk } = assert

const getTagsInput = (customProps = {}) => {
  const props = {
    'data-testid': 'tags-input-test-id',
    ...customProps,
  }

  return (
    <MediatoolThemeProvider>
      <TagsInput { ...props } />
    </MediatoolThemeProvider>
  )
}

const getTagsInputField = () =>
  screen.getByTestId('tags-input-test-id').children[0].children[2].children[0]
    .children[1].children[0]

describe('Tags-input', () => {
  it('Renders Properly', () => {
    render(getTagsInput())
    const tagsInput = getTagsInputField()
    isOk(tagsInput)
  })

  it('Accepts user input', async () => {
    render(getTagsInput())
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, 'myTag')
    expect(screen.getByDisplayValue('myTag')).to.deep.equal(tagsInput)
  })

  it('Creates a new tag on enter', async () => {
    let values = null
    render(
      getTagsInput({
        onChange: (_: unknown, event: ActionMeta<Option>) => {
          values = event?.option?.value
        },
      })
    )
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, 'myTag{enter}')
    expect(values).to.equal('myTag')
  })

  it('Creates a new tag on ,', async () => {
    let values = null
    render(
      getTagsInput({
        onChange: (_: unknown, event: ActionMeta<Option>) => {
          values = event?.option?.value
        },
      })
    )
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, 'myTag,')
    expect(values).to.equal('myTag')
  })

  it('Creates a new tag on tab', async () => {
    let values = null
    render(
      getTagsInput({
        onChange: (_: unknown, event: ActionMeta<Option>) => {
          values = event?.option?.value
        },
      })
    )
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, 'myTag{tab}')
    expect(values).to.equal('myTag')
  })

  it('Does not create a new tag if input is empty', async () => {
    let values = null
    render(
      getTagsInput({
        onChange: (_: unknown, event: ActionMeta<Option>) => {
          values = event?.option?.value
        },
      })
    )
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, '{enter},')
    expect(values).to.equal(null)
  })

  it('Does not create the same tag twice', async () => {
    let timesCalled = 0
    render(
      getTagsInput({
        onChange: () => {
          timesCalled += 1
        },
      })
    )
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, 'myTag{enter}')
    await user.type(tagsInput, 'myTag{enter}')
    await user.type(tagsInput, 'myTag,')
    await user.type(tagsInput, 'myTag{tab}')
    expect(timesCalled).equal(1)
  })

  it('Does not create a tag with input , on blur', async () => {
    let values = null
    render(
      getTagsInput({
        onChange: (_: unknown, event: ActionMeta<Option>) => {
          values = event?.option?.value
        },
      })
    )
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, ',')
    fireEvent.blur(tagsInput)
    expect(values).to.equal(null)
  })

  it('Clears input on blur', async () => {
    render(getTagsInput())
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, 'randomInput')
    fireEvent.blur(tagsInput)
    expect(tagsInput).property('value').to.equal('')
  })

  it('Removes option on backspace', async () => {
    let action = null
    render(
      getTagsInput({
        onChange: (_: unknown, event: ActionMeta<Option>) => {
          action = event
        },
      })
    )
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.type(tagsInput, 'myTag{enter}')
    await user.type(tagsInput, '{backspace}')
    expect(action).to.deep.equal({
      action: 'pop-value',
      name: undefined,
      removedValue: { value: 'myTag', label: 'myTag' },
    })
  })

  it('Allows values from suggestions dropdown', async () => {
    let action = null
    render(
      getTagsInput({
        onChange: (_: unknown, event: ActionMeta<Option>) => {
          action = event
        },
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      })
    )
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.click(tagsInput)
    await user.keyboard('{arrowdown}')
    await user.keyboard('{enter}')
    expect(action).to.deep.equal({
      action: 'select-option',
      name: undefined,
      option: { value: '2', label: 'Option 2' },
    })
  })

  it('Focuses on tab', async () => {
    render(getTagsInput({}))
    const tagsInput = getTagsInputField()
    const user = userEvent.setup()
    await user.tab()
    expect(tagsInput).to.deep.equal(document.activeElement)
  })
})
