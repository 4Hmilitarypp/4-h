import styled from 'styled-components'

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
  select {
    width: 100%;
    border-radius: 5px;
    padding: 0.9rem 1.5rem;
    border: none;
    background: ${props => props.theme.lightGrey};
  }
`

export const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 140rem;
  margin: 0 auto;
`

export const Heading = styled.h1`
  color: ${props => props.theme.gray};
  padding-top: 2rem;
  padding-bottom: 0.5rem;
`

export const Button = styled.button`
  border-radius: 5px;
  color: ${props => props.theme.white};
  background: ${props => props.theme.primary};
  border: none;
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 1.8rem;
`
