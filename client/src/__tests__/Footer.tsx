import * as React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import Footer from '../Footer'

afterEach(cleanup)

it('should not break', () => {
  render(<Footer />)
})
