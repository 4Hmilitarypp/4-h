import faker from 'faker'
import { IContactUsEmail, ILiaison, ISignInForm, IWebinar } from '../types'

const generate = {
  contactUsEmail: (overrides?: Partial<IContactUsEmail>): IContactUsEmail => ({
    email: faker.internet.email(),
    message: faker.lorem.paragraph(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }),
  liaison: (overrides?: Partial<ILiaison>): ILiaison => ({
    email: faker.internet.email(),
    image: faker.random.image(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    phoneNumber: `+1-${faker.phone.phoneNumberFormat(0)}`,
    region: faker.address.state(),
    ...overrides,
  }),
  liaisons: (length: number): ILiaison[] => Array.from({ length }, () => generate.liaison()),
  signInForm: (): ISignInForm => ({ email: faker.internet.email(), password: faker.internet.password() }),
  webinar: (descriptionLength: number): IWebinar => ({
    category: faker.commerce.productAdjective(),
    description: faker.lorem.words(descriptionLength),
    title: faker.company.catchPhrase(),
    url: faker.internet.domainName(),
  }),
  webinars: (length: number): IWebinar[] => Array.from({ length }, () => generate.webinar(100)),
}

export default generate
