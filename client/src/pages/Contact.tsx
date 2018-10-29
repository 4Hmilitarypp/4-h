import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'
const Contact: React.SFC<RouteComponentProps> = () => <PageWrapper>Contact</PageWrapper>
export default Contact

const PageWrapper = styled.div`
  padding: 2rem;
`
