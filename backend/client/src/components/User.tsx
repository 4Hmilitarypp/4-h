const User = () => null

export default User
/* import * as React from 'react'
import { IApiError, IUser } from '../types'
import api from '../utils/api'

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
    return api.auth.me().then(
      ({ user }: { user?: IUser }) => this.reset({ user }),
      ({ response }: IApiError) => {
        return this.reset({ error: response.data.message || response.statusText })
      }
    )
  }

  login = ({ username, password }: { username: string; password: string }) => {
    this.reset({ pending: true })
    return api.auth
      .login({ username, password })
      .then(
        ({ user }: { user: IUser }) => this.reset({ user }),
        ({ response }: IApiError) => this.reset({ error: response.data.message || response.statusText })
      )
  }

  logout = () => {
    this.reset({ pending: true })
    return api.auth
      .logout()
      .then(
        () => this.reset(),
        ({ response }: IApiError) => this.reset({ error: response.data.message || response.statusText })
      )
  }

  register = ({ username, password }: { username: string; password: string }) => {
    this.reset({ pending: true })
    return api.auth
      .register({ username, password })
      .then(
        ({ user }: { user: IUser }) => this.reset({ user }),
        ({ response }: IApiError) => this.reset({ error: response.data.message || response.statusText })
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
 */
