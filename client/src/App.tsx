import { Router } from '@reach/router'
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

export const theme = {
  black: '#222222',
  green: '#0ac775',
  grey: '#364940',
  lightGrey: '#799687',
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
