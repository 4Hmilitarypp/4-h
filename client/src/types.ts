export interface IHashProps {
  ref: React.RefObject<HTMLElement>
  hash: string
  location: any
}

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

export interface IBackgroundCoords {
  height: number
  left: number
  open: boolean
  top: number
  width: number
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
