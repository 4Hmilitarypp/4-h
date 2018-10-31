import { Link } from '@reach/router'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components'
import logo from './assets/images/4h-logo.png'

const Header: React.SFC<RouteComponentProps> = () => (
  <HeaderContainer>
    {/* Have the 4h logo */}
    <Heading to="/">
      <Title>
        <TitleWords>4-H Military</TitleWords>
        <TitleWords>Partnerships</TitleWords>
      </Title>
      <Logo src={logo} />
    </Heading>
    <StyledLink to="/">Home</StyledLink>
    <Links>
      <LinkGroup>
        <StyledLink to="/about">About Us</StyledLink>
        <DropDown>Content</DropDown>
      </LinkGroup>
      <LinkGroup>
        <StyledLink to="/partners">Partners</StyledLink>
        <DropDown>Content</DropDown>
      </LinkGroup>
      <LinkGroup>
        <StyledLink to="/events">Events</StyledLink>
        <DropDown>Content</DropDown>
      </LinkGroup>
      <LinkGroup>
        <StyledLink to="/4-h-club">4-H Club</StyledLink>
        <DropDown>Content</DropDown>
      </LinkGroup>
      <LinkGroup>
        <StyledLink to="/educators">Educators</StyledLink>
        <DropDown>Content</DropDown>
      </LinkGroup>
      <LinkGroup>
        <StyledLink as="span">Connect</StyledLink>
        <LinkList>
          <StyledLink to="find-a-liaison">Find a Liaison</StyledLink>
          <StyledLink to="contact-us">Contact Us</StyledLink>
        </LinkList>
      </LinkGroup>
    </Links>
    <DropDownBackground>
      <BackgroundArrow />
    </DropDownBackground>
  </HeaderContainer>
)
export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
`

const Heading = styled(Link)`
  color: ${props => props.theme.primary};
  display: flex;
  justify-content: center;
`
const Title = styled.div``
const TitleWords = styled.div``
const Logo = styled.img`
  height: 4.8rem;
  padding-left: 2rem;
`

const Links = styled.ul`
  display: inline-block;
  padding-left: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.white};
`

const LinkGroup = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 2.4rem;
`
const DropDown = styled.div`
  opacity: 0;
  position: absolute;
  overflow: hidden;
  padding: 20px;
  top: -20px;
  border-radius: 2px;
  transition: all 0.5s;
  transform: translateY(100px);
  will-change: opacity;
  display: none;
`

const DropDownBackground = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  &.open {
    opacity: 1;
  }
  /*
      Styles on element: (will need to use a hook)
      width: 300px;
    height: 394.6px;
    transform: translate(601.263px, 146.313px);
    */
`
const BackgroundArrow = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  display: block;
  background: white;
  transform: translateY(-50%) rotate(45deg);
`

const LinkList = styled.div``
