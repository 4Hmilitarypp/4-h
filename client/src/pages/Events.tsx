import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'
import { useHash } from '../hooks/hooks'

const Events: React.SFC<RouteComponentProps> = ({ location }) => {
  const pastEventRef = React.useRef<HTMLHeadingElement>()
  useHash({ ref: pastEventRef, hash: '#past-events', location })
  return (
    <PageWrapper>
      <Heading>Upcoming Events</Heading>
      <Filler />
      <Heading id="past-events" ref={pastEventRef as any}>
        Past Events
      </Heading>
      <Filler />
    </PageWrapper>
  )
}
export default Events

const Filler = styled.div`
  height: 1000px;
  width: 100%;
  background: ${props => props.theme.gray};
`
