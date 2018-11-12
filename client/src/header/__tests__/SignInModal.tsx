jest.mock('../../utils/api')
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))
import { navigate } from '@reach/router'
import * as React from 'react'
import { fireEvent, getByTestId, render, waitForElement } from 'react-testing-library'
import api from '../../utils/api'
import generate from '../../utils/generate'
import SignInModal from '../SignInModal'

beforeEach(() => (api as any).reset())

const setup = async (propOverrides?: {}) => {
  const props = Object.assign(
    {
      initialOpen: true,
    },
    propOverrides
  )

  const body = document.querySelector('body') as HTMLBodyElement
  const portal = document.createElement('div')
  portal.setAttribute('id', 'portal')
  portal.setAttribute('data-testid', 'portal')
  body.appendChild(portal)

  await waitForElement(() => getByTestId(body, 'portal'))

  const utils = render(<SignInModal {...props}>Open Modal</SignInModal>)

  await waitForElement(() => utils.getByLabelText(/Email/i))
  const emailInput = utils.getByLabelText(/Email/i) as HTMLInputElement
  const passwordInput = utils.getByLabelText(/Password/i) as HTMLInputElement
  const submitButton = utils.getByText(/Sign In/i) as HTMLButtonElement
  return {
    emailInput,
    passwordInput,
    props,
    submitButton,
    ...utils,
  }
}

it('should submit the form with the correct values', async () => {
  const { emailInput, passwordInput, submitButton } = await setup()
  const fakeForm = generate.signInForm()
  fireEvent.change(emailInput, { target: { value: fakeForm.email } })
  fireEvent.change(passwordInput, { target: { value: fakeForm.password } })
  expect(api.auth.login).toBeCalledTimes(0)

  fireEvent.submit(submitButton)

  expect(api.auth.login).toHaveBeenCalledTimes(1)
  expect(api.auth.login).toHaveBeenCalledWith({ email: fakeForm.email, password: fakeForm.password })
})

it('should redirect to the liaison page if successful, reset the password input, and close the modal', async () => {
  const { emailInput, passwordInput, submitButton, queryByLabelText, rerender } = await setup()
  const fakeForm = generate.signInForm()
  emailInput.value = fakeForm.email
  passwordInput.value = fakeForm.password
  const loginMock = api.auth.login as any
  loginMock.mockImplementationOnce(() => Promise.resolve({ response: 'success!' }))

  fireEvent.submit(submitButton)
  rerender(<SignInModal />) // flush effect

  expect(api.auth.login).toBeCalledTimes(1)
  expect(navigate).toBeCalledTimes(1)
  expect(passwordInput.value).toBe('')
  await waitForElement(() => !queryByLabelText(/Email/i))
  expect(navigate).toBeCalledWith('/liaisons')
})

it('should show an error if the user is not authenticated and clear out the password input', async () => {
  const { emailInput, passwordInput, submitButton, getByText, queryByText } = await setup()
  const fakeForm = generate.signInForm()
  emailInput.value = fakeForm.email
  passwordInput.value = fakeForm.password
  const loginMock = api.auth.login as any
  const fakeErrorMessage = 'Credentials failed'
  loginMock.mockImplementationOnce(() => Promise.reject({ response: { data: { message: fakeErrorMessage } } }))

  expect(loginMock).toBeCalledTimes(0)
  expect(queryByText(fakeErrorMessage)).toBeNull()
  fireEvent.submit(submitButton)
  expect(loginMock).toHaveBeenCalledTimes(1)
  await waitForElement(() => getByText(fakeErrorMessage))
  expect(passwordInput.value).toBe('')
})
