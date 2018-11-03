import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import { Heading, PageWrapper } from '../components/Elements'
import { useHash } from '../hooks/hooks'

const Events: React.SFC<RouteComponentProps> = ({ location }) => {
  const pastEventRef = React.useRef<HTMLHeadingElement>()
  useHash({ refToFocus: pastEventRef, hash: '#past-events', location })
  return (
    <PageWrapper>
      <Heading>Upcoming Events</Heading>
      <P>There are some amazing events coming up</P>
      <Heading id="past-events" ref={pastEventRef as any}>
        Past Events
      </Heading>
    </PageWrapper>
  )
}
export default Events

const P = styled.p``
