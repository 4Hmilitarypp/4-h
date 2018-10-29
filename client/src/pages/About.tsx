import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'

const About: React.SFC<RouteComponentProps> = () => <PageWrapper>About</PageWrapper>
export default About

const PageWrapper = styled.div`
  padding: 2rem;
`
