import { Router } from '@reach/router'
import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components/macro'
import Header from './Header'
import Camps from './pages/Camps'
import Home from './pages/Home'
import Liaisons from './pages/liaisons/Liaisons'
import Media from './pages/Media'
import NotFound from './pages/NotFound'
import Partners from './pages/Partners'
import Research from './pages/Research'
import Resources from './pages/Resources'
import Webinars from './pages/Webinars'
import Sidebar from './Sidebar'

export const theme = {
  black: 'hsl(150, 20%, 20%)',
  buttonBackground: '#278657',
  gray: 'hsl(150, 20%, 25%)',
  green: '#0ac775',
  grey: 'hsl(150, 20%, 25%)',
  inputGray: 'hsl(150,39%,96%)',
  inputGrey: 'hsl(150,39%,96%)',
  lightGray: 'hsl(150, 20%, 40%)',
  lightGrey: 'hsl(150, 20%, 40%',
  offWhite: '#f7f8f7',
  primary: 'hsl(150, 50%, 40%)',
  primaryText: '#0e8147',
  secondary: '#5a2a82',
  warning: '#bb0000',
  white: '#fff',
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWContainer data-testid="app">
          <GlobalStyle />
          <HeaderContainer>
            <Header path="/*" />
          </HeaderContainer>
          <SidebarContainer>
            <Sidebar path="/*" />
          </SidebarContainer>
          <Router primary={false}>
            <Home path="/" />
            <Liaisons path="/liaisons" />
            <Partners path="/partners" />
            <Camps path="/camps" />
            <Webinars path="/webinars" />
            <Research path="/research" />
            <Resources path="/resources" />
            <Media path="/media" />
            <NotFound default={true} />
          </Router>
        </AppWContainer>
      </ThemeProvider>
    )
  }
}

export default App

const GlobalStyle = createGlobalStyle`
  body {
  background: ${theme.inputGray};
  font-family: Rubik, arial, sans-serif;
  }
  input,
  textarea, button {
    font-family: Rubik, arial;
  }
`
const AppWContainer = styled.div`
  display: grid;
  grid-template-rows: 6.4rem 1fr;
  grid-template-columns: 24rem 1fr;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.black};
`
const HeaderContainer = styled(Router)`
  grid-column: 1 / -1;
  grid-row: 1 / 1;
`
const SidebarContainer = styled(Router)`
  grid-column: 1 / 1;
  grid-row: 2 / -1;
`
