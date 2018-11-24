import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading, PageWrapper } from '../components/Elements'

const AnnualReports: React.FC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Annual Reports</Heading>
    <Hi />
  </PageWrapper>
)
export default AnnualReports

const Hi = styled.p``
