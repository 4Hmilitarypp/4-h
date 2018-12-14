import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading } from '../components/Elements'

const NotFound: React.FC<RouteComponentProps> = () => {
  return (
    <NotFoundContainer>
      <Heading>The route you specified was not found</Heading>
    </NotFoundContainer>
  )
}
export default NotFound

const NotFoundContainer = styled.div`
  padding: 2rem;
`
