import * as React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { RouteComponentProps } from '@reach/router'

const Header: React.SFC<RouteComponentProps> = () => (
  <HeaderContainer>
    {/* Have the 4h logo */}
    <Heading>4-H Military Partnerships</Heading>
    <Links>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Links>
  </HeaderContainer>
)
export default Header

const HeaderContainer = styled.div`
  background: ${props => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
`

const Heading = styled.h2`
  color: ${props => props.theme.secondary};
`

const Links = styled.div`
  display: inline-block;
  padding-left: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.white};
`

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 2.4rem;
`
