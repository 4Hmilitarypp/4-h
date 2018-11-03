import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'
import Input from '../components/Input'

const FindLiaison: React.SFC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Find A Liaison</Heading>
    <label htmlFor="liaison">Enter a location</label>
    <Input id="liaison" />
    <Hi />
  </PageWrapper>
)
export default FindLiaison

const Hi = styled.p``
