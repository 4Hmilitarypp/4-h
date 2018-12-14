import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading } from '../components/Elements'

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <HomeContainer>
      <Heading>Home</Heading>
    </HomeContainer>
  )
}
export default Home

const HomeContainer = styled.div`
  padding: 1rem;
`
