import { Router } from '@reach/router'
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Header from './header/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

export const theme = {
  black: '#222222',
  gray: '#364940',
  green: '#0ac775',
  grey: '#364940',
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
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <AppWrapper data-testid="app">
            <Router>
              <Header path="/*" />
            </Router>
            <Router>
              <Home path="/" />
              <About path="/about" />
              <Contact path="/contact" />
            </Router>
            <Router primary={false}>
              <Footer path="/*" />
            </Router>
          </AppWrapper>
        </ThemeProvider>
      </React.StrictMode>
    )
  }
}

export default App

const AppWrapper = styled.div``
