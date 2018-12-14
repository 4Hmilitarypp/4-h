import * as React from 'react'
import { render } from 'react-testing-library'
import EducatorHome from '../EducatorHome'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<EducatorHome {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
