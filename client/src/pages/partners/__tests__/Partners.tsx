import * as React from 'react'
import { render } from 'react-testing-library'
import Partners from '../Partners'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Partners {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
