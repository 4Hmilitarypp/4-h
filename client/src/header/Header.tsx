import { Link } from '@reach/router'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/4h-logo.png'
import DropdownBackground from './DropdownBackground'
import LinkGroup from './LinkGroup'

const Header: React.SFC<RouteComponentProps> = () => {
  const [backgroundCoords, setBackgroundCoords] = React.useState({
    height: 100,
    left: 0,
    top: 0,
    width: 100,
  })
  const [backgroundOpen, setBackgroundOpen] = React.useState(false)
  const backgroundManagement = { setCoords: setBackgroundCoords, setOpen: setBackgroundOpen }

  return (
    <>
      <DropdownBackground {...backgroundCoords} open={backgroundOpen} />
      <HeaderContainer>
        <Heading to="/">
          <Title>
            <TitleWords>4-H Military</TitleWords>
            <TitleWords>Partnerships</TitleWords>
          </Title>
          <Logo src={logo} />
        </Heading>
        <Links>
          <LinkGroup title="About Us" manageBackground={backgroundManagement}>
            <DropdownLink to="/about">
              <LinkTitle>About Us</LinkTitle>
              <LinkDescription>Learn about the 4-H Military Partnership</LinkDescription>
            </DropdownLink>
            <DropdownLink to="/history">
              <LinkTitle>History</LinkTitle>
              <LinkDescription>Learn about our history</LinkDescription>
            </DropdownLink>
          </LinkGroup>
          <LinkGroup title="Partners" manageBackground={backgroundManagement}>
            <DropdownLink to="/partners">
              <LinkTitle>Partners List</LinkTitle>
              <LinkDescription>View all of the partners affiliated with 4-H</LinkDescription>
            </DropdownLink>
          </LinkGroup>
          <LinkGroup title="Events" manageBackground={backgroundManagement}>
            <DropdownLink to="/past-events">
              <LinkTitle>Past Events</LinkTitle>
              <LinkDescription>Check out some of the past events we have sponsored</LinkDescription>
            </DropdownLink>
            <DropdownLink to="/upcoming-events">
              <LinkTitle>Upcoming Events</LinkTitle>
              <LinkDescription>Get involved with one of our upcoming events</LinkDescription>
            </DropdownLink>
            <DropdownLink to="/photos">
              <LinkTitle>Photos</LinkTitle>
              <LinkDescription>View some of the photos taken at our fun events</LinkDescription>
            </DropdownLink>
          </LinkGroup>
          <LinkGroup title="4-H Club" manageBackground={backgroundManagement}>
            <DropdownLink to="/4-h-club">
              <LinkTitle>About</LinkTitle>
              <LinkDescription>Learn about 4-H club in general</LinkDescription>
            </DropdownLink>
            <DropdownLink as="a" href="https://4-h.org">
              <LinkTitle>4-H Website</LinkTitle>
              <LinkDescription>Check out the 4-H official website</LinkDescription>
            </DropdownLink>
          </LinkGroup>
          <LinkGroup title="Educators" manageBackground={backgroundManagement}>
            <DropdownLink to="/webinars">
              <LinkTitle>Webinars</LinkTitle>
              <LinkDescription>Watch recorded webinars</LinkDescription>
            </DropdownLink>
            <DropdownLink to="/research">
              <LinkTitle>Research</LinkTitle>
              <LinkDescription>Read up on some relevant research articles</LinkDescription>
            </DropdownLink>
            <DropdownLink to="/resources">
              <LinkTitle>Resources</LinkTitle>
              <LinkDescription>Find the educating resources you need</LinkDescription>
            </DropdownLink>
          </LinkGroup>
          <LinkGroup title="Connect" manageBackground={backgroundManagement}>
            <DropdownLink to="/find-a-liaison">
              <LinkTitle>Find A Liaison</LinkTitle>
              <LinkDescription>Get connected with the liaison closest to you</LinkDescription>
            </DropdownLink>
            <DropdownLink to="/contact-us">
              <LinkTitle>Contact Us</LinkTitle>
              <LinkDescription>Send us a message to answer any questions</LinkDescription>
            </DropdownLink>
          </LinkGroup>
        </Links>
        <SignIn to="sign-in">Sign In</SignIn>
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
`
const Title = styled.div`
  padding-left: 2rem;
  font-weight: bold;
`
const TitleWords = styled.div``
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
const DropdownLink: any = styled(Link)`
  display: block;
  &:not(:first-child) {
    padding-top: 1rem;
  }
  &:hover {
    opacity: 0.8;
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
  padding-top: 0rem;
`
const SignIn = styled(Link)`
  font-size: 1.7rem;
  color: ${props => props.theme.primary};
  padding-right: 2rem;
`
