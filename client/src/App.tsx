import * as React from 'react'
import { Router } from '@reach/router'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'

export const theme = {
  black: '#222222',
  green: '#0ac775',
  grey: '#364940',
  lightGrey: '#799687',
  primary1: '#654597',
  primary2: '#AB81CD',
  primary3: '#9C95DC',
  primary4: '#C19AB7',
  secondary: '#339966',

  warning: '#bb0000',
  white: '#fff',
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <>
            <Router>
              <Header path="/*" />
            </Router>
            <AppWrapper className="hi" data-testid="app">
              <Router>
                <Home path="/" />
                <About path="/about" />
                <Contact path="/contact" />
              </Router>
            </AppWrapper>
            <Router primary={false}>
              <Footer path="/*" />
            </Router>
          </>
        </ThemeProvider>
      </React.StrictMode>
    )
  }
}

export default App

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
`
