import TextArea from 'components/TextArea'
import * as React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

afterEach(cleanup)

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<TextArea aria-label="test-textArea" {...props} />)
  const textArea = utils.getByLabelText('test-textArea') as HTMLTextAreaElement
  return {
    props,
    textArea,
    ...utils,
  }
}

describe('render', () => {
  it('should render with the value given', () => {
    const value = 'Its a good day!'
    const { textArea } = setup({ value })
    expect(textArea.value).toBe(value)
  })
})

describe('interaction', () => {
  it('should allow valid textArea', () => {
    const { textArea } = setup()
    fireEvent.change(textArea, { target: { value: '1' } })
    expect(textArea.value).toEqual('1')
    fireEvent.change(textArea, { target: { value: 'This is a big test' } })
    expect(textArea.value).toBe('This is a big test')
  })
})
