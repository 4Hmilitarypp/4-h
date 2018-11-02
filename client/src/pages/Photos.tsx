import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'

const Photos: React.SFC<RouteComponentProps> = () => <PageWrapper>Photos</PageWrapper>
export default Photos

const PageWrapper = styled.div`
  padding: 2rem;
`
