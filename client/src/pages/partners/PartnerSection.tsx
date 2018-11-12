import { Link, RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { IPartnerSection } from '../../types'
import { trimToLength } from '../../utils/string'

interface IProps extends RouteComponentProps {
  partner: IPartnerSection
  index: number
}

const PartnerSection: React.SFC<IProps> = ({ partner, index }) => {
  return (
    <PartnerWrapper index={index}>
      <Content index={index}>
        <Text>
          <Title>{partner.title}</Title>
          {/* Also have a length limiter in the Backend */}
          <Description>{trimToLength(300, partner.shortDescription)}</Description>
          <LearnMore to={partner.slug}>Learn More</LearnMore>
        </Text>
        <FeaturedImage src={partner.featuredImages[0].url} alt={partner.featuredImages[0].alt} />
        {partner.featuredImages[1] && (
          <FeaturedImage src={partner.featuredImages[1].url} alt={partner.featuredImages[1].alt} />
        )}
      </Content>
    </PartnerWrapper>
  )
}
export default PartnerSection

const PartnerWrapper: any = styled.section`
  padding: 3rem;
  background: ${(props: any) => (props.index % 2 === 1 ? props.theme.white : '#e6ddee')};
`
const Title = styled.h2`
  color: ${props => props.theme.secondary};
  padding-bottom: 1rem;
`
const FeaturedImage = styled.img`
  height: 20rem;
  padding: 2rem;
  object-fit: contain;
  background: ${props => props.theme.white};
  border-radius: 5px;
`
const Description = styled.p`
  max-width: 70rem;
  padding-bottom: 2rem;
`
const LearnMore = styled(Link)`
  padding: 0.5rem 1.5rem;
  border: 3px solid ${props => props.theme.secondary};
  font-size: 1.8rem;
  border-radius: 5px;
  color: ${props => props.theme.secondary};
  font-weight: 500;
  &:hover {
    color: ${props => props.theme.white};
    border: none;
    background: ${props => props.theme.secondary};
    padding: 0.8rem 1.8rem;
  }
`
const Content: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props: any) => (props.index % 2 === 1 ? 'row-reverse' : 'row')};
  max-width: 140rem;
  margin: 0 auto;
`
const Text = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
