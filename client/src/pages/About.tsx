import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading, PageWrapper } from '../components/Elements'

const About: React.SFC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>About</Heading>
    <Hi />
  </PageWrapper>
)
export default About

const Hi = styled.p``
