import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'

const About: React.SFC<RouteComponentProps> = () => <PageWrapper>About</PageWrapper>
export default About

const PageWrapper = styled.div`
  padding: 2rem;
`
