import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
// import api from '../../utils/api'
import staticPartnerSections from '../../assets/data/staticPartnerSections.json'
import { IPartnerSection } from '../../types'
import PartnerSection from './PartnerSection'

const Partners: React.FC<RouteComponentProps> = () => {
  const [partners, setPartners] = React.useState<IPartnerSection[] | undefined>(undefined)
  /* const heroImage =
    'https://res.cloudinary.com/four-hmpp/image/upload/v1542863574/pictures-from-states/93aa0186-8b7b-5a2c-8c57-1823ef99173a.jpg' */
  const heroImage =
    'https://res.cloudinary.com/four-hmpp/image/upload/v1542863592/pictures-from-states/a0c173db-74ca-4c72-b316-7f2916c1bebe.jpg'
  React.useEffect(() => {
    // api.partners.getSections().then(({ partnerSections }) => setPartners(partnerSections))
    setPartners(staticPartnerSections)
  }, [])
  return (
    <Wrapper>
      <Hero>
        <Heading>Military Partners</Heading>
        <Text>
          4-H Military Partnerships create opportunities and provide support to military connected youth whether they
          live on or near an installation, in our communities, or on overseas installations.
        </Text>
        <HeroImage src={heroImage} />
      </Hero>
      <PartnerList>
        <SubHeading>List of Military Partners</SubHeading>
        {partners ? (
          partners.map((partner, index) => <PartnerSection partner={partner} key={partner.slug} index={index} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </PartnerList>
    </Wrapper>
  )
}
export default Partners

const Wrapper = styled.div`
  padding: 2rem 0;
`
const Hero = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  height: 75rem;
`
const Heading = styled.h1`
  grid-row: 1;
  grid-column: 1 / -1;
  color: ${props => props.theme.white};
  text-align: center;
`
const Text = styled.p`
  grid-row: 2;
  grid-column: 2 / 4;
  color: ${props => props.theme.white};
  text-align: center;
  font-size: 2rem;
  background: #339966a3;
  padding: 2rem;
  border-radius: 5px;
  position: relative;
  bottom: 3rem;
`
const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  position: relative;
  z-index: -1;
`
const SubHeading = styled.h2`
  color: ${props => props.theme.secondary};
  text-align: center;
  padding: 2rem 0 2rem;
`
const PartnerList = styled.div`
  padding-top: 2rem;
`
