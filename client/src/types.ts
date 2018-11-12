import * as React from 'react'
import { ThemedStyledProps } from 'styled-components/macro'

/**
 * Api
 */
export interface IApiError {
  response: {
    status: number
    statusText: string
    data: {
      message?: string
    }
  }
}

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

export interface ILiaison {
  email?: string | null
  name?: string | null
  phoneNumber?: string | null
  region: string
  abbreviation?: string | null
}

/**
 * Styles
 */

export interface IHeadingProps
  extends ThemedStyledProps<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      any
    > {
  color?: string
  center?: boolean
}

export interface IForm {
  currentTarget: {
    elements: {
      [key: string]: HTMLInputElement | HTMLTextAreaElement
    }
  }
}

export interface IContactUsEmail {
  name: string
  email: string
  message: string
}

export interface IImage {
  alt: string
  url: string
}

export interface ILink {
  title: string
  url: string
  linkText: string
}

export interface IPartnerSection {
  title: string
  featuredImages: IImage[]
  shortDescription: string
  slug: string
}

interface IReport {
  title: string
  url: string
}

export interface IPartner extends IPartnerSection {
  longDescription: string
  links?: ILink[]
  images?: IImage[]
  annualReports?: IReport[]
}

/**
 * Types
 */

export type FormInputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
