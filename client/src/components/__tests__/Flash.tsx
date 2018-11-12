import * as React from 'react'
import { render } from 'react-testing-library'
import Flash from '../Flash'

const setup = ({ submitted, successMessage }: { submitted: boolean; successMessage?: string }) => {
  const defaultMessage = 'Success!'
  const closeClickedSpy = jest.fn()
  const utils = render(<Flash submitted={submitted} successMessage={successMessage} closeClicked={closeClickedSpy} />)
  return {
    ...utils,
    closeClickedSpy,
    defaultMessage,
  }
}

it('should render default success message', () => {
  const defaultMessage = 'Success!'
  const { getByText } = setup({ submitted: true })
  expect(getByText(defaultMessage)).toBeDefined()
})

it('should render given success message', () => {
  const message = 'good!'
  const { getByText } = setup({ submitted: true, successMessage: message })
  expect(getByText(message)).toBeDefined()
})

it('should not render default message if it is closed', () => {
  const { queryByText, defaultMessage } = setup({ submitted: true })
  expect(queryByText(defaultMessage)).toBeDefined()
})
