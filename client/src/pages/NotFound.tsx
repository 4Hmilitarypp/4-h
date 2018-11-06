import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'

const NotFound: React.SFC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Not Found</Heading>
    <Hi />
  </PageWrapper>
)
export default NotFound

const Hi = styled.p``