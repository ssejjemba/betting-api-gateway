import { User } from "./user";

export class SignInResponse {
  constructor(public readonly user: User, public readonly token: string) {}
}
