import { User } from "./user";

export class SignUpResponse {
  constructor(public readonly user: User, public readonly token: string) {}
}
