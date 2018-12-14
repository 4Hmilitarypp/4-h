import * as React from 'react'
import { render } from 'react-testing-library'
import Photos from '../Photos'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Photos {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
