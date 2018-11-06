import * as React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import Flash from '../Flash'

afterEach(cleanup)

const setup = ({ isOpen, successMessage }: { isOpen: boolean; successMessage?: string }) => {
  const defaultMessage = 'Success!'
  const closeClickedSpy = jest.fn()
  const utils = render(<Flash isOpen={isOpen} successMessage={successMessage} closeClicked={closeClickedSpy} />)
  return {
    ...utils,
    closeClickedSpy,
    defaultMessage,
  }
}

it('should render default success message', () => {
  const defaultMessage = 'Success!'
  const { getByText } = setup({ isOpen: true })
  expect(getByText(defaultMessage)).toBeDefined()
})

it('should render given success message', () => {
  const message = 'good!'
  const { getByText } = setup({ isOpen: true, successMessage: message })
  expect(getByText(message)).toBeDefined()
})

it('should not render default message if it is closed', () => {
  const { queryByText, defaultMessage } = setup({ isOpen: true })
  expect(queryByText(defaultMessage)).toBeDefined()
})
