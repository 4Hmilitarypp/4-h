import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'

const Research: React.SFC<RouteComponentProps> = () => <PageWrapper>Research</PageWrapper>
export default Research

const PageWrapper = styled.div`
  padding: 2rem;
`
