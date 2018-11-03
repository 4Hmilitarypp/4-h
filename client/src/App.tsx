import { Router } from '@reach/router'
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Header from './header/Header'
import About from './pages/About'
import About4HClub from './pages/About4HClub'
import Contact from './pages/Contact'
import Educator from './pages/Educator'
import Events from './pages/Events'
import FindLiaison from './pages/FindLiaison'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Partners from './pages/Partners'
import Photos from './pages/Photos'
import SignIn from './pages/SignIn'

export const theme = {
  black: '#222222',
  gray: '#3d4340',
  green: '#0ac775',
  grey: '#3d4340',
  inputGray: '#edf2f0',
  inputGrey: '#edf2f0',
  lightGray: '#828c87',
  lightGrey: '#828c87',
  offWhite: '#f7f8f7',
  primary: '#339966',
  secondary: '#5a2a82',
  warning: '#bb0000',
  white: '#fff',
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper data-testid="app">
          <Router>
            <Header path="/*" />
          </Router>
          <Router primary={false}>
            <Home path="/" />
            <About path="/about" />
            <Contact path="/contact" />
            <About path="/about" />
            <Partners path="/partners" />
            <Events path="/events" />
            <Photos path="/photos" />
            <About4HClub path="/4-h-club" />
            <Educator path="/educators" />
            <FindLiaison path="/find-a-liaison" />
            <Contact path="/contact-us" />
            <SignIn path="sign-in" />
            <NotFound default={true} />
          </Router>
          <Router primary={false}>
            <Footer path="/*" />
          </Router>
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App

const AppWrapper = styled.div``
