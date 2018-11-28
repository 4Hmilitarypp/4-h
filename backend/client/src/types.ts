import * as React from 'react'
import { ThemedStyledProps } from 'styled-components/macro'

export interface IHashProps {
  refToFocus: React.RefObject<HTMLElement>
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

export interface ISignInForm {
  email: string
  password: string
}

export interface IBackgroundCoords {
  height: number
  left: number
  open: boolean
  top: number
  width: number
}

/**
 * Styles
 */

export interface IHeadingProps
  extends ThemedStyledProps<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
    any
  > {
  center?: boolean
  color?: string
}

export interface IForm {
  currentTarget: {
    elements: {
      [key: string]: HTMLInputElement | HTMLTextAreaElement
    }
  }
}

/**
 * Types
 */

export type FormInputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
