import * as React from 'react'
import { render } from 'react-testing-library'
import Educator from '../Educator'

interface IProps {
  children: any
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Educator {...props} />)
  return {
    ...utils,
  }
}

it('should render the children given', () => {
  const { getByText } = setup({ children: <h1>Hello</h1> })
  expect(getByText(/Hello/i)).toBeDefined()
})
