import * as React from 'react'
import { fireEvent, flushEffects, render } from 'react-testing-library'
import { IWebinar } from '../../../../types'
import generate from '../../../../utils/generate'
import Webinar from '../Webinar'

interface IProps {
  webinar?: IWebinar
}

const setup = (propOverrides?: IProps) => {
  const fakeWebinar = generate.webinar(100)
  const props = Object.assign(
    {
      webinar: { ...fakeWebinar },
    },
    propOverrides
  )

  const utils = render(<Webinar {...props} />)
  return {
    ...utils,
  }
}

it('should not have an expand button if there are not very much text', () => {
  const { queryByText } = setup()
  flushEffects() // flush effects to allow the heigh comparison to be done
  expect(queryByText(/expand/i)).toBeNull()
})
it('should not have an expand button if there is a lot of text.', () => {
  const webinar = generate.webinar(1500)
  const { getByText } = setup({ webinar })
  flushEffects() // flush effects to allow the heigh comparison to be done
  expect(getByText(/expand/i)).toBeDefined()
})
it('should change expand to collapse when expand is clicked and then change back.', () => {
  const webinar = generate.webinar(1500)
  const { getByText, queryByText } = setup({ webinar })
  flushEffects() // flush effects to allow the heigh comparison to be done
  const expand = getByText(/expand/i)
  fireEvent.click(expand)
  const collapse = getByText(/collapse/i)
  expect(queryByText(/expand/i)).toBeNull()
  fireEvent.click(collapse)
  expect(getByText(/expand/i)).toBeDefined()
})
