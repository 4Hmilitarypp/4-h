import Input from 'components/Input'
import * as React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

afterEach(cleanup)

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Input aria-label="test-input" {...props} />)
  const input = utils.getByLabelText('test-input') as HTMLInputElement
  return {
    input,
    props,
    ...utils,
  }
}

describe('render', () => {
  it('should render with the value given', () => {
    const value = 'Its a good day!'
    const { input } = setup({ value })
    expect(input.value).toBe(value)
  })
})

describe('interaction', () => {
  it('should allow valid input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '1' } })
    expect(input.value).toEqual('1')
    fireEvent.change(input, { target: { value: 'This is a big test' } })
    expect(input.value).toBe('This is a big test')
  })
})
