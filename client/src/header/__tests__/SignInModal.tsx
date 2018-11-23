jest.mock('../../utils/api')
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))
import { navigate } from '@reach/router'
import * as React from 'react'
import {
  fireEvent,
  flushEffects,
  getByTestId as globalGetByTestId,
  render,
  waitForElement,
} from 'react-testing-library'
import { RenderResult } from 'react-testing-library/typings/index'
import api from '../../utils/api'
import generate from '../../utils/generate'
import SignInModal from '../SignInModal'

interface IProps {
  initialOpen?: boolean
  children?: string
}

interface IFullUtils extends RenderResult {
  emailInput: HTMLInputElement
  passwordInput: HTMLInputElement
  submitButton: HTMLButtonElement
  props: IProps
}

beforeEach(() => (api as any).reset())

beforeAll(async () => {
  const body = document.querySelector('body') as HTMLBodyElement
  const portal = document.createElement('div')
  portal.setAttribute('id', 'portal')
  portal.setAttribute('data-testid', 'portal')
  body.appendChild(portal)

  await waitForElement(() => globalGetByTestId(body, 'portal'))
})

const setup = (propOverrides?: IProps) => {
  const props = Object.assign(
    {
      children: 'Open Modal',
      initialOpen: true,
    },
    propOverrides
  )

  const utils = render(<SignInModal {...props} />)
  if (!props.initialOpen) {
    return utils
  }
  utils.getByLabelText(/Email/i)
  // await waitForElement(() => utils.getByLabelText(/Email/i))
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

it('should submit the form with the correct values', () => {
  const { emailInput, passwordInput, submitButton } = setup() as IFullUtils
  const fakeForm = generate.signInForm()
  fireEvent.change(emailInput, { target: { value: fakeForm.email } })
  fireEvent.change(passwordInput, { target: { value: fakeForm.password } })
  expect(api.auth.login).toBeCalledTimes(0)

  fireEvent.submit(submitButton)

  expect(api.auth.login).toHaveBeenCalledTimes(1)
  expect(api.auth.login).toHaveBeenCalledWith({ email: fakeForm.email, password: fakeForm.password })
})

it('should redirect to the liaison page if successful, reset the password input, and close the modal', async () => {
  const { emailInput, passwordInput, submitButton, queryByLabelText } = setup() as IFullUtils
  const fakeForm = generate.signInForm()
  emailInput.value = fakeForm.email
  passwordInput.value = fakeForm.password
  const loginMock = api.auth.login as any
  loginMock.mockImplementationOnce(() => Promise.resolve({ response: 'success!' }))

  fireEvent.submit(submitButton)

  expect(api.auth.login).toBeCalledTimes(1)
  expect(navigate).toBeCalledTimes(1)
  flushEffects() // Flush Effects for setOn
  await waitForElement(() => !queryByLabelText(/Email/i))
  expect(passwordInput.value).toBe('')
  expect(navigate).toBeCalledWith('/liaisons')
})

it('should show an error if the user is not authenticated and clear out the password input', async () => {
  const { emailInput, passwordInput, submitButton, getByText, queryByText } = setup() as IFullUtils
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

it('should show an error that all required fields are not met and then close it after timers run', async () => {
  jest.useFakeTimers()
  const { emailInput, passwordInput, submitButton, getByText, queryByText } = setup() as IFullUtils
  const fakeForm = generate.signInForm()
  const requiredErrorMessage = 'All required fields not met.'
  emailInput.value = fakeForm.email
  passwordInput.value = ''
  const loginMock = api.auth.login as any
  expect(loginMock).toBeCalledTimes(0)
  expect(queryByText(requiredErrorMessage)).toBeNull()
  fireEvent.submit(submitButton)
  expect(loginMock).toHaveBeenCalledTimes(0)
  await waitForElement(() => getByText(requiredErrorMessage))
  jest.runAllTimers()
  expect(queryByText(requiredErrorMessage)).toBeNull()
  jest.useRealTimers()
})

it('should open the modal with the children button is clicked', () => {
  const buttonText = 'Sign In Now'
  const { queryByLabelText, getByText } = setup({ initialOpen: false, children: buttonText })
  expect(queryByLabelText(/Email/)).toBeNull()
  const openButton = getByText(buttonText)
  fireEvent.click(openButton)
  expect(queryByLabelText(/Email/)).toBeDefined()
})
