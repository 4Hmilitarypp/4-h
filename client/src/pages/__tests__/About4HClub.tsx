import * as React from 'react'
import { render } from 'react-testing-library'
import About4HClub from '../About4HClub'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<About4HClub {...props} />)
  return {
    ...utils,
  }
}

it('should render', () => {
  setup()
})
