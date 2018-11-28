import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'

const Header: React.FC<RouteComponentProps> = () => (
  <HeaderContainer>
    <Text>Created by Alex Wendte</Text>
  </HeaderContainer>
)
export default Header

const HeaderContainer = styled.div`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 1rem;
`

const Text = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`
