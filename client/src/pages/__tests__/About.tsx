import * as React from 'react'
import { render } from 'react-testing-library'
import About from '../About'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<About {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
