import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'

const UpcomingEvents: React.SFC<RouteComponentProps> = () => <PageWrapper>UpcomingEvents</PageWrapper>
export default UpcomingEvents

const PageWrapper = styled.div`
  padding: 2rem;
`
