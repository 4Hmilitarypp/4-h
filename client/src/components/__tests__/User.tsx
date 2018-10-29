import * as faker from 'faker'
import * as React from 'react'
import { cleanup, render, wait } from 'react-testing-library'
jest.mock('utils/api')
import restApi from 'utils/api'
import { IApiError } from 'utils/types'
import User from '../User'

beforeEach(() => (restApi as any).reset())
afterEach(cleanup)

async function setup() {
  let controller: any
  const children = jest.fn(c => {
    controller = c
    return null
  })
  render(<User>{children}</User>)
  children.mockClear()
  await wait(() => expect(children).toHaveBeenCalledTimes(1))
  children.mockClear()
  return { controller, children }
}

describe('interaction', () => {
  it('should rerender with user when login is clicked', async () => {
    const { controller, children } = await setup()
    const fakeUser = { username: faker.internet.userName() }
    const loginMock = restApi.auth.login as any
    loginMock.mockImplementationOnce(() => Promise.resolve({ user: fakeUser }))
    const form = { username: faker.internet.userName(), password: faker.internet.password() }

    controller.login(form)

    expect(loginMock).toHaveBeenCalledTimes(1)
    expect(loginMock).toHaveBeenCalledWith(form)

    await wait(() => expect(children).toHaveBeenCalledTimes(2))

    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        error: undefined,
        pending: true,
        user: undefined,
      })
    )
    expect(children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        error: undefined,
        pending: false,
        user: fakeUser,
      })
    )
  })

  it('should rerender with errors when login fails', async () => {
    const { controller, children } = await setup()

    const fakeError = { message: 'failure' }
    const loginMock = restApi.auth.login as any
    loginMock.mockImplementationOnce(() => Promise.reject(fakeError))

    controller.login({ username: 'bad', password: 'no better' }).catch((err: IApiError) => err)

    expect(loginMock).toHaveBeenCalledTimes(1)
    await wait(() => expect(children).toHaveBeenCalledTimes(2))
    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        error: undefined,
        pending: true,
        user: undefined,
      })
    )
    expect(children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        error: fakeError.message,
        pending: false,
        user: undefined,
      })
    )
  })

  it('should rerender with undefined user when logout is clicked', async () => {
    const { controller, children } = await setup()

    controller.logout()

    expect(restApi.auth.logout).toHaveBeenCalledTimes(1)
    await wait(() => expect(children).toHaveBeenCalledTimes(2))
    expect(children).toHaveBeenCalledWith(
      expect.objectContaining({
        error: undefined,
        pending: true,
        user: undefined,
      })
    )
    expect(children).toHaveBeenLastCalledWith(
      expect.objectContaining({
        error: undefined,
        pending: false,
        user: undefined,
      })
    )
  })

  it('should return the user if they registered successfully', async () => {
    const { controller } = await setup()
    const fakeUser = { username: faker.internet.userName() }
    const registerMock = restApi.auth.register as any
    registerMock.mockImplementationOnce(() => Promise.resolve({ user: fakeUser }))
    const form = { username: faker.internet.userName(), password: faker.internet.password() }

    const registerResult = await controller.register(form)

    expect(registerMock).toHaveBeenCalledTimes(1)
    expect(registerMock).toHaveBeenCalledWith(form)
    expect(registerResult).toEqual(expect.objectContaining({ user: fakeUser }))
  })
})

it('should rerender with errors when register fails', async () => {
  const { controller, children } = await setup()

  const fakeError = { message: 'failure' }
  const registerMock = restApi.auth.register as any
  registerMock.mockImplementationOnce(() => Promise.reject(fakeError))

  controller.register({ username: 'bad', password: 'no better' }).catch((err: IApiError) => err)

  expect(registerMock).toHaveBeenCalledTimes(1)
  await wait(() => expect(children).toHaveBeenCalledTimes(2))
  expect(children).toHaveBeenCalledWith(
    expect.objectContaining({
      error: undefined,
      pending: true,
      user: undefined,
    })
  )
  expect(children).toHaveBeenLastCalledWith(
    expect.objectContaining({
      error: fakeError.message,
      pending: false,
      user: undefined,
    })
  )
})

describe('lifecycle', () => {
  it('should get user on mount', async () => {
    await setup()
    const meMock = restApi.auth.me as any
    expect(meMock).toHaveBeenCalledTimes(1)
  })
})
