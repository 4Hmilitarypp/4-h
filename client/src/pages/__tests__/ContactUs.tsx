import * as React from 'react'
import { fireEvent, render, waitForElement } from 'react-testing-library'
jest.mock('../../utils/api')
import api from '../../utils/api'
import generate from '../../utils/generate'
import ContactUs from '../ContactUs'

beforeEach(() => (api as any).reset())

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<ContactUs {...props} />)
  const nameInput = utils.getByLabelText(/Your Name/i) as HTMLInputElement
  const emailInput = utils.getByLabelText(/Your Email/i) as HTMLInputElement
  const messageTextArea = utils.getByLabelText(/Your Message/i) as HTMLInputElement
  const submitButton = utils.getByText(/Send Message/i) as HTMLButtonElement
  return {
    emailInput,
    messageTextArea,
    nameInput,
    props,
    submitButton,
    ...utils,
  }
}

describe('interaction', () => {
  it('should submit the form with the correct values', () => {
    const { getByText, emailInput, messageTextArea, nameInput, submitButton } = setup()

    const fakeEmail = generate.contactUsEmail()

    fireEvent.change(nameInput, { target: { value: fakeEmail.name } })
    fireEvent.change(emailInput, { target: { value: fakeEmail.email } })
    fireEvent.change(messageTextArea, { target: { value: fakeEmail.message } })

    fireEvent.submit(submitButton)
    expect(api.emails.create).toHaveBeenCalledTimes(1)
    expect(api.emails.create).toHaveBeenCalledWith({
      email: fakeEmail.email,
      message: fakeEmail.message,
      name: fakeEmail.name,
    })
    expect(getByText(/Email sent successfully/i)).toBeDefined()
  })
  it('should show an error if the api call was unsuccessful', async () => {
    const { getByText, queryByText, submitButton, emailInput, messageTextArea, nameInput } = setup()
    const createMock = api.emails.create as any
    const fakeEmail = generate.contactUsEmail()
    emailInput.value = fakeEmail.name
    messageTextArea.value = fakeEmail.email
    nameInput.value = fakeEmail.message
    const fakeErrorMessage = 'Error!'
    createMock.mockImplementationOnce(() => Promise.reject({ response: { data: { message: fakeErrorMessage } } }))

    expect(queryByText(fakeErrorMessage)).toBeNull()
    fireEvent.submit(submitButton)
    expect(api.emails.create).toHaveBeenCalledTimes(1)
    await waitForElement(() => getByText(fakeErrorMessage))
  })

  it('should show an error if the required fields were not entered', async () => {
    const { getByText, submitButton, emailInput, nameInput, messageTextArea } = setup()
    emailInput.value = ''
    nameInput.value = ''
    messageTextArea.value = ''

    fireEvent.submit(submitButton)
    expect(api.emails.create).toHaveBeenCalledTimes(0)
    await waitForElement(() => getByText('All required fields not met.'))
  })

  it('should close the flash when the close button is clicked', async () => {
    const { getByText, queryByText, submitButton, emailInput, nameInput, messageTextArea } = setup()
    emailInput.value = ''
    nameInput.value = ''
    messageTextArea.value = ''

    fireEvent.submit(submitButton)
    await waitForElement(() => getByText('All required fields not met.'))
    fireEvent.click(getByText('X'))
    await waitForElement(() => !queryByText('All required fields not met.'))
  })
})
