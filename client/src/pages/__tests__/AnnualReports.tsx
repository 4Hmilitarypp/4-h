import * as React from 'react'
import { render } from 'react-testing-library'
import AnnualReports from '../AnnualReports'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<AnnualReports {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
