import * as React from 'react'
import { render } from 'react-testing-library'
import Research from '../Research'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Research {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
