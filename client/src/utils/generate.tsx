import faker from 'faker'
import { ILiaison } from '../types'

const generate = {
  liaison: (overrides?: Partial<ILiaison>): ILiaison => ({
    email: faker.internet.email(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    phoneNumber: `+1-${faker.phone.phoneNumberFormat(0)}`,
    region: faker.address.state(),
    ...overrides,
  }),
  liaisons: (length: number): ILiaison[] => {
    const liaisons = Array.apply(null, { length }).map(() => generate.liaison())
    return liaisons
  },
}

export default generate
