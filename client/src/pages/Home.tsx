import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'

const Home: React.SFC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Educator</Heading>
    <Hi />
  </PageWrapper>
)
export default Home

const Hi = styled.p``
