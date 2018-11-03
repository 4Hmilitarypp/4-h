import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'

const SignIn: React.SFC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Sign In</Heading>
    <Hi />
  </PageWrapper>
)
export default SignIn

const Hi = styled.p``
