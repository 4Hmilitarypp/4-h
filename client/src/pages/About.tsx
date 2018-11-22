import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading, PageWrapper } from '../components/Elements'
import { useHash } from '../hooks/hooks'

const About: React.FC<RouteComponentProps> = () => {
  const historyRef = React.useRef<HTMLHeadingElement>(null)
  useHash({ refToFocus: historyRef, hash: '#history', location })
  return (
    <PageWrapper>
      <Heading>About Us</Heading>
      <Section />
      <Heading id="history" ref={historyRef as any}>
        History
      </Heading>
      <Section />
    </PageWrapper>
  )
}

export default About

const Section = styled.section`
  height: 500px;
`
