import * as React from 'react'
import { render } from 'react-testing-library'
import Educator from '../Educator'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Educator {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
