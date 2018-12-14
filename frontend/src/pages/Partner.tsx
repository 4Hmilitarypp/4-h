import { navigate as reachNavigate, RouteComponentProps } from '@reach/router'
// @ts-ignore
import Parser from 'html-react-parser'
import * as React from 'react'
import styled from 'styled-components/macro'
// import api from '../../utils/api'
import staticPartners from '../assets/data/staticPartners.json'
import { DynamicSection, Heading, PageWrapper, SubHeading } from '../components/Elements'
import Icon from '../components/Icon'
import { IPartner } from '../types'
import { elevation, transition } from '../utils/mixins'

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
    window.scrollTo(0, 0)
    setPartner(partnerResult)
  }, [])

  return (
    <PageWrapper>
      {partner ? (
        <PartnerWrapper>
          <HeaderWrapper>
            <BackButton onClick={() => navigate('/partners')}>
              <BackIcon name="back" circleColor="#339966" arrowColor="#fff" />
              <BackText>Back To Partners</BackText>
            </BackButton>
            <Heading center={true}>{partner.title}</Heading>
            <div style={{ width: 209 }} />
          </HeaderWrapper>
          <Hero>
            <Description>{Parser(partner.longDescription)}</Description>
            <HeroImages>
              {partner.featuredImages.map(image => (
                <FeaturedImage key={image.url} src={image.url} alt={image.alt || `${partner.title} Logo`} />
              ))}
            </HeroImages>
          </Hero>
          {partner.images && (
            <ListWrapper>
              <SubHeading>Image Gallery</SubHeading>
              <ImageGallery>
                {partner.images.map(image => (
                  <Img key={image.url} src={image.url} alt={image.alt} />
                ))}
              </ImageGallery>
            </ListWrapper>
          )}
          {partner.annualReports && (
            <ListWrapper>
              <SubHeading>Annual Reports</SubHeading>
              <Reports>
                {partner.annualReports.map(report => (
                  <ReportItem key={report.url}>
                    <ReportCard href={report.url} target="_blank">
                      <ReportCover src={report.image} alt={`${report.title} cover`} />
                      <ReportTitle>{report.title}</ReportTitle>
                    </ReportCard>
                  </ReportItem>
                ))}
              </Reports>
            </ListWrapper>
          )}
          {partner.videoReports && (
            <ListWrapper>
              <SubHeading>Video Reports</SubHeading>
              <Reports>
                {partner.videoReports.map(report => (
                  <ReportItem key={report.url}>
                    <VideoReportCard href={report.url} target="_blank">
                      <VideoReportCover src={report.image} alt={`${report.title} cover`} />
                      <ReportTitle>{report.title}</ReportTitle>
                    </VideoReportCard>
                  </ReportItem>
                ))}
              </Reports>
            </ListWrapper>
          )}
        </PartnerWrapper>
      ) : (
        <h1>Partner Not Found</h1>
      )}
    </PageWrapper>
  )
}
export default Partner

const PartnerWrapper = styled.div`
  ${elevation(4)};
  margin: 2rem;
  padding-bottom: 2rem;
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
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
  flex-wrap: wrap;
`
const FeaturedImage = styled.img`
  height: 20rem;
  display: block;
  margin: 1rem;
  object-fit: contain;
`
const Description = styled(DynamicSection)`
  padding-right: 3rem;
  padding-top: 2rem;
`
const ListWrapper = styled.section`
  padding: 2rem 0;
`
const Reports = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ReportItem = styled.li`
  margin: 3rem 2rem;
`
const ReportCard = styled.a`
  ${elevation(4)};
  padding: 3.5rem 2rem 2rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  width: 32.5rem;
  text-align: center;
  backface-visibility: hidden;
  ${transition({ name: 'easeOutCubic', time: 0.3 })};
  &:hover {
    transform: rotate(1deg) translateX(-10px) translateY(-10px);
    ${transition({ name: 'easeInCubic' })};
  }
`
const ReportCover: any = styled.div`
  height: 33rem;
  width: 25rem;
  background-image: url(${(props: any) => props.src.replace("'", '')});
  background-size: cover;
  box-shadow: inset 0 0 4px 2px rgba(0, 0, 0, 0.2);
`

const VideoReportCard = styled(ReportCard)`
  width: 39rem;
  padding: 3rem 2rem 2rem;
`
const VideoReportCover = styled(ReportCover)`
  height: 25rem;
  width: 33rem;
`

const ReportTitle = styled.span`
  color: ${props => props.theme.primaryText};
  font-weight: 500;
  font-size: 1.8rem;
  padding-top: 2rem;
`
const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  height: 30rem;
  margin: 1rem;
`
const BackButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 5px;
  display: flex;
  transition: transform 0.2s ease-in;
  padding: 0 1rem;
  margin: 1rem 0;
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
