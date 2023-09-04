import { faker } from '@faker-js/faker'
import { UserProps } from "../../entities/user.entity";

type Props = {
  name?: string
  email?: string
  password?: string
  createdAt?: Date
}
export function UserDataBuilder( Props ): UserProps {
  return {
    name: Props.name ?? faker.person.fullName(),
    email: Props.email ?? faker.internet.email(),
    password: Props.password ?? faker.internet.password(),
    createdAt: Props.createdAt ?? new Date()
  }
}
