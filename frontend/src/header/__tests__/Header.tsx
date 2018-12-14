import * as React from 'react'
import { fireEvent, render, wait } from 'react-testing-library'
import Header from '../Header'

const setup = (propOverrides?: {}) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Header />)
  const educatorsLinkGroup = utils.getByText(/Educators/).parentElement as HTMLElement

  return {
    ...utils,
    educatorsLinkGroup,
  }
}

it('should not show dropdown initially', () => {
  const { educatorsLinkGroup } = setup()
  expect(educatorsLinkGroup.classList).not.toContain('trigger-enter')
})
it('should show dropdown when Link Group on focus and hide on blur', () => {
  const { educatorsLinkGroup } = setup()
  fireEvent.focus(educatorsLinkGroup)
  expect(educatorsLinkGroup.classList).toContain('trigger-enter')
  fireEvent.blur(educatorsLinkGroup)
  expect(educatorsLinkGroup.classList).not.toContain('trigger-enter')
})
it('should show dropdown when Link Group on mouseEnter and hide on mouseLeave', () => {
  const { educatorsLinkGroup } = setup()
  fireEvent.mouseEnter(educatorsLinkGroup)
  expect(educatorsLinkGroup.classList).toContain('trigger-enter')
  fireEvent.mouseLeave(educatorsLinkGroup)
  expect(educatorsLinkGroup.classList).not.toContain('trigger-enter')
})
it('should close dropdown when Link Group is clicked ', () => {
  const { educatorsLinkGroup } = setup()
  fireEvent.focus(educatorsLinkGroup)
  expect(educatorsLinkGroup.classList).toContain('trigger-enter')
  fireEvent.click(educatorsLinkGroup)
  expect(educatorsLinkGroup.classList).not.toContain('trigger-enter')
})
