import * as React from 'react'
import { IApiError, IUser } from 'utils/types'
import restApi from '../utils/api'

// TODO Add a error handler that will turn errors into
// TODO friendly errors. For example, if status is 500
// TODO make the error MessageChannel: something messed up on the backend, sorry
interface IProps {
  children: (nodes: any) => React.ReactNode
}

interface IState {
  user?: IUser
  error?: string
  pending: boolean
}

export default class User extends React.Component<IProps, IState> {
  initialState = { user: undefined, error: undefined, pending: false }

  state = { user: undefined, error: undefined, pending: false }

  componentDidMount() {
    this.reset({ pending: true })
    return restApi.auth.me().then(
      ({ user }: { user?: IUser }) => this.reset({ user }),
      (error: IApiError) => {
        return this.reset({ error: error.message })
      }
    )
  }

  login = ({ username, password }: { username: string; password: string }) => {
    this.reset({ pending: true })
    return restApi.auth
      .login({ username, password })
      .then(
        ({ user }: { user: IUser }) => this.reset({ user }),
        (error: IApiError) => this.reset({ error: error.message })
      )
  }

  logout = () => {
    this.reset({ pending: true })
    return restApi.auth.logout().then(() => this.reset(), (error: IApiError) => this.reset({ error: error.message }))
  }

  register = ({ username, password }: { username: string; password: string }) => {
    this.reset({ pending: true })
    return restApi.auth
      .register({ username, password })
      .then(
        ({ user }: { user: IUser }) => this.reset({ user }),
        (error: IApiError) => this.reset({ error: error.message })
      )
  }

  reset(overrides?: { user?: IUser; error?: string; pending?: boolean }) {
    const newState = { ...this.initialState, ...overrides }
    this.setState(newState)
    return newState
  }

  render() {
    const { children } = this.props
    return children({
      ...this.state,
      login: this.login,
      logout: this.logout,
      register: this.register,
    })
  }
}
