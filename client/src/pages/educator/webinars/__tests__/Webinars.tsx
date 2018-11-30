import * as React from 'react'
import { fireEvent, flushEffects, render } from 'react-testing-library'
import staticWebinars from '../../../../assets/data/staticWebinars.json'
import Webinars from '../Webinars'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<Webinars {...props} />)
  return {
    ...utils,
  }
}

it('should display all webinars initially', () => {
  const { getByText } = setup()
  flushEffects()
  const differentWebinars = [staticWebinars[0].title, staticWebinars[3].title, staticWebinars[5].title]
  differentWebinars.forEach(webinar => expect(getByText(webinar)).toBeDefined())
})

it('should only show the webinars whose categories match', () => {
  const { getByText, queryByText } = setup()
  flushEffects()
  const differentWebinars = [staticWebinars[0].title, staticWebinars[3].title, staticWebinars[5].title]
  const firstCategoryButton = getByText(staticWebinars[0].category)
  fireEvent.click(firstCategoryButton)
  expect(getByText(differentWebinars[0])).toBeDefined()
  expect(queryByText(differentWebinars[1])).toBeNull()
  expect(queryByText(differentWebinars[2])).toBeNull()
})
