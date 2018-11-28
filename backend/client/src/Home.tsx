import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'

const Home: React.FC<RouteComponentProps> = () => (
  <HomeContainer>
    <Text>Created by Alex Wendte</Text>
  </HomeContainer>
)
export default Home

const HomeContainer = styled.div`
  background: ${props => props.theme.primary1};
  color: ${props => props.theme.white};
  padding: 1rem;
`

const Text = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`
