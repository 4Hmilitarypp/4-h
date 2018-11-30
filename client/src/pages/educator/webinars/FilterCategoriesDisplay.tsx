// @ts-ignore
import Parser from 'html-react-parser'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Button } from '../../../components/Elements'

interface IProps {
  categories: string[]
  categorySelected: (categories: string[]) => void
}

const FilterCategoriesDisplay: React.FC<IProps> = ({ categories, categorySelected }) => {
  const allCategoriesText = 'All Categories'
  const [selectedCategory, setSelectedCategory] = React.useState<string>(allCategoriesText)

  const handleCategoryClicked = (e: MouseEvent) => {
    if (e.currentTarget) {
      const category = (e.currentTarget as HTMLButtonElement).textContent || allCategoriesText
      setSelectedCategory(category)
      const filteredCategories = categories.filter(cat => (category === allCategoriesText ? true : category === cat))
      categorySelected(filteredCategories)
    }
  }
  return (
    <FilterWrapper>
      <ButtonsHeading>Categories:</ButtonsHeading>
      <CategoryButton onClick={handleCategoryClicked} className={selectedCategory === allCategoriesText && 'active'}>
        {allCategoriesText}
      </CategoryButton>
      {categories.map(category => (
        <CategoryButton
          onClick={handleCategoryClicked}
          className={selectedCategory === category && 'active'}
          key={category}
        >
          {category}
        </CategoryButton>
      ))}
    </FilterWrapper>
  )
}

export default FilterCategoriesDisplay

const FilterWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
`
const ButtonsHeading = styled.h3`
  color: ${props => props.theme.buttonBackground};
`
const CategoryButton = styled(Button)`
  padding: 1rem;
  &:not(.active) {
    color: hsla(150, 40%, 20%, 1);
    background: hsla(150, 35%, 75%, 1);
  }
  &:not(:first-child) {
    margin-left: 2rem;
  }
`
