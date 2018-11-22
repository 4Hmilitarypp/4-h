import { Router } from '@reach/router'
import * as React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import Footer from './Footer'
import Header from './header/Header'
import About from './pages/About'
import About4HClub from './pages/About4HClub'
import ContactUs from './pages/ContactUs'
import Educator from './pages/Educator'
import Events from './pages/Events'
import FindLiaison from './pages/FindLiaison'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Partner from './pages/Partner'
import Partners from './pages/partners/Partners'
import Photos from './pages/Photos'
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
  primaryText: '#0f854a',
  secondary: '#5a2a82',
  warning: '#bb0000',
  white: '#fff',
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div data-testid="app">
          <Router>
            <Header path="/*" />
          </Router>
          <Router primary={false}>
            <Home path="/" />
            <About path="/about" />
            <Partners path="/partners" />
            <Partner path="/partners/:slug" />
            <Events path="/events" />
            <Photos path="/photos" />
            <About4HClub path="/4-h-club" />
            <Educator path="/educators" />
            <FindLiaison path="/find-a-liaison" />
            <ContactUs path="contact-us" />
            <NotFound default={true} />
          </Router>
          <Router primary={false}>
            <Footer path="/*" />
          </Router>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
