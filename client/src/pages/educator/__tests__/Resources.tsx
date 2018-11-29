import * as React from 'react'
import { render } from 'react-testing-library'
import Resources from '../Resources'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Resources {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
