import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
// import api from '../../utils/api'
import staticPartnerSections from '../../assets/data/staticPartnerSections.json'
import { Heading } from '../../components/Elements'
import { IPartnerSection } from '../../types'
import PartnerSection from './PartnerSection'

const Partners: React.SFC<RouteComponentProps> = () => {
  const [partners, setPartners] = React.useState<IPartnerSection[] | undefined>(undefined)

  React.useEffect(() => {
    // api.partners.getSections().then(({ partnerSections }) => setPartners(partnerSections))
    setPartners(staticPartnerSections)
  }, [])

  // A partner will have a title, a picture, and a description
  // How will a specifics which partner it is?
  // I will get all the partners on mount, so maybe by their id (title for now)
  return (
    <Wrapper>
      <Heading center={true}>Partners</Heading>
      <PartnerList>
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

const PartnerList = styled.div`
  padding-top: 2rem;
`
