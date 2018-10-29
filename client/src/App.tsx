import User from 'components/User'
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { IUser } from 'utils/types'

export const theme = {
  black: '#222222',
  green: '#0ac775',
  grey: '#364940',
  lightGrey: '#799687',
  maxWidth: '1000px',
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
          <AppWrapper className="hi" data-testid="app">
            <User>{({ user, error }: { user: IUser; error: string }) => <>{error && <h1>{error}</h1>}</>}</User>
          </AppWrapper>
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
