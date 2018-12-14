import * as React from 'react'
import { flushEffects, render } from 'react-testing-library'
import { useFlash, useHash } from '../hooks'

let nativeScrollIntoView: any

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
  Element.prototype.scrollIntoView = nativeScrollIntoView
})

const setup = () => {
  const mockScrollIntoView = jest.fn(() => null)
  nativeScrollIntoView = Element.prototype.scrollIntoView
  Element.prototype.scrollIntoView = mockScrollIntoView
  return {
    mockScrollIntoView,
  }
}

describe('useFlash', () => {
  it('should timeout after the set time', async () => {
    const TestElement = () => {
      const { submitted } = useFlash({ initialSubmitted: true, timeoutLength: 50 })
      return <p>{submitted ? 'true' : 'false'}</p>
    }
    const { getByText } = render(<TestElement />)
    expect(getByText('true')).toBeDefined()
    flushEffects() // Flush Effect to run "didMount"
    jest.runAllTimers()
    expect(getByText('false')).toBeDefined()
  })
})

describe('useHash', () => {
  it('should route when the hash is the same', async () => {
    const { mockScrollIntoView } = setup()
    const TestElement = () => {
      const fakeHash = '#go'
      const fakeRef = React.useRef<HTMLDivElement>(null)
      const fakeLocation = { hash: fakeHash }
      useHash({ refToFocus: fakeRef, hash: fakeHash, location: fakeLocation })
      return <div ref={fakeRef as any} />
    }
    render(<TestElement />)
    expect(mockScrollIntoView).toHaveBeenCalledTimes(0)
    flushEffects() // Flush Effect to run "didMount"
    expect(mockScrollIntoView).toHaveBeenCalledTimes(1)
  })
})
