import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'
import LinkGroup from '../LinkGroup'

interface IManageBackgroundProps {
  liRef: any
  navRef: any
  setCoords: any
  setOpen: any
}

const setup = (propOverrides?: {}) => {
  const props = Object.assign({}, propOverrides)

  const manageBackground: IManageBackgroundProps = {
    liRef: {},
    navRef: {},
    setCoords: jest.fn(),
    setOpen: jest.fn(),
  }

  const utils = render(<LinkGroup title="test" manageBackground={manageBackground} />)
  const liNode = utils.getByText('test')

  return {
    liNode,
    manageBackground,
    ...utils,
  }
}

/* it('should show dropdown when LinkGroup on mouseEnter', () => {
  const { manageBackground, liNode } = setup()
  fireEvent.mouseEnter(liNode, { relatedTarget: liNode.firstChild })
  expect(manageBackground.setOpen).toHaveBeenCalledWith(true)
}) */
it('should hide the dropdown on mouseLeave', () => {
  const { manageBackground, liNode } = setup()
  fireEvent.mouseLeave(liNode)
  expect(manageBackground.setOpen).toHaveBeenCalledWith(false)
})
it('should show dropdown when LinkGroup on focus', () => {
  const { manageBackground, liNode } = setup()
  fireEvent.focus(liNode)
  expect(manageBackground.setOpen).toHaveBeenCalledWith(true)
})
it('should hide the dropdown on blur', () => {
  const { manageBackground, liNode } = setup()
  fireEvent.blur(liNode)
  expect(manageBackground.setOpen).toHaveBeenCalledWith(false)
})
it('should close dropdown when LinkGroup is clicked ', () => {
  const { manageBackground, liNode } = setup()
  fireEvent.click(liNode)
  expect(manageBackground.setOpen).toHaveBeenCalledWith(false)
})
