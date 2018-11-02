import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'

const Resources: React.SFC<RouteComponentProps> = () => <PageWrapper>Resources</PageWrapper>
export default Resources

const PageWrapper = styled.div`
  padding: 2rem;
`
