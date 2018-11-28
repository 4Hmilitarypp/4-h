import { Router } from '@reach/router'
import * as React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'

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
