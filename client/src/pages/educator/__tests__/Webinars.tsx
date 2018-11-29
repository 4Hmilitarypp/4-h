import * as React from 'react'
import { render } from 'react-testing-library'
import Webinars from '../Webinars'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Webinars {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
