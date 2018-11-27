import { Link as UnstyledLink, RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { A, Heading, P, PageWrapper, Section, SubHeading } from '../components/Elements'
import SignInModal from '../components/SignInModal'
import { useHash } from '../hooks/hooks'

const About: React.FC<RouteComponentProps> = () => {
  const historyRef = React.useRef<HTMLHeadingElement>(null)
  useHash({ refToFocus: historyRef, hash: '#history', location })
  return (
    <PageWrapper>
      <Heading center={true}>About 4-H Military Partnerships</Heading>
      <Section>
        <SubHeading>What We Do</SubHeading>
        <P>
          4-H Military Partnerships create opportunities and provide support to military connected youth whether they
          live on or near an installation, in our communities, or on overseas installations. 4-H clubs and opportunities
          provide consistency in belonging and an opportunity to develop life skills through a positive youth
          development framework. The 4-H Program is built upon four{' '}
          <A href="http://www.4-h.org/resource-library/professional-development-learning/4-h-youth-development/youth-development/essential-elements/">
            Essential Elements
          </A>{' '}
          ensuring that youth feel a sense of belonging in a safe environment, develop independence in both group and
          individual work, share with others in the community through generosity, and develop a sense of mastery that
          continues throughout life as they practice and share what they have learned with others. As military families
          move frequently and experience the difficulties surrounding deployment and reintegration, 4-H provides
          predictable programming and a safe and nurturing environment for military connected children and youth.
        </P>
      </Section>
      <Section>
        <SubHeading>Who We Are</SubHeading>
        <P>
          The 4-H Military Partnerships represent a collaboration of the U.S. Department of Agriculture (USDA), National
          Institute of Food and Agriculture and the U.S. Department of Defense, Military Community and Family Policy,
          Army Child, Youth and School Services, Air Force Child and Youth Programs, Navy Child and Youth Programs,
          Coast Guard, and National Guard Bureau. Land Grant Universities partner with Active Duty installation programs
          and National Guard and Reserve to support children and youth in their local communities. The 4-H Military
          Partnerships rely on Land Grant University Extension faculty, the “Extension 4-H Military Liaison” to serve as
          a link between the State Cooperative Extension System, Military Service Branches, and 4-H National
          Headquarters at USDA. The Liaison serves as a coordinator with these partners in support of research based
          programming for military connected children, youth, and families.
        </P>
        <Section>
          <SubHeading>Helpful Links</SubHeading>
          <LinksHeading>For military family members</LinksHeading>
          <Links>
            <Li>
              <Link to="/find-a-liaison">Connect with your state 4-H office</Link>
            </Li>
            <Li>
              <Link to="/events/">Current camp listings</Link>
            </Li>
            <Li>
              <Link to="/partners">Information about our partners</Link>
            </Li>
          </Links>
          <LinksHeading>For educators or working with military families</LinksHeading>
          <Links>
            <Li>
              <Link to="/educators/resources">View curriculum resources</Link>
            </Li>
            <Li>
              <Link to="/find-a-liaison/">Your 4-H Office</Link>
            </Li>
            <Li>
              <Link to="/partners">Information about our partners</Link>
            </Li>
          </Links>
          <LinksHeading>For extension 4-H military liaisons</LinksHeading>
          <Links>
            <Li>
              <SignInModal>
                <Link as="span">Sign in as a Liaison</Link>
              </SignInModal>
            </Li>
            <Li>
              <Link to="/educators/resources">View corporate reports</Link>
            </Li>
            <Li>
              <Link to="/educators/resources">View curriculum resources</Link>
            </Li>
          </Links>
        </Section>
      </Section>
      <Section>
        <SubHeading id="history" ref={historyRef as any}>
          History
        </SubHeading>
      </Section>
    </PageWrapper>
  )
}

export default About

const Links = styled.ul`
  list-style: unset;
  padding-left: 4rem;
`
const Link = styled(UnstyledLink)`
  font-size: 1.8rem;
  color: ${props => props.theme.primaryText};
  &:hover {
    opacity: 0.8;
  }
`
const Li = styled.li`
  font-weight: 500;
`
const LinksHeading = styled.h4`
  color: ${props => props.theme.black};
  font-weight: normal;
`
