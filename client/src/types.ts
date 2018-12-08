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
  abbreviation?: string | null
  email?: string | null
  image: string
  name?: string | null
  phoneNumber?: string | null
  region: string
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

export interface IContactUsEmail {
  email: string
  message: string
  name: string
}

export interface IImage {
  alt?: string
  url: string
}

export interface ILink {
  linkText: string
  title: string
  url: string
}

export interface IPartnerSection {
  featuredImages: IImage[]
  shortDescription: string
  slug: string
  title: string
}

interface IReport {
  image: string
  title: string
  url: string
}
export interface IPartner extends IPartnerSection {
  annualReports?: IReport[]
  images?: IImage[]
  longDescription: string
  videoReports?: IReport[]
}

export interface IWebinar {
  category: string
  description: string
  title: string
  webinarLink: string
}

/**
 * Types
 */

export type FormInputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
