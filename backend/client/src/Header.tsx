import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Button } from './components/Elements'

const Header: React.FC<RouteComponentProps> = () => (
  <HeaderWrapper>
    <Logo src="https://res.cloudinary.com/four-hmpp/image/upload/v1542786198/logos/4h-logo.png" alt="4-H Logo" />
    <Title>4-H Military Partnerships</Title>
    <User>
      <Name>Alex Wendte</Name>
      <Button>Logout</Button>
    </User>
  </HeaderWrapper>
)
export default Header

const HeaderWrapper = styled.header`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
`

const Logo = styled.img`
  height: 4rem;
  padding-left: 2rem;
`

const Title = styled.h1`
  font-size: 2.4rem;
`

const User = styled.div``
const Name = styled.span`
  padding-right: 2rem;
`
