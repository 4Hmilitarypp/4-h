import faker from 'faker'
import { ILiaison, IWebinar } from '../sharedTypes'
import { ISignInForm } from '../types'

const generate = {
  liaison: (overrides?: Partial<ILiaison>): ILiaison => ({
    email: faker.internet.email(),
    image: faker.random.image(),
    liaisonId: faker.random.alphaNumeric(24),
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
    webinarId: faker.random.alphaNumeric(24),
  }),
  webinars: (length: number): IWebinar[] => Array.from({ length }, () => generate.webinar(100)),
}

export default generate
