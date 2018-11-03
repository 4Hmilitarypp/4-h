import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'

const Educator: React.SFC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Educator</Heading>
    <Hi />
  </PageWrapper>
)
export default Educator

const Hi = styled.p``
