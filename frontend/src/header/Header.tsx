import { Link } from '@reach/router'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import DropdownBackground from './DropdownBackground'
import LinkGroup from './LinkGroup'
import SignInModal from './SignInModal'

const DropdownLink: React.FC = props => <Link tabIndex={0} {...props} />

const Header: React.FC<RouteComponentProps> = () => {
  const [backgroundCoords, setBackgroundCoords] = React.useState({
    height: 100,
    left: 0,
    top: 0,
    width: 100,
  })
  const [backgroundOpen, setBackgroundOpen] = React.useState(false)
  const navRef = React.useRef<HTMLDivElement>(null)
  const backgroundManagement = { setCoords: setBackgroundCoords, setOpen: setBackgroundOpen, navRef }

  return (
    <>
      <DropdownBackground {...backgroundCoords} open={backgroundOpen} />
      <HeaderContainer>
        <Heading to="/" data-testid="main-logo">
          <Title>
            <TitleWords>4-H Military</TitleWords>
            <TitleWords>Partnerships</TitleWords>
          </Title>
          <Logo src="https://res.cloudinary.com/four-hmpp/image/upload/v1542786198/logos/4h-logo.png" alt="4-H Logo" />
        </Heading>
        <Links ref={navRef as any}>
          <LinkGroup title="About Us" to="/about" manageBackground={backgroundManagement}>
            <StyledDropdownLink to="/about">
              <LinkTitle>About Us</LinkTitle>
              <LinkDescription>Learn about the 4-H Military Partnership</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="/about/#history">
              <LinkTitle>History</LinkTitle>
              <LinkDescription>Learn about our history</LinkDescription>
            </StyledDropdownLink>
          </LinkGroup>
          <LinkGroup title="Partners" to="/partners" manageBackground={backgroundManagement}>
            <StyledDropdownLink to="/partners">
              <LinkTitle>Partners List</LinkTitle>
              <LinkDescription>View all of the partners affiliated with 4-H</LinkDescription>
            </StyledDropdownLink>
          </LinkGroup>
          <LinkGroup title="Events" to="/events/" manageBackground={backgroundManagement}>
            <StyledDropdownLink to="/events/#past-events">
              <LinkTitle>Past Events</LinkTitle>
              <LinkDescription>Check out some of the past events we have sponsored</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="/events">
              <LinkTitle>Upcoming Events</LinkTitle>
              <LinkDescription>Get involved with one of our upcoming events</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="/photos">
              <LinkTitle>Photos</LinkTitle>
              <LinkDescription>View some of the photos taken at our fun events</LinkDescription>
            </StyledDropdownLink>
          </LinkGroup>
          <LinkGroup title="4-H Club" to="/4-h-club" manageBackground={backgroundManagement}>
            <StyledDropdownLink to="/4-h-club">
              <LinkTitle>About</LinkTitle>
              <LinkDescription>Learn about 4-H club in general</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="4-h-club/get-involved">
              <LinkTitle>Get Involved</LinkTitle>
              <LinkDescription>Learn how to join 4-H or make an impact through becoming a volunteer</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink as="a" href="https://4-h.org">
              <LinkTitle>4-H Website</LinkTitle>
              <LinkDescription>Check out the 4-H official website</LinkDescription>
            </StyledDropdownLink>
          </LinkGroup>
          <LinkGroup title="Educators" to="/educators" manageBackground={backgroundManagement}>
            <StyledDropdownLink to="/educators">
              <LinkTitle>General Info</LinkTitle>
              <LinkDescription>Learn about your role as an educator</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="/educators/webinars">
              <LinkTitle>Webinars</LinkTitle>
              <LinkDescription>Watch recorded webinars</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="/educators/research">
              <LinkTitle>Research</LinkTitle>
              <LinkDescription>Read up on some relevant research articles</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="/educators/resources">
              <LinkTitle>Resources</LinkTitle>
              <LinkDescription>Find the educating resources you need</LinkDescription>
            </StyledDropdownLink>
          </LinkGroup>
          <LinkGroup title="Connect" to="/find-a-liaison" manageBackground={backgroundManagement}>
            <StyledDropdownLink to="/find-a-liaison">
              <LinkTitle>What is a Liaison?</LinkTitle>
              <LinkDescription>Learn about how our liaisons can assist you</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="/find-a-liaison/#search">
              <LinkTitle>Find A Liaison</LinkTitle>
              <LinkDescription>Get connected with the liaison closest to you</LinkDescription>
            </StyledDropdownLink>
            <StyledDropdownLink to="/contact-us">
              <LinkTitle>Contact Us</LinkTitle>
              <LinkDescription>Send us a message to answer any questions</LinkDescription>
            </StyledDropdownLink>
          </LinkGroup>
        </Links>
        <SignInModal>Sign In</SignInModal>
      </HeaderContainer>
    </>
  )
}
export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
`
const Heading = styled(Link)`
  color: ${props => props.theme.primary};
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`
const Title = styled.div`
  font-weight: bold;
`
const TitleWords = styled.span`
  line-height: 1.4;
  display: block;
`
const Logo = styled.img`
  height: 4.2rem;
  padding-left: 2rem;
`
const Links = styled.ul`
  display: inline-flex;
  padding: 0 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.white};
`
const LinkTitle = styled.p`
  color: ${props => props.theme.primary};
`
const StyledDropdownLink: any = styled(DropdownLink)`
  display: block;
  padding: 0.5rem;
  &:not(:first-child) {
    padding-top: 1rem;
  }
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:nth-child(2n + 1) {
    ${LinkTitle} {
      color: ${props => props.theme.secondary};
    }
  }
`
const LinkDescription = styled.p`
  color: ${props => props.theme.lightGray};
  font-weight: 400;
  padding-left: 1.5rem;
  padding-top: 0;
`
