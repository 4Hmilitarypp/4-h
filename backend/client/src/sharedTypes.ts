export interface IApiError extends Error {
  status?: number
  type?: string
}

export interface ILiaison {
  abbreviation?: string | null
  email?: string | null
  image: string
  liaisonId: string
  name?: string | null
  phoneNumber?: string | null
  region: string
}

export interface IPartnerSection {
  title: string
  featuredImages: IImage[]
  partnerSectionId: string
  shortDescription: string
  slug: string
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

interface IReport {
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
  url: string
  webinarId: string
}
