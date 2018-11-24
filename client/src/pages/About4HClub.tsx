import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { A, Heading, P, PageWrapper, Section, SubHeading } from '../components/Elements'

const About4HClub: React.FC<RouteComponentProps> = () => (
  <OverflowHidden>
    <MyPageWrapper>
      <Heading center={true}>About 4-H Clubs</Heading>
      <TitleSection>
        <div>
          <P>
            The National Institute for Food and Agriculture (NIFA), United States Department of Agriculture (USDA)
            developed partnerships with the U.S. Army, U.S. Air Force, U.S. Navy, National Guard and Reserves, to
            support youth and family programs on installations around the world.
          </P>
          <P>Youth and families from U.S. Marines and U.S. Coast Guard are also supported.</P>
          <P>
            4-H extension professionals support military staff as they provide strong educational programs so that
            military men and women can pursue their critical, high risk assignments knowing that their children are in
            safe and nurturing environments.
          </P>
          <P>
            4-H clubs provide quality educational experiences to military youth using research based curricula for
            military youth ages 5-18.
          </P>
          <P>
            4-H clubs have been established on nearly every Army, Navy, and Air Force installation worldwide, while 4-H
            clubs in communities have opened their doors to military youth living off installation as well as youth of
            National Guard and Reserve families.
          </P>
          <P>
            As a parent's military role causes frequent family moves, 4-H clubs provide predictability and stability
            throughout the military child's life.
          </P>
          <P>
            In 2015, more than<b> 45,616 </b>Army, Navy, Air Force, Marines, Coast Guard, National Guard, and Reserves
            children and youth participated in 4-H military clubs on and off installations.
          </P>
        </div>
        <TitleImage src="https://res.cloudinary.com/four-hmpp/image/upload/f_auto,q_auto/v1542863595/pictures-from-states/f0b9a0f4-2b75-5066-870a-89bf12afb5f2.jpg" />
      </TitleSection>
      <Section>
        <SubHeading>Resources</SubHeading>
        <P>
          Further information about club opportunities in your state can be found
          <A href="http://www.4-h.org/get-involved/find-4-h-clubs-camps-programs/"> here.</A>
        </P>
        <P>
          Each year, states provide an annual report regarding how the partnership between 4-H and military youth
          programs has moved forward. More about how your state is supporting 4-H Military Clubs can be found in each
          <A href="http://4-hmilitarypartnerships.org/military-family/4h-clubs/reports/reports.html">
            {' '}
            State's Corporate Report.
          </A>
        </P>
        <Links>
          <Li>
            <A href="http://nifa.usda.gov/sites/default/files/resource/What%20is%20a%20Club%20v.7-11.pdf">
              What is a 4-H Club?
            </A>
            <LinkSource>From the National Institute for Food and Agriculture website</LinkSource>
          </Li>
          <Li>
            <A href="http://nifa.usda.gov/resource/4-h-program-development-factsheets">
              4-H Program Development Factsheets
            </A>
            <LinkSource>From the National Institute for Food and Agriculture website</LinkSource>
          </Li>
          <Li>
            <A href="http://www.4-h.org/about/">About 4-H</A>
            <LinkSource>From the 4-H official website</LinkSource>
          </Li>
          <Li>
            <A href="http://4-h.org/about/what-is-4-h/">What is 4-H?</A>
            <LinkSource>From the 4-H official website</LinkSource>
          </Li>
        </Links>
      </Section>
      <Section>
        <SubHeading>4-H Curriculum</SubHeading>
        <P>
          National 4-H Curriculum focuses on 4-H’s three primary mission mandates: science, healthy living, and
          citizenship. In addition, there is a wide variety of curriculum and project topic areas offered through the
          state and county 4-H programs.
        </P>
        <P>
          If there is a project area youth are interested in knowing more about, 4-H has a curriculum that can support
          the learning initiative and guide activities. View the
          <A href="http://www.4-h.org/resource-library/curriculum/"> National 4-H Curriculum Resource Library</A> for
          additional information.
        </P>
      </Section>
      <PreviewBackground>
        <SectionPreview>
          <PreviewHeading>Specific Club Information</PreviewHeading>
          <PreviewImage src="https://res.cloudinary.com/four-hmpp/image/upload/f_auto,q_auto/v1542863572/pictures-from-states/2d779b92-71d1-524d-8f76-e506841eb776.jpg" />
        </SectionPreview>
      </PreviewBackground>
      <Section>
        <SubHeading>4-H Clubs for Army Youth</SubHeading>
        <P>
          As a result of the<A href="/partners/army"> Army 4-H Military Partnership</A>, over<b> 23,000 </b>Army
          children and youth participate in approximately<b> 332 </b>4-H Clubs on Army installations worldwide. These
          clubs have become an integral programming component for Army School-Age and Youth programs.
        </P>
        <P>
          4-H Clubs offer opportunities for Army youth to explore new interests and gain skills in leadership, decision
          making, technology, science, math, environmental stewardship, and community service. In addition to
          learning-by-doing in their club, Army youth participate with other 4-H youth beyond the garrison gates in
          county, state and national programs. No matter where a family moves, the youth can find 4-H Clubs in any
          county in the U.S. and on overseas installations.
        </P>
      </Section>
      <Section>
        <SubHeading>4-H Clubs for Air Force Youth</SubHeading>
        <P>
          As a result of the<A href="/partners/air-force"> Air Force 4-H Military Partnership</A>, more than
          <b> 17,500 </b>Air Force children and youth participated in approximately<b> 234 </b>4-H Clubs as of 2013.
          Clubs are one of the primary ways 4-H provides positive youth development opportunities to meet the needs of
          young people so they can experience Belonging, Mastery, Independence, and Generosity, the 4-H Essential
          Elements, and to foster educational opportunities through the Land Grant University system.
        </P>
        <P>
          The Air Force requires that at least three 4-H Clubs are offered on base using official 4-H curriculum. One of
          the clubs must be in the area of Health, Nutrition, & Fitness; the remaining clubs should revolve around the
          varied interests of the youth. The Air Force 4-H Club can be a community club with three (or more) project
          groups offered throughout the year under the community club.
        </P>
      </Section>
      <Section>
        <SubHeading>4-H Clubs for Navy Youth</SubHeading>
        <P>
          The<A href="/partners/navy"> Navy 4-H Military Partnership </A> links resources of the Land Grant University
          System in the development of a common mission of positive youth development experiences to assist Child and
          Youth Program staff in the development of 4-H clubs worldwide. 4-H program (state and/or local) staff support
          bases through on-site training, technical assistance, and local programming. In 2013, more than<b> 6,400 </b>
          Navy children and youth participated in approximately<b> 110 </b>4-H Clubs on Naval bases worldwide.
        </P>
      </Section>
      <SubHeading>Geographically Dispersed</SubHeading>
      <GeoSection>
        <div>
          <P>
            It is important for children and youth to feel safe in their community/environment as they challenge
            themselves to learn new skills.
          </P>
          <P>
            4-H works to attract geographically dispersed military youth into local activities that will engage youth in
            developing life skills.
          </P>
          <P>This includes camps, leadership opportunities, civic engagement, and service learning.</P>
          <P>
            Within these events, youth have the opportunity to have a positive and sustainable relationship with caring
            adults; build life skills through hands-on activities; and participate in service learning events within
            their communities.
          </P>
          <P>
            <b> 17,048 </b>geographically dispersed youth of Active Duty and
            <A href="/partners/army-national-guard"> National Guard</A> and<A href="/partners/reserves"> Reserve </A>
            service members engaged in 4-H related activities in 2013.
          </P>
        </div>
        <GeoSectionImage src="https://res.cloudinary.com/four-hmpp/image/upload/q_auto,f_auto/v1542909338/adult-book-business-297755.jpg" />
      </GeoSection>
    </MyPageWrapper>
  </OverflowHidden>
)
export default About4HClub

const OverflowHidden = styled.div`
  overflow-x: hidden;
`
const MyPageWrapper = styled(PageWrapper)`
  padding: 2rem 4rem;
`
const TitleSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  align-items: center;
`
const TitleImage = styled.img`
  margin-left: 4rem;
  height: 60rem;
  object-fit: cover;
`
const Links = styled.ul`
  padding: 2rem 0 0;
  list-style: unset;
`
const LinkSource = styled.span`
  padding-left: 1.5rem;
  font-size: 1.8rem;
`
const Li = styled.li``
const PreviewBackground = styled.div`
  background: ${props => props.theme.inputGray};
  margin: 4rem 0 2rem;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw + 9px);
`
const SectionPreview = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  align-items: center;
  max-width: 100rem;
  margin: 0 auto;
`
const PreviewHeading = styled.h2`
  font-size: 3.6rem;
  color: ${props => props.theme.primary};
  text-align: center;
  margin: 0 4rem;
`
const PreviewImage = styled.img`
  margin-left: 4rem;
  height: 40rem;
  object-fit: cover;
`
const GeoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
const GeoSectionImage = styled.img`
  width: 50%;
  object-fit: cover;
  padding-left: 2rem;
`
