import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'

const History: React.SFC<RouteComponentProps> = () => <PageWrapper>History</PageWrapper>
export default History

const PageWrapper = styled.div`
  padding: 2rem;
`
