import faker from 'faker'
import { IContactUsEmail, ILiaison, ISignInForm } from '../types'

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
  liaisons: (length: number): ILiaison[] => {
    const liaisons = Array.from({ length }, () => generate.liaison())
    return liaisons
  },
  signInForm: (): ISignInForm => ({ email: faker.internet.email(), password: faker.internet.password() }),
}

export default generate
