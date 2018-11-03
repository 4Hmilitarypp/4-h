import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'

const Contact: React.SFC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Contact</Heading>
    <Hi />
  </PageWrapper>
)
export default Contact
const Hi = styled.p``
