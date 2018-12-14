import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from './components/Elements'
import { elevation } from './utils/mixins'

const Sidebar: React.FC<RouteComponentProps> = ({ location: { pathname: path = '' } = {} }) => {
  return (
    <SidebarWrapper>
      <LinkGroup>
        <GroupHeader>Family Content</GroupHeader>
        <Links>
          <SideBarLink to="/partners" className={path === '/partners' ? 'active' : ''}>
            Partners
          </SideBarLink>
          <SideBarLink to="/liaisons" className={path === '/liaisons' ? 'active' : ''}>
            Liaisons
          </SideBarLink>
          <SideBarLink to="/camps" className={path === '/camps' ? 'active' : ''}>
            Camps
          </SideBarLink>
        </Links>
      </LinkGroup>
      <LinkGroup>
        <GroupHeader>Educator Content</GroupHeader>
        <Links>
          <SideBarLink to="/webinars" className={path === '/webinars' ? 'active' : ''}>
            Webinars
          </SideBarLink>
          <SideBarLink to="/research" className={path === '/research' ? 'active' : ''}>
            Research
          </SideBarLink>
          <SideBarLink to="/resources" className={path === '/resources' ? 'active' : ''}>
            Resources
          </SideBarLink>
        </Links>
      </LinkGroup>
      <LinkGroup>
        <Links />
        <GroupHeader>Media Library</GroupHeader>
      </LinkGroup>
      <LinkGroup>
        <Links />
        <GroupHeader>User Roles</GroupHeader>
      </LinkGroup>
      <LinkGroup>
        <GroupHeader>Liaison Admin</GroupHeader>
        <Links />
      </LinkGroup>
    </SidebarWrapper>
  )
}
export default Sidebar

const SidebarWrapper = styled.div`
  background: ${props => props.theme.white};
  padding: 2rem;
  height: 100%;
  width: 24rem;
  position: fixed;
  ${elevation(3)};
`

const LinkGroup = styled.nav`
  padding: 1.2rem 0;
`
const GroupHeader = styled.h4`
  color: ${props => props.theme.lightGray};
`
const Links = styled.div`
  padding: 0 0.8rem;
`
const SideBarLink = styled(Link)`
  display: block;
  color: ${props => props.theme.black};
  &.active {
    background: ${props => props.theme.inputGray};
    margin: 0 -2.8rem;
    padding: 0.4rem 2.4rem;
    border-left: 4px solid ${props => props.theme.primary};
  }
  padding: 0.4rem 0;
`
