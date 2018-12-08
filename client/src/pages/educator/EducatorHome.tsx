import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
// import styled from 'styled-components/macro'
import { Heading, Link, P, PageWrapper, Section, SubHeading } from '../../components/Elements'

const EducatorHome: React.FC<RouteComponentProps> = () => (
  <PageWrapper>
    <Heading>Educator</Heading>
    <P>
      Welcome to 4-H Military Partnerships! As an Educator/Staff Member, there are a number of resources to support 4-H
      clubs on installations world-wide and 4-H clubs and opportunities in communities. If you’re just learning about
      4-H, the 4-H 101: The Basics of Starting 4-H Clubs curriculum will be your resource for understanding 4-H. If
      you’re already involved with 4-H clubs, there are a number of curriculum resources for 4-H projects with children
      and youth. The Research section highlights studies involving military youth and families as well as positive youth
      <Link to="/find-a-liaison"> Extension 4-H Military Liaison</Link>.
    </P>
    <Section>
      <SubHeading>Webinars</SubHeading>
      <P>
        We have <Link to="./webinars">recorded webinars</Link> you can listen to.
      </P>
    </Section>
    <Section>
      <SubHeading>Research</SubHeading>
    </Section>
    <Section>
      <SubHeading>Resources</SubHeading>
    </Section>
  </PageWrapper>
)
export default EducatorHome
