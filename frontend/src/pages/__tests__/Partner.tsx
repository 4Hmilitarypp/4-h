import * as React from 'react'
import { fireEvent, flushEffects, render } from 'react-testing-library'
import Partner from '../Partner'

let nativeScrollTo: any

afterAll(() => (window.scrollTo = nativeScrollTo))

interface IProps {
  navigate?: (path: string) => null
  slug?: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign(
    {
      slug: 'army',
    },
    propOverrides
  )
  const mockScrollTo = jest.fn()
  nativeScrollTo = window.scrollTo
  window.scrollTo = mockScrollTo

  const utils = render(<Partner {...props} />)
  flushEffects()
  return {
    ...utils,
    mockScrollTo,
  }
}

it('should render and immediately scroll to 0, 0', () => {
  const { mockScrollTo } = setup()
  expect(mockScrollTo).toHaveBeenCalledTimes(1)
  expect(mockScrollTo).toHaveBeenCalledWith(0, 0)
})

it('should not display partner not found if slug exists', () => {
  const { queryByText } = setup({ slug: 'army' })
  expect(queryByText(/Partner Not Found/i)).toBeNull()
})

it('should show partner not found if the slug does not exist', () => {
  const { getByText } = setup({ slug: 'non-existing-partner' })
  expect(getByText(/Partner Not Found/i)).toBeDefined()
})

it('should navigate to /partners if the back button is pressed', () => {
  const mockNavigate = jest.fn()
  const { getByText } = setup({ navigate: mockNavigate })
  fireEvent.click(getByText(/Back To Partners/i))
  expect(mockNavigate).toHaveBeenCalledTimes(1)
  expect(mockNavigate).toHaveBeenCalledWith('/partners')
})
