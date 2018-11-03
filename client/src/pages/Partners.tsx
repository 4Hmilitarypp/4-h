import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'

const Partners: React.SFC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Partners</Heading>
    <Hi />
  </PageWrapper>
)
export default Partners

const Hi = styled.p``
