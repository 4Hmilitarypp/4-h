import { RouteComponentProps } from '@reach/router'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import * as React from 'react'
import styled from 'styled-components/macro'
// import api from '../utils/api'
import staticLiaisons from '../assets/data/staticLiaisons.json'
import { InputGroup, PageWrapper } from '../components/Elements'
import Icon from '../components/Icon'
import { useHash } from '../hooks/hooks'
// import Input from '../components/Input'
import { ILiaison } from '../types'
import { elevation } from '../utils/mixins'

export const filterLiaisons = (liaisons: ILiaison[], query: string | null): ILiaison[] => {
  if (!query) return liaisons.sort((a, b) => (a.region > b.region ? 1 : -1))
  const result = matchSorter(liaisons, query, {
    keys: ['region', { minRanking: matchSorter.rankings.EQUAL, key: 'abbreviation' }],
  })
  return result
}

const FindLiaison: React.SFC<RouteComponentProps> = ({ location }) => {
  const [liaisons, setLiaisons] = React.useState<ILiaison[] | undefined>(undefined)
  const [selectedLiaison, setSelectedLiaison] = React.useState<ILiaison | undefined>(undefined)
  /* stylelint-disable-next-line */
  const findRef = React.useRef<HTMLHeadingElement>(null)
  useHash({ refToFocus: findRef, hash: '#search', location })

  React.useEffect(() => {
    /* api.liaisons
      .get()
      .then(({ liaisons: restLiaisons }) => setLiaisons(restLiaisons))
      .catch((error: Error) => console.error(error)) */
    setLiaisons(staticLiaisons)
  }, [])

  return (
    <PageWrapper>
      <Heading>What Is A Liaison?</Heading>
      <P>
        4-H military liaisons are the official point of contact for all 4-H military programs. A liaison serves as a
        professional connection between various military branches and the 4-H organization.
      </P>
      <P>
        Liaisons coordinate support to 4-H clubs on and off military installations that serve military youth. They also
        educate university staff and citizens about the unique challenges faced by military children.
      </P>
      <Heading ref={findRef as any}>Find A Liaison</Heading>
      {liaisons && (
        <Downshift
          itemToString={item => (item ? item.region : '')}
          onChange={(selection: ILiaison) => setSelectedLiaison(selection)}
        >
          {({
            getLabelProps,
            getInputProps,
            isOpen,
            getItemProps,
            inputValue,
            highlightedIndex,
            getMenuProps,
            selectedItem,
            getToggleButtonProps,
            clearSelection,
          }) => (
            <div>
              <FindInputGroup>
                <label {...getLabelProps({ name: 'region' })}>Enter a state or US Province</label>
                <div style={{ position: 'relative' }}>
                  <FindInput className="input" {...getInputProps()} placeholder="Kansas" />
                  {selectedItem ? (
                    <ControllerButton onClick={() => clearSelection()} aria-label="clear selection">
                      <Icon name="x" />
                    </ControllerButton>
                  ) : (
                    <ControllerButton {...getToggleButtonProps()}>
                      <Icon name="arrow" isOpen={isOpen} />
                    </ControllerButton>
                  )}
                </div>
              </FindInputGroup>
              {isOpen ? (
                <Menu {...getMenuProps({ style: { height: 250, overflowY: 'scroll' } })}>
                  {filterLiaisons(liaisons, inputValue).map((liaison: ILiaison, index) => {
                    return (
                      <Item
                        key={liaison.region.toLowerCase()}
                        {...getItemProps({
                          index,
                          item: liaison,
                          style: { background: index === highlightedIndex ? '#5a2a82' : '' },
                        })}
                      >
                        {liaison.region}
                      </Item>
                    )
                  })}
                </Menu>
              ) : null}
            </div>
          )}
        </Downshift>
      )}
      {selectedLiaison && (
        <Liaison>
          <ResultContent>
            <Text>
              <Name>{selectedLiaison.name}</Name>
              <StyledLink href={`mailto:${selectedLiaison.email}`}>{selectedLiaison.email}</StyledLink>
              <StyledLink href={`tel:${selectedLiaison.phoneNumber}`}>{selectedLiaison.phoneNumber}</StyledLink>
            </Text>
            <Flag
              src={`http://flags.ox3.in/svg/us${
                selectedLiaison.abbreviation ? `/${selectedLiaison.abbreviation.toLowerCase()}` : ''
              }.svg`}
              alt={selectedLiaison.abbreviation ? `${selectedLiaison.region} flag` : 'American Flag'}
            />
          </ResultContent>
        </Liaison>
      )}
    </PageWrapper>
  )
}
export default FindLiaison

const Heading = styled.h2`
  color: ${props => props.theme.secondary};
  padding-top: 2rem;
  padding-bottom: 1rem;
  text-align: center;
`
const P = styled.p`
  padding-bottom: 1.5rem;
  max-width: 85rem;
  margin: 0 auto;
  font-size: 1.8rem;
`
const Menu = styled.ul`
  ${elevation({ level: 3 })};
  padding: 1.5rem 0;
  max-width: 50rem;
  margin: 0 auto;
  background: ${props => props.theme.gray};
`
const FindInputGroup = styled(InputGroup)`
  margin: 0;
  max-width: 50rem;
  margin: 0 auto;
`
const FindInput = styled.input`
  &.input {
    background: ${props => props.theme.inputGray};
  }
`
const ControllerButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  width: 4rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const Item = styled.li`
  padding: 0.3rem 1.5rem;
  border-radius: 5px;
  color: ${props => props.theme.white};
  &:hover {
    cursor: pointer;
  }
`
const Liaison = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`
const ResultContent = styled.div`
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Text = styled.div`
  display: inline-block;
  line-height: 1.8;
`
const Name = styled.h4`
  font-size: 2.4rem;
  color: ${props => props.theme.gray};
`
const StyledLink = styled.a`
  display: block;
  color: ${props => props.theme.black};
  text-decoration: underline;
`
const Flag = styled.img`
  width: 23rem;
  height: 12rem;
  padding-left: 5rem;
  object-fit: cover;
`
