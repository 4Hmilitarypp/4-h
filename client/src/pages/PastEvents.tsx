import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'

const PastEvents: React.SFC<RouteComponentProps> = () => <PageWrapper>PastEvents</PageWrapper>
export default PastEvents

const PageWrapper = styled.div`
  padding: 2rem;
`
