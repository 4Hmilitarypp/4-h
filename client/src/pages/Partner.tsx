import { navigate as reachNavigate, RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
// import api from '../../utils/api'
import staticPartners from '../assets/data/staticPartners.json'
import { Heading, PageWrapper } from '../components/Elements'
import Icon from '../components/Icon'
import { IPartner } from '../types'
import { elevation } from '../utils/mixins'
import { trimToLength } from '../utils/string'

interface IProps extends RouteComponentProps {
  slug?: string
  navigate?: any
}

const Partner: React.FC<IProps> = ({ slug, navigate }) => {
  Partner.defaultProps = {
    navigate: navigate || reachNavigate,
  }

  const [partner, setPartner] = React.useState<IPartner | undefined>(undefined)

  React.useEffect(() => {
    // api.partners.get(partner.slug).then(({ partner: partnerResult }) => setPartner(partnerResult))
    const partnerResult = staticPartners.filter((p: IPartner) => p.slug === slug)[0]
    if (!partnerResult) {
      navigate('/404')
    }
    window.scrollTo(0, 0)
    setPartner(partnerResult)
  }, [])

  return (
    <PageWrapper>
      {partner && (
        <PartnerWrapper>
          <HeaderWrapper>
            <BackButton onClick={() => navigate('/partners')}>
              <BackIcon name="back" circleColor="#339966" arrowColor="#fff" />
              <BackText>Back To Partners</BackText>
            </BackButton>
            <Heading center={true}>{partner.title}</Heading>
            <div style={{ width: 200 }} />
          </HeaderWrapper>
          <Hero>
            <Description>{trimToLength(400, partner.longDescription)}</Description>
            <HeroImages>
              <FeaturedImage src={partner.featuredImages[0].url} alt={partner.featuredImages[0].alt} />
              {partner.featuredImages[1] && (
                <FeaturedImage src={partner.featuredImages[1].url} alt={partner.featuredImages[1].alt} />
              )}
            </HeroImages>
          </Hero>
          {partner.images && (
            <Section>
              <SubHeading>Image Gallery</SubHeading>
              <ImageGallery>
                {partner.images.map(image => (
                  <Img key={image.url} src={image.url} alt={image.alt} />
                ))}
              </ImageGallery>
            </Section>
          )}
          {partner.annualReports && (
            <Section>
              <SubHeading>Annual Reports</SubHeading>
              <Reports>
                {partner.annualReports.map(report => (
                  <li key={report.url}>
                    <Link href={report.url}>
                      <ListIcon name="back" arrowColor="#5a2a82" backgroundColor="#fff" />
                      {report.title}
                    </Link>
                  </li>
                ))}
              </Reports>
            </Section>
          )}
          {partner.links && (
            <Section>
              <SubHeading>External Links</SubHeading>
              <ExternalLinks>
                {partner.links.map(link => (
                  <LinkBlock key={link.url}>
                    <p>
                      {link.title}
                      <Link href={link.url}>
                        <ListIcon name="back" arrowColor="#5a2a82" backgroundColor="#fff" /> {link.linkText}
                      </Link>
                    </p>
                  </LinkBlock>
                ))}
              </ExternalLinks>
            </Section>
          )}
        </PartnerWrapper>
      )}
    </PageWrapper>
  )
}
export default Partner

const PartnerWrapper = styled.div`
  ${elevation({ level: 4 })};
  margin: 2rem;
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
`
const Hero = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  align-items: center;
`
const HeroImages = styled.div`
  display: flex;
  justify-content: center;
`
const FeaturedImage = styled.img`
  height: 30rem;
  margin: 0 auto;
  display: block;
  padding: 2rem 0;
  object-fit: contain;
  &:nth-child(2) {
    padding-left: 2rem;
  }
`
const Description = styled.p`
  padding-right: 3rem;
`
const Section = styled.section`
  padding: 2rem 0;
`
const Reports = styled.ul`
  padding-left: 4rem;
`

const Link = styled.a`
  font-weight: bold;
  color: ${props => props.theme.secondary};
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`
/* const Clover = styled.img`
  height: 1.8rem;
  width: 1.8rem;
  margin-right: 1.5rem;
` */
const ExternalLinks = styled.ul`
  padding-left: 4rem;
`
const LinkBlock = styled.li`
  list-style: none;
`
const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  height: 30rem;
`
const SubHeading = styled.h2`
  color: ${props => props.theme.secondary};
  padding-top: 3rem;
  padding-bottom: 2rem;
  text-align: center;
`

const BackButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 5px;
  display: flex;
  transition: transform 0.2s ease-in;
  padding: 0;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`
const BackIcon = styled(Icon)`
  height: 3.2rem;
  width: 3.2rem;
`

const BackText = styled.span`
  color: ${props => props.theme.primary};
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 1rem;
`

const ListIcon = styled(Icon)`
  height: 2rem;
  width: 2rem;
  transform: rotateY(180deg);
  margin-right: 1rem;
`
