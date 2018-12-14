import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading, PageWrapper } from '../components/Elements'

const NotFound: React.FC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Not Found</Heading>
    <Hi />
  </PageWrapper>
)
export default NotFound

const Hi = styled.p``
