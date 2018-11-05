import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'
import LinkGroup from '../LinkGroup'

interface IManageBackgroundProps {
  liRef: any
  navRef: any
  setCoords: any
  setOpen: any
}

it('should render', () => {
  const manageBackground: IManageBackgroundProps = {
    liRef: {},
    navRef: {},
    setCoords: jest.fn(),
    setOpen: jest.fn(),
  }
  render(<LinkGroup title="hi" manageBackground={manageBackground} />)
})
