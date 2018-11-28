import faker from 'faker'
import { ObjectId } from 'mongodb'
import { ILiaison, IWebinar } from '../sharedTypes'

const generate = {
  liaison: (overrides?: Partial<ILiaison>): ILiaison => ({
    email: faker.internet.email(),
    image: faker.random.image(),
    liaisonId: new ObjectId().toHexString(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    phoneNumber: `${faker.phone.phoneNumberFormat(0)}`,
    region: faker.address.state(),
    ...overrides,
  }),
  liaisons: (length: number): ILiaison[] => Array.from({ length }, () => generate.liaison()),
  objectId: () => new ObjectId().toHexString(),
  webinar: (descriptionLength: number = 100, overrides: {} = {}): IWebinar => ({
    category: faker.commerce.productAdjective(),
    description: faker.lorem.words(descriptionLength),
    title: faker.company.catchPhrase(),
    url: faker.internet.domainName(),
    webinarId: new ObjectId().toHexString(),
    ...overrides,
  }),
  webinars: (length: number): IWebinar[] => Array.from({ length }, () => generate.webinar(100)),
}

export default generate
