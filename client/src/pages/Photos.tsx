import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading, PageWrapper } from '../components/Elements'

const Photos: React.FC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Photos</Heading>
    <Hi />
  </PageWrapper>
)
export default Photos

const Hi = styled.p``
