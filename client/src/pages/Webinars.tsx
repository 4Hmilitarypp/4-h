import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'

const Webinars: React.SFC<RouteComponentProps> = () => <PageWrapper>Webinars</PageWrapper>
export default Webinars

const PageWrapper = styled.div`
  padding: 2rem;
`
