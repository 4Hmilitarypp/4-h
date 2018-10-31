export interface IUser {
  email?: string
  name: string
  password: string
  token: string
  username: string
}

export interface IApiError {
  message: string
  response: {
    status: number
    data: {
      message: string
    }
  }
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
