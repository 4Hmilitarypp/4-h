jest.mock('utils/api')
import * as React from 'react'
import { cleanup, render } from 'react-testing-library'
import restApi from 'utils/api'
import App from '../App'

beforeEach(() => (restApi as any).reset())
afterEach(cleanup)

/* const setup = propOverrides => {
  const props = Object.assign({}, propOverrides)

  return {
    props,
  }
} */
// Need to figure out how I want to mock the api here...

describe('rendering', () => {
  it('Renders <App/>', () => {
    render(<App />)
  })
  it('contains correct children', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('app')).toBeTruthy()
  })
})

// describe('interaction', () => {})

// describe('lifecycle', () => {})
