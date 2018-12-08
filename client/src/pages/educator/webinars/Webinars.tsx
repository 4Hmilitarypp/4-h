import { RouteComponentProps } from '@reach/router'
// @ts-ignore
import Parser from 'html-react-parser'
import * as React from 'react'
import styled from 'styled-components/macro'
import staticWebinars from '../../../assets/data/staticWebinars.json'
import { DynamicSection, Heading, PageWrapper, SubHeading } from '../../../components/Elements'
import { IWebinar } from '../../../types'
import FilterCategoriesDisplay from './FilterCategoriesDisplay'
import Webinar from './Webinar'

const Webinars: React.FC<RouteComponentProps> = () => {
  const [webinars, setWebinars] = React.useState<IWebinar[] | undefined>(undefined)
  const [categories, setCategories] = React.useState<string[] | undefined>(undefined)
  const [filteredCategories, setFilteredCategories] = React.useState<string[]>([])

  React.useEffect(() => {
    setWebinars(staticWebinars)
    const cats = staticWebinars.reduce((arr: string[], webinar) => {
      if (!arr.includes(webinar.category)) {
        arr.push(webinar.category)
      }
      return arr
    }, [])
    setCategories(cats)
    setFilteredCategories(cats)
  }, [])

  const handleCategorySelected = (cats: string[]) => setFilteredCategories(cats)

  return webinars && categories ? (
    <PageWrapper>
      <Heading center={true}>Webinars</Heading>
      <FilterCategoriesDisplay categories={categories} categorySelected={handleCategorySelected} />
      {filteredCategories.map(category => (
        <DynamicSection key={category}>
          <CategoryHeading>{category}</CategoryHeading>
          {webinars
            .filter(webinar => webinar.category === category)
            .map(webinar => (
              <Webinar key={webinar.title} webinar={webinar} />
            ))}
        </DynamicSection>
      ))}
    </PageWrapper>
  ) : (
    <h1>Loading...</h1>
  )
}
export default Webinars
const CategoryHeading = styled(SubHeading)`
  color: ${props => props.theme.gray};
  padding-bottom: 2rem;
`
