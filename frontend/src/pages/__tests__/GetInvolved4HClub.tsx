import * as React from 'react'
import { render } from 'react-testing-library'
import GetInvolved4HClub from '../GetInvolved4HClub'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<GetInvolved4HClub {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
