import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading, PageWrapper } from '../components/Elements'

const About4HClub: React.FC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>About4HClub</Heading>
    <Hi />
  </PageWrapper>
)
export default About4HClub
const Hi = styled.p``
