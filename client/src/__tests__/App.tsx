import * as React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import App from '../App'

afterEach(cleanup)

it('should not break', () => {
  render(<App />)
})
