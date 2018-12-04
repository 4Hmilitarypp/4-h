import { Link as UnstyledLink } from '@reach/router'
import styled from 'styled-components/macro'
import { IHeadingProps } from '../types'
import { elevation, transition } from '../utils/mixins'

// TODO Refactor this to use an Input and a label and return actual components.

export const InputGroup = styled.div`
  margin: 0 0.5rem 1rem;
  flex-grow: 1;
  label,
  legend {
    color: ${props => props.theme.grey};
    padding-bottom: 0.5rem;
  }
  label,
  input {
    display: block;
  }
  input,
  select,
  textarea {
    width: 100%;
    border-radius: 5px;
    padding: 0.9rem 1.5rem;
    border: none;
    background: ${props => props.theme.inputGray};
  }
`

export const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 140rem;
  margin: 0 auto;
`

export const Heading: any = styled.h1`
  color: ${(props: IHeadingProps) => (props.color ? props.theme[props.color] : props.theme.gray)};
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  text-align: ${(props: IHeadingProps) => (props.center ? 'center' : '')};
`

export const Button = styled.button`
  border-radius: 5px;
  color: ${props => props.theme.white};
  background: ${props => props.theme.primary};
  border: none;
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 1.8rem;
  ${elevation(3)};
  &:hover {
    transform: translateY(-1px);
    ${transition({ prop: 'all', time: 0.15, name: 'easeInQuart' })};
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.1), 0 4px 7px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;
  }
`

export const SecondaryButton = styled(Button)`
  background: ${props => props.theme.secondary};
`

export const SubHeading = styled.h2`
  color: ${props => props.theme.secondary};
  padding-top: 3rem;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 2.7rem;
`
export const Section = styled.section`
  max-width: 85rem;
  margin: 0 auto;
`
export const A = styled.a`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${props => props.theme.primaryText};
  &:hover {
    opacity: 0.8;
  }
`
export const Link = styled(props => <UnstyledLink {...props} />)`
  font-weight: 500;
  font-size: 1.8rem;
  color: ${props => props.theme.primaryText};
  &:hover {
    opacity: 0.8;
  }
`
export const P = styled.p`
  padding-bottom: 1.5rem;
  font-size: 1.8rem;
  &:last-child {
    padding-bottom: 0;
  }
`
