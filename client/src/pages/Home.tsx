import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
const Home: React.SFC<RouteComponentProps> = () => <PageWrapper>Home</PageWrapper>
export default Home

const PageWrapper = styled.div`
  padding: 2rem;
`
