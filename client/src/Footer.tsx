import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'

const Footer: React.SFC<RouteComponentProps> = () => (
  <FooterContainer>
    <Text>Created by Alex Wendte</Text>
  </FooterContainer>
)
export default Footer

const FooterContainer = styled.div`
  background: ${props => props.theme.primary1};
  color: ${props => props.theme.white};
  padding: 1rem;
`

const Text = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`
