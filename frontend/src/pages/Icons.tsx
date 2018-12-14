import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading, PageWrapper, SubHeading } from '../components/Elements'
import UnstyledIcon from '../components/Icon'

const Icons: React.FC<RouteComponentProps> = () => {
  console.log(Icon)
  return (
    <PageWrapper>
      <Heading>Icons List</Heading>
      <SubHeading>Delete</SubHeading>
      <Icon name="delete" />
      <SubHeading>Arrow</SubHeading>
      <Icon name="arrow" />
      <SubHeading>X</SubHeading>
      <Icon name="x" />
      <SubHeading>Close Circle</SubHeading>
      <Icon name="close-circle" />
      <SubHeading>Close</SubHeading>
      <Icon name="close" />
      <SubHeading>Back</SubHeading>
      <Icon name="back" circleColor="#222222" arrowColor="#fff" />
      <SubHeading />
    </PageWrapper>
  )
}
export default Icons

const Icon = styled(UnstyledIcon)`
  height: 5rem;
  width: auto;
`
