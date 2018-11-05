import * as React from 'react'
import { render, wait } from 'react-testing-library'
import { useFlash, useHash } from '../hooks'

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

describe('useFlash', () => {
  it('should timeout after the set time', async () => {
    const TestElement = () => {
      const { submitted } = useFlash({ initialSubmitted: true, timeoutLength: 50 })
      return <p>{submitted ? 'true' : 'false'}</p>
    }
    const { getByText, rerender } = render(<TestElement />)
    expect(getByText('true')).toBeDefined()
    rerender(<TestElement />)
    jest.runAllTimers()
    expect(getByText('false')).toBeDefined()
  })
})

describe('useHash', () => {
  it('should route when the hash is the same', async () => {
    const mockScrollIntoView = jest.fn(() => null)
    Element.prototype.scrollIntoView = mockScrollIntoView
    const TestElement = () => {
      const fakeHash = '#go'
      const fakeRef = React.useRef<HTMLDivElement>()
      const fakeLocation = { hash: fakeHash }
      useHash({ refToFocus: fakeRef, hash: fakeHash, location: fakeLocation })
      return <div ref={fakeRef as any} />
    }
    const { rerender } = render(<TestElement />)
    expect(mockScrollIntoView).toHaveBeenCalledTimes(0)
    rerender(<TestElement />)
    expect(mockScrollIntoView).toHaveBeenCalledTimes(1)
  })
})
