import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'
import App from '../App'

it('should not break', () => {
  render(<App />)
})
